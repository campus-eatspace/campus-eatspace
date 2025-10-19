import { StepCard } from "./StepCard";

export const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">
        How <span className="text-green-600">it</span> Works
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <StepCard
          title="Browse"
          description="Explore menus from your favorite campus restaurants."
          color="bg-black"
        />
        <StepCard
          title="Order"
          description="Choose your meal, customize and checkout in seconds."
          color="bg-gray-700"
        />
        <StepCard
          title="Enjoy"
          description="Get it delivered straight to your hostel, class or hangout spot."
          color="bg-red-700"
        />
      </div>
    </section>
  );
};
