export default function Services() {

  return (
    <main className="flex flex-col items-center justify-between mt-5 mb-10 gap-5">
      <div className="w-9/12">
        <header>      
          <h2 className="text-xl font-semibold text-teal-600 sm:text-left">
            Services
          </h2>
        </header>
      </div>

      <div className="w-9/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {[
          { title: "Web Development", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "Mobile Apps", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "Cloud Solutions", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "AI & Machine Learning", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "IoT Development", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "Cybersecurity", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "Data Analytics", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "DevOps", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "UI/UX Design", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
          { title: "Blockchain", color: "text-teal-600", bgColor: "bg-gradient-to-br from-teal-50 to-white" },
        ].sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
          <div key={item.title} className={`flex flex-col items-center font-semibold justify-center p-4 ${item.bgColor} rounded-xl shadow ring-1 ring-gray-300`}>
            <h4 className={`text-base font-base ${item.color} text-center`}>{item.title}</h4>
          </div>
        ))}
      </div>
      
      <div className="w-9/12 bg-white ring-1 ring-gray-300  rounded-xl">
        <div className="p-6">
          <article className="text-justify text-lg text-gray-600">
            <p className="text-gray-700 text-justify mb-6">
              At our company, we specialize in cutting-edge technologies, focusing on innovative solutions for the digital future. Our expertise spans across various domains, including web and mobile development, cloud computing, and artificial intelligence.
            </p>
            <p className="mb-6">
              We are at the forefront of developing state-of-the-art software systems, integrating advanced security features, and optimizing performance through sophisticated algorithms. Our team of experts is dedicated to pushing the boundaries of what's possible in software engineering.
            </p>
            <p>
              Through agile development methodologies and rigorous testing protocols, we ensure that our solutions meet the highest standards of quality and efficiency. We're committed to shaping the future of technology with scalable, intelligent, and user-centric solutions.
            </p>
          </article>
        </div>
      </div>

      <div className="w-9/12 bg-teal-50 rounded-xl ring-1 ring-gray-300">      
        <div className="relative pr-6 pl-6 pt-6 overflow-hidden">
          <h2 className="relative z-10 text-lg font-semibold text-teal-700 drop-shadow-xs drop-shadow-xs text-center sm:text-left">
            Our Advantages
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6">
          {[
            { id: 'innovative', text: "Developing innovative and pioneering technologies" },
            { id: 'solutions', text: "Delivering cutting-edge software solutions" },
            { id: 'rnd', text: "Continuous R&D efforts leading to new and improved products" },
            { id: 'standards', text: "Developing products compliant with industry standards" },
            { id: 'expertise', text: "Expert development team capable of handling complex projects" },
          ].map((item) => (
            <div key={item.id} className="flex items-start text-teal-700 group">
              <span className="text-lg transition-colors duration-300 ease-in-out group-hover:text-teal-600">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-9/12 bg-white ring-1 ring-gray-300  rounded-xl">
        <div className="p-6">
          <article className="text-justify text-base text-gray-600">
            <p className="text-gray-700 text-justify mb-6">
              Quality assurance and rigorous testing are crucial for verifying the performance of our software in real-world scenarios. By developing comprehensive test suites, we maximize the reliability of our products. With both automated and manual testing conducted in various environments, we continuously evaluate and improve our solutions.
            </p>
            <p className="text-gray-700 text-justify mb-6">
              In our development processes, we adhere strictly to industry best practices and standards. Each new product we develop is designed and tested in accordance with globally accepted security and performance benchmarks. This ensures that the solutions we offer to our clients are both secure and scalable.
            </p>
            <p>
              We offer innovative solutions in a wide range of areas, from web applications to AI-powered systems and cloud infrastructure. With our research-driven approach, we quickly respond to evolving needs in the tech industry and continue to develop technologies that shape the digital future.
            </p>
          </article>
        </div>
      </div>

    </main>
  );
}