export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "" }} 
    >
      <div className="bg-black bg-opacity-40 absolute inset-0" />
      <h1 className="relative text-4xl md:text-6xl font-bold text-white">
        From <span className="text-orange-500">Cafeteria</span> To Crib
      </h1>
    </section>
  );
};
