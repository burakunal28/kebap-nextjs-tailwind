"use client";

export default function Products() {
	return (
		<main className="flex flex-col items-center justify-between mt-5 mb-10 gap-5">
			<div className="w-9/12">
				<header>
					<h2 className="text-xl font-semibold text-teal-600 sm:text-left">
						Products
					</h2>
				</header>
			</div>

			<div className="w-9/12 bg-white ring-1 ring-gray-300 rounded-xl">
				<div className="p-6">
					<article className="text-justify text-lg text-gray-600">
						<p className="text-gray-600 mb-4">
							<span>
								We offer cutting-edge technology solutions for various
								industries. Our products are designed with a focus on innovation
								and efficiency, making a difference in the tech sector with
								advanced software and hardware integration. Our smart devices
								provide top-level performance in data processing and
								connectivity.
							</span>
						</p>
						<div className="mt-4">
							<h3 className="font-semibold text-lg mb-2">
								<span>Product Advantages</span>
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									<span>State-of-the-art technology</span>
								</li>
								<li>
									<span>Seamless integration with existing systems</span>
								</li>
								<li>
									<span>High performance and energy efficiency</span>
								</li>
								<li>
									<span>Scalable solutions for businesses of all sizes</span>
								</li>
								<li>
									<span>
										User-friendly interfaces and robust security features
									</span>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>

			<div
				className="w-9/12 ring-1 ring-gray-900/10 rounded-2xl space-y-6 bg-white transition-all duration-300 ease-in-out md:hover:bg-teal-100 md:hover:shadow-lg md:hover:ring-teal-300 group"
				id="product1"
			>
				<div className="relative pr-6 pl-6 pt-6 overflow-hidden">
					<h2 className="relative z-10 text-lg font-semibold text-center md:text-left text-teal-700 md:group-hover:text-teal-900">
						Product 1: SmartConnect IoT Hub
					</h2>
				</div>
				<div className="flex flex-col pl-6 pb-6 pr-6 gap-6">
					<div className="flex flex-wrap gap-2 justify-center md:justify-start">
						<span className="inline-flex items-center rounded-2xl bg-teal-50 px-2 py-1 text-sm md:text-base text-teal-700 ring-1 ring-inset ring-teal-600/10">
							IoT
						</span>
						<span className="inline-flex items-center rounded-2xl bg-teal-50 px-2 py-1 text-sm md:text-base text-teal-700 ring-1 ring-inset ring-teal-600/10">
							Smart Home
						</span>
					</div>
					<div>
						<p className="text-base text-teal-600 md:group-hover:text-teal-800 text-justify">
							Our SmartConnect IoT Hub is designed for seamless integration of
							smart devices in homes and offices. It includes a central control
							unit, proprietary software, and multiple connectivity options. The
							system is entirely developed and produced in-house, ensuring the
							highest quality and performance standards.
						</p>
					</div>
					<div className="text-base text-teal-600 md:group-hover:text-teal-800">
						<ul className="list-disc list-inside space-y-1">
							<li>Compatible with over 100 smart home devices</li>
							<li>Advanced AI for predictive automation</li>
							<li>Real-time energy consumption monitoring</li>
							<li>Military-grade encryption for data security</li>
							<li>Voice control integration with major assistants</li>
						</ul>
					</div>
				</div>
			</div>

			<div
				className="w-9/12 ring-1 ring-gray-900/10 rounded-2xl space-y-6 bg-white transition-all duration-300 ease-in-out md:hover:bg-teal-100 md:hover:shadow-lg md:hover:ring-teal-300 group"
				id="product2"
			>
				<div className="relative pr-6 pl-6 pt-6 overflow-hidden">
					<h2 className="relative z-10 text-lg font-semibold text-center md:text-left text-teal-700 md:group-hover:text-teal-900">
						Product 2: AI-Powered Analytics Platform
					</h2>
				</div>
				<div className="flex flex-col pl-6 pb-6 pr-6 gap-6">
					<div className="flex flex-wrap gap-2 justify-center md:justify-start">
						<span className="inline-flex items-center rounded-2xl bg-teal-50 px-2 py-1 text-sm md:text-base text-teal-700 ring-1 ring-inset ring-teal-600/10">
							AI
						</span>
						<span className="inline-flex items-center rounded-2xl bg-teal-50 px-2 py-1 text-sm md:text-base text-teal-700 ring-1 ring-inset ring-teal-600/10">
							Big Data
						</span>
					</div>
					<div>
						<p className="text-base text-teal-600 md:group-hover:text-teal-800 text-justify">
							Our AI-Powered Analytics Platform is designed for businesses
							looking to harness the power of their data. It includes advanced
							machine learning algorithms, real-time data processing, and
							intuitive visualization tools. The platform is scalable and can be
							customized to meet specific industry needs.
						</p>
					</div>
					<div className="text-base text-teal-600 md:group-hover:text-teal-800">
						<ul className="list-disc list-inside space-y-1">
							<li>
								Advanced machine learning algorithms for predictive analytics
							</li>
							<li>Real-time data processing and visualization</li>
							<li>Customizable dashboards and reporting tools</li>
							<li>Integration with multiple data sources</li>
							<li>Scalable architecture for businesses of all sizes</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
