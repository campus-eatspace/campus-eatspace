import {
  Navbar,
  Hero,
  WhyWeExist,
  Features,
  HowItWorks,
  FooterLanding,
} from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyWeExist />
      <Features />
      <HowItWorks />
      <FooterLanding />
    </div>
  );
}
