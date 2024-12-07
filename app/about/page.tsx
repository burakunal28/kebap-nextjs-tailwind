export default function About() {
  return (
    <main className="flex flex-col items-center justify-between mt-5 mb-10 gap-5">
      <div className="w-9/12">
        <header>      
          <h2 className="text-xl font-semibold text-teal-600 sm:text-left">
            About Us
          </h2>
        </header>
      </div>

      <div className="w-9/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Happy Clients", value: "1000+" },
            { label: "Solutions Delivered", value: "2000+" },
            { label: "Years of Innovation", value: "15+" },
            { label: "Team Members", value: "100+" },
          ].map((item) => (
            <div key={item.label} className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl font-semibold text-teal-600 mb-2">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-9/12 bg-white ring-1 ring-gray-300 rounded-xl">
        <div className="p-6">
          <article className="text-justify text-lg text-gray-600">
            <p className="mb-6">
              <b>Kebap Tech</b> is a trailblazer in the tech industry, specializing in innovative solutions that revolutionize businesses and enhance user experiences. Since our inception in 2008, we've consistently set new standards in the digital landscape.
            </p>
            <p className="mb-6">
              Our diverse team of visionary engineers, creative designers, and strategic thinkers collaborates to craft products that not only meet but anticipate the evolving needs of our clients. We take pride in our unwavering commitment to excellence, groundbreaking innovation, and unparalleled customer satisfaction.
            </p>
            <p>
              At Kebap Tech, we're driven by the belief that technology has the power to reshape industries and improve lives. Our mission is to remain at the forefront of technological advancements, developing solutions that make a lasting impact and drive positive change across the globe.
            </p>
          </article>
        </div>
      </div>

      <div className="w-9/12 flex flex-col gap-5">
        <div className="w-full bg-teal-50 ring-1 ring-gray-300 rounded-xl">
          <header>      
            <div className="relative p-6 overflow-hidden">
              <h2 className="relative z-10 text-xl mb-6 font-semibold text-teal-700 drop-shadow-xs drop-shadow-xs text-center sm:text-left">
                Our Goals
              </h2>
              <h3 className="text-lg text-teal-700 mb-2 text-center md:text-justify">
                Kebap Tech envisions a world where cutting-edge technology seamlessly integrates with everyday life, empowering individuals and organizations to achieve unprecedented levels of efficiency, creativity, and success. We're committed to being the catalyst for this technological revolution, driving innovation that shapes a brighter, more connected future for all.
              </h3>
            </div>
          </header>
        </div>

        <div className="w-full bg-white ring-1 ring-gray-300 rounded-xl">
          <div className="p-6">
            <h2 className="text-xl mb-6 font-semibold text-teal-700 text-center sm:text-left">
              Our Guiding Principles
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-3"><strong>Innovation at the Core:</strong> We relentlessly pursue groundbreaking ideas and technologies.</li>
              <li className="mb-3"><strong>Unwavering Integrity:</strong> We uphold the highest standards of ethics and transparency in all our endeavors.</li>
              <li className="mb-3"><strong>Collaborative Excellence:</strong> We foster a culture of teamwork and strategic partnerships to achieve extraordinary results.</li>
              <li className="mb-3"><strong>Client-Centric Approach:</strong> We place our clients' success at the heart of everything we do, tailoring solutions to their unique needs.</li>
              <li><strong>Sustainable Innovation:</strong> We're dedicated to developing eco-friendly technologies and minimizing our environmental footprint.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
