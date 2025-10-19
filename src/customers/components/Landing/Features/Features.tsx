import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <FeatureCard
          title="⚡ Fast & Efficient"
          description="Get your food delivered hot and on time. No long waits, no stress."
        />
        <FeatureCard
          title="🍽 Wide Selection"
          description="From Numbers to DP, Mamas Palace, National Kitchen, Foodmart and more."
        />
        <FeatureCard
          title="📱 Seamless Experience"
          description="Simple navigation, quick checkout, and mobile-friendly ordering."
        />
        <FeatureCard
          title="🔒 Secure & Reliable"
          description="Register, log in, and pay with confidence. Privacy and convenience in mind."
        />
      </div>
    </section>
  );
};
