"use client"

import { useEffect, useRef } from "react"

const COLOR = "#8c52ff" // Purple
const HIT_COLOR = "#ff4080" // Pink
const BACKGROUND_COLOR = "#000000"
const BALL_COLOR = "#ffc502" // Gold
const PADDLE_COLOR = "#8c52ff" // Purple
const TRAIL_COLOR = "#ff4080" // Pink

const PIXEL_MAP = {
    A: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    R: [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ],
    T: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    H: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    C: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
    ],
}

interface Pixel {
    x: number
    y: number
    size: number
    hit: boolean
}

interface Ball {
    x: number
    y: number
    dx: number
    dy: number
    radius: number
}

interface Paddle {
    x: number
    y: number
    width: number
    height: number
}

interface Trail {
    x: number
    y: number
    age: number
}

export function BreakoutGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pixelsRef = useRef<Pixel[]>([])
    const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
    const paddleRef = useRef<Paddle>({ x: 0, y: 0, width: 0, height: 0 })
    const trailsRef = useRef<Trail[]>([])
    const mouseXRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            const container = canvas.parentElement
            if (!container) return

            canvas.width = container.clientWidth
            canvas.height = 300
            initializeGame()
        }

        const initializeGame = () => {
            const PIXEL_SIZE = 6
            const BALL_SPEED = 4

            pixelsRef.current = []
            const word = "ARTHACHAIN"

            const calculateWordWidth = (word: string) => {
                return word.split("").reduce((width, letter) => {
                    const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
                    return width + letterWidth * PIXEL_SIZE + PIXEL_SIZE
                }, 0) - PIXEL_SIZE
            }

            const totalWidth = calculateWordWidth(word)
            let startX = (canvas.width - totalWidth) / 2
            const startY = 50

            word.split("").forEach((letter) => {
                const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
                if (!pixelMap) return

                for (let i = 0; i < pixelMap.length; i++) {
                    for (let j = 0; j < pixelMap[i].length; j++) {
                        if (pixelMap[i][j]) {
                            const x = startX + j * PIXEL_SIZE
                            const y = startY + i * PIXEL_SIZE
                            pixelsRef.current.push({ x, y, size: PIXEL_SIZE, hit: false })
                        }
                    }
                }
                startX += (pixelMap[0].length + 1) * PIXEL_SIZE
            })

            // Initialize paddle
            paddleRef.current = {
                x: canvas.width / 2 - 50,
                y: canvas.height - 30,
                width: 100,
                height: 10
            }

            // Initialize ball
            ballRef.current = {
                x: canvas.width / 2,
                y: canvas.height - 60,
                dx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
                dy: -BALL_SPEED,
                radius: 5
            }

            trailsRef.current = []
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseXRef.current = e.clientX - rect.left
        }

        const updateGame = () => {
            const ball = ballRef.current
            const paddle = paddleRef.current

            // Add trail
            trailsRef.current.push({ x: ball.x, y: ball.y, age: 0 })
            trailsRef.current = trailsRef.current.filter(trail => {
                trail.age++
                return trail.age < 10
            })

            // Move ball
            ball.x += ball.dx
            ball.y += ball.dy

            // Wall collision
            if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
                ball.dx = -ball.dx
            }
            if (ball.y - ball.radius < 0) {
                ball.dy = -ball.dy
            }

            // Reset if ball falls
            if (ball.y - ball.radius > canvas.height) {
                ball.x = canvas.width / 2
                ball.y = canvas.height - 60
                ball.dy = -Math.abs(ball.dy)
            }

            // Paddle collision
            if (
                ball.y + ball.radius > paddle.y &&
                ball.y - ball.radius < paddle.y + paddle.height &&
                ball.x > paddle.x &&
                ball.x < paddle.x + paddle.width
            ) {
                ball.dy = -Math.abs(ball.dy)
                // Add spin based on where ball hits paddle
                const hitPos = (ball.x - paddle.x) / paddle.width
                ball.dx = (hitPos - 0.5) * 8
            }

            // Move paddle towards mouse
            const targetX = mouseXRef.current - paddle.width / 2
            paddle.x += (targetX - paddle.x) * 0.2
            paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x))

            // Pixel collision
            pixelsRef.current.forEach((pixel) => {
                if (
                    !pixel.hit &&
                    ball.x + ball.radius > pixel.x &&
                    ball.x - ball.radius < pixel.x + pixel.size &&
                    ball.y + ball.radius > pixel.y &&
                    ball.y - ball.radius < pixel.y + pixel.size
                ) {
                    pixel.hit = true

                    // Bounce ball
                    const centerX = pixel.x + pixel.size / 2
                    const centerY = pixel.y + pixel.size / 2
                    if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
                        ball.dx = -ball.dx
                    } else {
                        ball.dy = -ball.dy
                    }
                }
            })
        }

        const drawGame = () => {
            if (!ctx) return

            // Background
            ctx.fillStyle = BACKGROUND_COLOR
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw trails
            trailsRef.current.forEach((trail) => {
                const alpha = 1 - (trail.age / 10)
                ctx.fillStyle = TRAIL_COLOR
                ctx.globalAlpha = alpha * 0.5
                ctx.beginPath()
                ctx.arc(trail.x, trail.y, 3, 0, Math.PI * 2)
                ctx.fill()
            })
            ctx.globalAlpha = 1

            // Draw pixels
            pixelsRef.current.forEach((pixel) => {
                ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
                ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)

                // Glow effect on active pixels
                if (!pixel.hit) {
                    ctx.fillStyle = COLOR
                    ctx.globalAlpha = 0.3
                    ctx.fillRect(pixel.x - 1, pixel.y - 1, pixel.size + 2, pixel.size + 2)
                    ctx.globalAlpha = 1
                }
            })

            // Draw ball with glow
            ctx.shadowBlur = 20
            ctx.shadowColor = BALL_COLOR
            ctx.fillStyle = BALL_COLOR
            ctx.beginPath()
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.shadowBlur = 0

            // Draw paddle with gradient
            const gradient = ctx.createLinearGradient(
                paddle.x, paddle.y,
                paddle.x + paddle.width, paddle.y
            )
            gradient.addColorStop(0, PADDLE_COLOR)
            gradient.addColorStop(0.5, "#ff4080")
            gradient.addColorStop(1, PADDLE_COLOR)

            ctx.fillStyle = gradient
            ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)

            // Paddle glow
            ctx.fillStyle = PADDLE_COLOR
            ctx.globalAlpha = 0.3
            ctx.fillRect(paddle.x - 2, paddle.y - 2, paddle.width + 4, paddle.height + 4)
            ctx.globalAlpha = 1
        }

        let lastUpdate = 0
        const gameLoop = (timestamp: number) => {
            if (timestamp - lastUpdate > 16) { // ~60 FPS
                updateGame()
                lastUpdate = timestamp
            }
            drawGame()
            requestAnimationFrame(gameLoop)
        }

        resizeCanvas()
        canvas.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", resizeCanvas)
        requestAnimationFrame(gameLoop)

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full cursor-none"
            aria-label="ArthaChain Breakout Game - Move mouse to control paddle"
        />
    )
}

export default BreakoutGame
