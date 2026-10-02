import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Features from '@/components/Features';
import Band from '@/components/Band';
import HowItWorks from '@/components/HowItWorks';
import Teams from '@/components/Teams';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export default function Home() {
  return (
    <>
      <div id="bar"></div>
      <Navbar />
      <Hero />
      <Manifesto />
      <Features />
      <Band />
      <HowItWorks />
      <Teams />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollEffects />
    </>
  );
}
