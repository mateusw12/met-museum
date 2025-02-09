export default function Home() {
  return (
    <div className="h-[calc(100vh-130px)] flex flex-col items-center ">
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-serif font-bold lg:text-8xl">
          Welcome to the
          <br />
          <span className="text-primary">MET</span> Museum
        </h1>
        <p className="font-sans text-xs lg:text-sm text-center max-w-lg">
          The Metropolitan Museum of Art presents over 5,000 years of art from
          around the world for everyone to experience and enjoy. The Museum
          lives in two iconic sites in New York City—The Met Fifth Avenue and
          The Met Cloisters. Millions of people also take part in The Met
          experience online.
        </p>
      </div>
      <footer className="text-gray-500 font-sans text-xs lg:text-base">
        developed by{' '}
        <a
          href="https://giovanaraphaelli.tech/"
          className="hover:text-primary transition-colors duration-300 font-semibold"
        >
          @giovanaraphaelli
        </a>
      </footer>
    </div>
  );
}
