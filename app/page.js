import JobRules from "./Sections/TrendingJobRules";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto">
        <JobRules />
      </div>
    </div>
  );
}
