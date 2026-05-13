import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import ToolHubSection from "@/components/ToolHubSection";
import SkillsPollSection from "@/components/SkillsPollSection";
import FooterSection from "@/components/FooterSection";
import FloatingBookCall from "@/components/FloatingBookCall";
import ContactFormSection from "@/components/ContactFormSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrustBadgesSection />
      <WhyChooseUsSection />
      <ToolHubSection />
      <SkillsPollSection />
      <FAQSection />
      <ContactFormSection />
      <FooterSection />
      <FloatingBookCall />
    </div>
  );
};

export default Index;
