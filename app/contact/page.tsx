"use client"

type ContactInfo = {
  id: number;
  title: string;
  content: string;
  icon: string;
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    content: "contact@example.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: 2,
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    id: 3,
    title: "Address",
    content: "123 Main St, Anytown, USA 12345",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  }
]

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between mt-5 mb-10 gap-5">
      <div className="w-9/12">
        <header>      
          <h2 className="text-xl font-semibold text-teal-600 sm:text-left">
            Contact Us
          </h2>
        </header>
      </div>

      <div className="w-9/12 bg-white ring-1 ring-gray-300 rounded-xl">
        <div className="p-6">
          <article className="text-justify text-lg text-gray-600">
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you have a question about our services, need support, or just want to say hello, don't hesitate to reach out.
            </p>  
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                How Can We Help?
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>General inquiries</li>
                <li>Customer support</li>
                <li>Partnership opportunities</li>
                <li>Career information</li>
                <li>Feedback and suggestions</li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <div className="w-9/12" id="contact-info">
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <div key={info.id} className="bg-white ring-1 ring-gray-300 shadow rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-teal-700">{info.title}</h3>
              <div className="flex items-center mt-2 text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>{info.title}</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                </svg>
                {info.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-9/12 p-6 bg-teal-50 ring-1 ring-gray-300 rounded-xl">
        <header>      
          <h2 className="text-xl font-semibold text-teal-700 text-center md:text-left">
            Send Us a Message
          </h2>
        </header>
      </div>
      
    </main>
  );
}
