import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<div className="absolute left-1/2 -translate-x-1/2 -z-10 h-3/4 w-3/4"></div>
			<h1 className="text-2xl font-semibold mb-4 text-teal-800">
				Page Not Found
			</h1>
			<h2 className="text-xl mb-6 text-teal-700">
				The page you are looking for could not be found
			</h2>
			<Link
				href="/"
				className="px-6 py-3 bg-white text-teal-600 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
			>
				Return to Home
			</Link>
		</main>
	);
}
