import Hero from '@/components/sections/Hero';
import ScrollingMarquee from '@/components/sections/ScrollingMarquee';
import AdvancedGridFeaturesSection from '@/components/sections/AdvancedGridFeaturesSection';
import ValidatorSection from '@/components/sections/ValidatorSection';
import CommunityLinksSection from '@/components/sections/CommunityLinksSection';
import MissionSection from '@/components/sections/MissionSection';
import TimelineSection from '@/components/sections/TimelineSection';
import BentoSection from '@/components/sections/BentoSection';
import GlobeSection from '@/components/sections/GlobeSection';
import CTASection from '@/components/sections/CTASection';
import SparklesSection from '@/components/sections/SparklesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ScrollingMarquee />
      <MissionSection />
      <TimelineSection />
      <BentoSection />
      <GlobeSection />
      <AdvancedGridFeaturesSection />
      <ValidatorSection />
      <CommunityLinksSection />
      <CTASection />
      <SparklesSection />
    </main>
  );
}
