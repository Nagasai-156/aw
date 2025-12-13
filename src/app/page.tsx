import Hero from '@/components/sections/Hero';
import ScrollingMarquee from '@/components/sections/ScrollingMarquee';
import MissionSection from '@/components/sections/MissionSection';
import TimelineSection from '@/components/sections/TimelineSection';
import BentoSection from '@/components/sections/BentoSection';
import GlobeSection from '@/components/sections/GlobeSection';
import StatsSection from '@/components/sections/StatsSection';
import PerformanceSection from '@/components/sections/PerformanceSection';
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
      <StatsSection />
      <PerformanceSection />
      <CTASection />
      <SparklesSection />
    </main>
  );
}
