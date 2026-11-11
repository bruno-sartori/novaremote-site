import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import Download from '@/components/Download';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <Security />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
