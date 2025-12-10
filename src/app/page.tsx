import Hero from '@/components/sections/Hero';
import ScrollingMarquee from '@/components/sections/ScrollingMarquee';
import MissionSection from '@/components/sections/MissionSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PerformanceSection from '@/components/sections/PerformanceSection';
import CTASection from '@/components/sections/CTASection';
import SparklesSection from '@/components/sections/SparklesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ScrollingMarquee />
      <MissionSection />
      <StatsSection />
      <FeaturesSection />
      <PerformanceSection />
      <CTASection />
      <SparklesSection />
    </main>
  );
}
