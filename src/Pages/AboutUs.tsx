import Header from "../Components/Header";

function AboutUs() {
  return (
    <>
      <section
        className="use px-5 bg-center "
        style={{
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/04/37/54/90/360_F_437549071_7uQvtqTIgd50l2r0OZ1g0zJnLwnzJmIG.jpg")',
        }}
      >
        <div className="bg-white bg-opacity-20 sticky">
          <Header />
        </div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          {/* First section content */}
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-center">
              We offer customers a wide range of{" "}
              <span className="text-green-600">commercial cars</span> and{" "}
              <span className="text-green-600">luxury cars </span>
              for any occasion.
            </h1>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png" />
          </div>
        </div>
      </section>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-16 mx-auto  ">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/087/516/small_2x/diagonal-golden-line-glass-cube-on-black-background-illustration-of-website-banner-poster-sign-corporate-business-social-media-post-billboard-agency-advertising-media-motion-video-animation-wave-vector.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-90"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-300 ">
              At XPressPro, we provide exceptional car rental services focused
              on quality and customer satisfaction. Our diverse fleet includes
              well-maintained vehicles, from compact cars for solo travelers to
              spacious SUVs for families, ensuring we meet every customer's
              unique needs.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Open roles <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                our mission <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Our values <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Meet our leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Offices in Etiopia
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  12
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Full-time employees
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  300+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  happy customers
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  20000+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Years Experience
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  7+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
