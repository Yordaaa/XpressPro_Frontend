function Home() {
  return (
    <section
      className="use h-[100vh] px-5 "
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/186872128/photo/a-bright-green-hatchback-family-car.jpg?s=612x612&w=0&k=20&c=r0tq2fuV9C29_uzCRcOJnCGfkxSwLmfnXqM252xc4uE=")',
        backgroundSize: "cover",
      }}
    >
      <div className=" px-6 pt-14 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Looking for a <span className="text-green-600">vehicle? </span>
            You're
            <div>in the right place.</div>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
