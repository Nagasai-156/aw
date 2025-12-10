'use client';

import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
): [(node?: Element | null) => void, boolean, IntersectionObserverEntry | undefined] {
    const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;

    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const [isIntersecting, setIsIntersecting] = useState(false);
    const frozen = useRef(false);

    const [node, setNode] = useState<Element | null>(null);

    useEffect(() => {
        if (!node || frozen.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
                setIsIntersecting(entry.isIntersecting);

                if (entry.isIntersecting && freezeOnceVisible) {
                    frozen.current = true;
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [node, threshold, root, rootMargin, freezeOnceVisible]);

    const updateNode = (node?: Element | null) => {
        setNode(node || null);
    };

    return [updateNode, isIntersecting, entry];
}
