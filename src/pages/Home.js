const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-slate-500 to-slate-600 text-white text-center p-48">
      <h1 className="text-5xl font-extrabold mb-4 shadow-lg">Welcome to Your Store!</h1>
      <p className="text-lg md:text-xl mb-5 max-w-2xl">
        <span className="font-semibold text-yellow-400">Discover</span> an exceptional range of products curated just for you. 
        <span className="font-semibold text-yellow-400"> Shop with ease</span> and enjoy exclusive deals tailored to your needs.
      </p>
      <p className="text-md md:text-lg italic mb-3 underline decoration-yellow-400">
        Your satisfaction is our priority.
      </p>
      <p className="text-sm md:text-md">
        <span className="text-yellow-400 font-semibold">Join</span> thousands of happy customers who love shopping with us!
      </p>
    </div>
  );
};

export default Home;
