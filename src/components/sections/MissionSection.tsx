'use client';

import { useEffect, useRef, useState } from 'react';
import './MissionSection.css';

interface CuboidFace {
    id: string;
    number: string;
    title: string;
    description: string;
    bgColor: string;
    iconComponent: React.ReactNode;
}

const cuboidFaces: CuboidFace[] = [
    {
        id: '01',
        number: 'O1',
        title: 'BUILD YOUR NETWORK IRL',
        description: 'This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.',
        bgColor: '#00FF41',
        iconComponent: (
            <div className="text-black text-[60px] md:text-[80px] font-normal">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-2 md:gap-3">
                        <span>┌</span>
                        <span>┐</span>
                    </div>
                    <div className="text-[45px] md:text-[60px]">+</div>
                    <div className="flex gap-2 md:gap-3">
                        <span>└</span>
                        <span>┘</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: '02',
        number: 'O2',
        title: 'SHARING KNOWLEDGE',
        description: 'This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.',
        bgColor: '#D1D5DB',
        iconComponent: (
            <div className="text-black text-[45px] md:text-[60px] font-black flex gap-2">
                <span>|</span>
                <span>||</span>
                <span>|</span>
            </div>
        ),
    },
    {
        id: '03',
        number: 'O3',
        title: 'BUILD WITH OTHERS',
        description: 'This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.',
        bgColor: '#E5E7EB',
        iconComponent: (
            <div className="text-black text-[45px] md:text-[60px] font-black">
                <div className="flex items-center gap-1">
                    <span>┌</span>
                    <span className="text-[32px] md:text-[40px]">···</span>
                    <span>┘</span>
                </div>
            </div>
        ),
    },
    {
        id: '04',
        number: 'O4',
        title: 'CELEBRATE PROGRESS',
        description: 'This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.',
        bgColor: '#A7F3D0',
        iconComponent: (
            <div className="text-black text-[60px] md:text-[80px] font-black flex items-end gap-1">
                <span className="text-[32px] md:text-[40px]">.</span>
                <span className="text-[40px] md:text-[50px]">▌</span>
                <span className="text-[50px] md:text-[65px]">▌</span>
                <span className="text-[60px] md:text-[80px]">▌</span>
            </div>
        ),
    },
];

export default function MissionSection() {
    const [currentFace, setCurrentFace] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const cuboidRef = useRef<HTMLDivElement>(null);
    const lastWheelTimeRef = useRef(0);

    useEffect(() => {
        const checkMobile = () => {
            // Show simple cards only on mobile, show 3D cuboid on tablet and above
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        let animating = false;

        const handleWheel = (e: WheelEvent) => {
            if (!sectionRef.current || animating) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const sectionVisible = rect.top < windowHeight && rect.bottom > 0;

            if (!sectionVisible) return;

            const now = Date.now();
            if (now - lastWheelTimeRef.current < 700) return;

            const scrollingDown = e.deltaY > 0;
            const scrollingUp = e.deltaY < 0;

            if (scrollingDown && currentFace < 3) {
                e.preventDefault();
                animating = true;
                lastWheelTimeRef.current = now;

                const nextFace = currentFace + 1;
                setCurrentFace(nextFace);

                if (cuboidRef.current) {
                    cuboidRef.current.style.transform = `rotateY(-${nextFace * 90}deg)`;
                }

                setTimeout(() => {
                    animating = false;
                }, 700);
            } else if (scrollingUp && currentFace > 0) {
                e.preventDefault();
                animating = true;
                lastWheelTimeRef.current = now;

                const nextFace = currentFace - 1;
                setCurrentFace(nextFace);

                if (cuboidRef.current) {
                    cuboidRef.current.style.transform = `rotateY(-${nextFace * 90}deg)`;
                }

                setTimeout(() => {
                    animating = false;
                }, 700);
            }
        };

        if (cuboidRef.current) {
            cuboidRef.current.style.transform = `rotateY(-${currentFace * 90}deg)`;
        }

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentFace, isMobile]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-12 md:py-16 lg:py-20 bg-white"
            style={{ minHeight: isMobile ? 'auto' : '100vh' }}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-12 lg:mb-20">
                    <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-black leading-[0.95] tracking-tight mb-5 md:mb-6">
                        <span className="text-[#00FF41]">THE ARTHA</span>
                        <span className="text-black">CHAIN</span>
                        <br />
                        <span className="text-[#00FF41]">MISS</span>
                        <span className="text-black">ION</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-[15px] md:text-base max-w-xl leading-relaxed">
                        ArthaChain Network is a cutting-edge Layer 1 blockchain designed to empower
                        developers and innovators in the decentralized ecosystem.
                    </p>
                </div>

                {/* Mobile: Simple Cards */}
                {isMobile ? (
                    <div className="space-y-6">
                        {cuboidFaces.map((face) => (
                            <div
                                key={face.id}
                                className="border-[2px] border-black shadow-lg overflow-hidden"
                            >
                                <div className="flex items-center justify-center h-32 sm:h-40" style={{ backgroundColor: face.bgColor }}>
                                    {face.iconComponent}
                                </div>
                                <div className="bg-white p-6 sm:p-8">
                                    <span className="text-2xl sm:text-3xl font-black">[ {face.number} ]</span>
                                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight mt-3 mb-2">{face.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{face.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Desktop/Tablet: 3D Cuboid */
                    <>
                        <div className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                            <div className="perspective-container overflow-hidden" style={{ perspective: '2500px' }}>
                                <div
                                    ref={cuboidRef}
                                    className="cuboid-3d transition-transform duration-1000 ease-out w-[min(90vw,600px)] lg:w-[800px] xl:w-[1200px] h-[250px] lg:h-[300px] xl:h-[450px]"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {cuboidFaces.map((face, index) => (
                                        <div
                                            key={face.id}
                                            className="cuboid-face absolute w-full h-full border-[2px] md:border-[3px] border-black shadow-2xl"
                                            style={{
                                                transform: `rotateY(${index * 90}deg) translateZ(300px)`,
                                                backfaceVisibility: 'hidden',
                                            }}
                                        >
                                            <div className="grid grid-cols-2 h-full">
                                                <div className="flex items-center justify-center" style={{ backgroundColor: face.bgColor }}>
                                                    {face.iconComponent}
                                                </div>
                                                <div className="bg-white p-6 md:p-10 lg:p-16 flex flex-col justify-center">
                                                    <div className="space-y-3 md:space-y-4 lg:space-y-5">
                                                        <span className="text-2xl md:text-3xl lg:text-[36px] font-black">[ {face.number} ]</span>
                                                        <h3 className="text-xl md:text-2xl lg:text-[32px] font-black uppercase leading-tight">{face.title}</h3>
                                                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">{face.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 gap-3 md:gap-4">
                            {[0, 1, 2, 3].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentFace(index);
                                        if (cuboidRef.current) {
                                            cuboidRef.current.style.transform = `rotateY(-${index * 90}deg)`;
                                        }
                                    }}
                                    className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-110"
                                    style={{
                                        backgroundColor: index === currentFace ? '#00FF41' : '#D1D5DB',
                                        transform: index === currentFace ? 'scale(1.5)' : 'scale(1)',
                                    }}
                                    aria-label={`View mission ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
