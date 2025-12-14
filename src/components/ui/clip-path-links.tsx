import React from "react";
import {
    Github,
    Twitter,
    MessageCircle,
    Send,
    FileText,
    BookOpen,
    Newspaper,
    ExternalLink,
    Code2,
} from "lucide-react";
import { useAnimate } from "framer-motion";

export const ClipPathLinks = () => {
    return (
        <div className="divide-y border divide-[#8c52ff]/20 border-[#8c52ff]/20">
            <div className="grid grid-cols-2 divide-x divide-[#8c52ff]/20">
                <LinkBox Icon={Github} href="https://github.com/arthachain" />
                <LinkBox Icon={FileText} href="/dev/docs" />
            </div>
            <div className="grid grid-cols-4 divide-x divide-[#8c52ff]/20">
                <LinkBox Icon={Twitter} href="https://twitter.com/arthachain" />
                <LinkBox Icon={MessageCircle} href="https://discord.gg/arthachain" />
                <LinkBox Icon={Send} href="https://t.me/arthachain" />
                <LinkBox Icon={Code2} href="https://medium.com/@arthachain" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-[#8c52ff]/20">
                <LinkBox Icon={BookOpen} href="/dev" />
                <LinkBox Icon={Newspaper} href="/blog" />
                <LinkBox Icon={ExternalLink} href="/community" />
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type LinkBoxProps = {
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
    imgSrc?: string;
    className?: string;
};

const LinkBox = ({ Icon, href, imgSrc, className }: LinkBoxProps) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e: React.MouseEvent) => {
        const box = (e.target as HTMLElement).getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: "left" as const,
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: "right" as const,
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: "top" as const,
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: "bottom" as const,
        };

        const sortedProximity = [
            proximityToLeft,
            proximityToRight,
            proximityToTop,
            proximityToBottom,
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    return (
        <a
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-white bg-black hover:bg-black transition-colors"
        >
            {imgSrc ? (
                <img
                    src={imgSrc}
                    alt="custom icon"
                    className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
                />
            ) : (
                <Icon className="text-xl sm:text-3xl md:text-4xl" />
            )}

            <div
                ref={scope}
                style={{ clipPath: BOTTOM_RIGHT_CLIP }}
                className="absolute inset-0 grid place-content-center bg-[#8c52ff] text-white transition-colors duration-300"
            >
                {imgSrc ? (
                    <img
                        src={imgSrc}
                        alt="custom icon hover"
                        className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
                    />
                ) : (
                    <Icon className="text-xl sm:text-3xl md:text-4xl" />
                )}
            </div>
        </a>
    );
};
