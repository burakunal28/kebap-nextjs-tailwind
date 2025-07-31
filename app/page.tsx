"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-12">
			{/* Hero Section */}
			<section className="w-9/12 mx-auto">
				<div className="relative isolate">
					<div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
						<div className="text-center flex flex-col gap-6">
							<h1 className="text-3xl sm:text-4xl font-bold text-shadow">
								<span className="text-neutral-800">
									Innovative Solutions for
								</span>
								<br />
								<span className="text-teal-600">Tomorrow's Challenges</span>
							</h1>

							<p className="text-lg sm:text-xl leading-8 text-gray-600 text-shadow-sm">
								We're shaping the future of technology with cutting-edge
								solutions and innovative products.
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link href="/services" as="/services">
									<button
										type="button"
										className="w-full sm:w-auto px-6 py-3 text-lg font-medium rounded-xl bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition active:scale-95 cursor-pointer"
									>
										Learn More
									</button>
								</Link>
								<Link href="/contact" as="/contact">
									<button
										type="button"
										className="w-full sm:w-auto px-6 py-3 text-lg font-medium rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-300 shadow-lg hover:bg-gray-50 transition active:scale-95 cursor-pointer"
									>
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Products Section */}
			<section className="w-9/12 flex flex-col gap-6 mx-auto">
				<h2 className="text-2xl font-semibold text-center text-gray-800">
					Our Innovative Products
				</h2>
				<div className="grid sm:grid-cols-2 gap-12">
					{/* Product 1 */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
						<div className="p-6 flex flex-col gap-6">
							<div className="flex justify-between items-center">
								<h3 className="text-lg sm:text-xl font-semibold text-gray-800">
									NexusFlow
								</h3>
								<span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-0.5 text-sm font-medium text-teal-800">
									New
								</span>
							</div>
							<p className="text-gray-600">
								NexusFlow revolutionizes data management with its
								quantum-powered neural network and holographic user interface.
							</p>
							<ul className="text-sm text-gray-600 flex flex-col gap-2">
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Quantum-enhanced processing
								</li>
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Holographic interface
								</li>
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Telepathic data transfer
								</li>
							</ul>
							<Link href="/products" as="/products">
								<button
									type="button"
									className="w-full inline-flex items-center justify-center px-4 py-2 gap-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition active:scale-95 cursor-pointer"
								>
									Learn More
									<ArrowRightIcon className="size-4" aria-hidden="true" />
								</button>
							</Link>
						</div>
					</div>
					{/* Product 2 */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
						<div className="p-6 flex flex-col gap-6">
							<div className="flex justify-between items-center">
								<h3 className="text-lg sm:text-xl font-semibold text-gray-800">
									CyberSphere
								</h3>
								<span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-0.5 text-sm font-medium text-teal-800">
									Popular
								</span>
							</div>
							<p className="text-gray-600">
								CyberSphere creates an immersive digital ecosystem powered by AI
								and augmented reality for next-gen collaboration.
							</p>
							<ul className="text-sm text-gray-600 flex flex-col gap-2">
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Neural-link compatibility
								</li>
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Quantum encryption
								</li>
								<li className="flex gap-1 items-center">
									<svg
										className="size-4 text-teal-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Check Icon</title>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Time-bending support
								</li>
							</ul>
							<Link href="/products" as="/products">
								<button
									type="button"
									className="w-full inline-flex items-center justify-center px-4 py-2 gap-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition active:scale-95 cursor-pointer"
								>
									Learn More
									<ArrowRightIcon className="size-4" aria-hidden="true" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Technologies Section */}
			<section className="w-9/12 mx-auto flex flex-col gap-6">
				<h2 className="text-2xl font-semibold text-center text-gray-800">
					Technologies We Use
				</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{[
						"React",
						"Node.js",
						"Python",
						"AWS",
						"Docker",
						"Kubernetes",
						"TensorFlow",
						"GraphQL",
					].map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800"
						>
							{tech}
						</span>
					))}
				</div>
				<div className="space-y-6 text-gray-600">
					<p className="text-center leading-relaxed">
						These cutting-edge technologies empower us to craft scalable,
						efficient, and innovative solutions tailored to our clients' diverse
						needs. By harnessing the latest advancements in software
						development, we deliver robust and adaptable products that thrive in
						the ever-evolving tech landscape.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white p-6 rounded-xl shadow-md">
							<h3 className="text-lg font-semibold text-teal-600">
								Frontend Excellence
							</h3>
							<p>
								Our mastery of React allows us to create dynamic, responsive
								user interfaces that provide seamless user experiences across
								devices.
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<h3 className="text-lg font-semibold text-teal-600">
								Backend Power
							</h3>
							<p>
								With Node.js, we ensure robust server-side operations, enabling
								fast, scalable, and efficient backend solutions for our
								applications.
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<h3 className="text-lg font-semibold text-teal-600">
								Cloud & DevOps
							</h3>
							<p>
								Leveraging AWS, Docker, and Kubernetes, we guarantee secure,
								scalable applications with smooth deployment and efficient
								orchestration.
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<h3 className="text-lg font-semibold text-teal-600">
								AI Integration
							</h3>
							<p>
								By incorporating TensorFlow, we infuse our solutions with
								intelligent features, pushing the boundaries of what's possible
								in software development.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 mex-auto text-center flex flex-col gap-6 bg-teal-600">
				<h2 className="text-2xl font-bold text-white">
					Ready to Transform Your Business?
				</h2>
				<p className="text-lg sm:text-xl text-white">
					Let's discuss how can we help you
				</p>
				<Link href="/contact" as="/contact">
					<button
						type="button"
						className="inline-flex items-center px-6 py-3 gap-3 border border-transparent text-base font-medium rounded-xl text-teal-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white transition active:scale-95 cursor-pointer"
					>
						Get in Touch
						<ArrowRightIcon className="size-5" aria-hidden="true" />
					</button>
				</Link>
			</section>
		</main>
	);
}
