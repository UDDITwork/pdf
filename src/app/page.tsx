'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CardSection from '@/components/CardSection';
import LayeredBoxes from '@/components/LayeredBoxes';
import DynamicGrid from '@/components/DynamicGrid';
import AccordionSection from '@/components/AccordionSection';
import AIManagementSection from '@/components/AIManagementSection';
import EnterpriseSection from '@/components/EnterpriseSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import { caseStudies, gridSquares } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <CardSection />
      <LayeredBoxes caseStudies={caseStudies} />
      <DynamicGrid squares={gridSquares} />
      <AccordionSection />
      <AIManagementSection />
      <EnterpriseSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
