'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CardContent = {
    title: string;
    description: string;
    href?: string;
};

const PlusCard: React.FC<{
    className?: string;
    title: string;
    description: string;
    href?: string;
}> = ({
    className = '',
    title,
    description,
    href = '/technology',
}) => {
        return (
            <Link href={href}>
                <div
                    className={cn(
                        'relative border border-dashed border-zinc-700 p-6 bg-zinc-950 min-h-[180px]',
                        'flex flex-col justify-start cursor-pointer group',
                        className
                    )}
                >
                    <CornerPlusIcons />
                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                        <h3 className="text-lg font-bold text-white">
                            {title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
                    </div>
                </div>
            </Link>
        );
    };

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-3 -left-3" />
        <PlusIcon className="absolute -top-3 -right-3" />
        <PlusIcon className="absolute -bottom-3 -left-3" />
        <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
);

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={cn('text-zinc-600 size-6', className)}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);

export { PlusCard, CornerPlusIcons, PlusIcon };
export type { CardContent };
