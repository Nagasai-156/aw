import { FeaturesGrid } from '@/components/ui/features-grid';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ArthaChainBentoCards from '@/components/ui/arthachain-bento-cards';

export default function FeaturesPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Orbital Timeline Features */}
            <FeaturesSection />

            {/* Features Grid */}
            <FeaturesGrid />

            {/* Bento Cards */}
            <ArthaChainBentoCards />
        </main>
    );
}
