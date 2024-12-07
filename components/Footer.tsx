'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';

type Theme = 'light' | 'dark'

const Footer = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<footer className="w-full bg-white border-t flex flex-col items-center py-12">
			<div className="w-9/12 gap-4 justify-between items-start hidden md:inline-flex flex-col md:flex-row">
				<div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-4 gap-x-4">
					<div className="hidden flex-col justify-start items-start gap-2 md:inline-flex md:w-full w-5/12">         
						<span className="text-sm font-bold">
							Kebap Tech
						</span>
						<span className="text-sm text-gray-500 mt-1">
							© {new Date().getFullYear()}
						</span>
					</div>

					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-5/12">
						<Link href="/about" className="sm:text-base md:text-sm font-semibold md:hover:text-teal-600 transition-colors duration-200">About</Link>
						<span className="text-neutral-500 sm:text-base md:text-sm">
							Our Team
						</span>
					</div>
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-5/12">
						<Link href="/services" className="text-base md:text-sm font-semibold md:hover:text-teal-600 transition-colors duration-200">Services</Link>
						<span className="text-neutral-500 sm:text-base md:text-sm">
							Our Offerings
						</span>
						<span className="text-neutral-500 sm:text-base md:text-sm">
							Clients
						</span>
					</div>
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-5/12">
						<Link href="/products" className="sm:text-base md:text-sm font-semibold md:hover:text-teal-600 transition-colors duration-200">Products</Link>
						<span className="text-neutral-500 sm:text-base md:text-sm">
							Projects
						</span>
						<span className="text-neutral-500 sm:text-base md:text-sm">
							Testimonials
						</span>
					</div>
					<div className="flex-col justify-start bg items-start gap-2 inline-flex md:w-auto w-5/12">
						<Link href="/contact" className="sm:text-base md:text-sm font-semibold md:hover:text-teal-600 transition-colors duration-200">Contact</Link>
						<div className="text-neutral-500 sm:text-base md:text-sm flex items-center w-max">
							<span>Open Positions</span>
						</div>
						<span className="text-neutral-500 sm:text-base md:text-sm flex items-center w-max">
							Apply Now
						</span>
					</div>
				</div>
			</div>

			<div className="md:hidden justify-between items-start inline-flex flex-col w-10/12">
				<div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-4">
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-5/12">
						<Link href="/about" className="sm:text-base md:text-sm font-semibold">About</Link>
						<Link href="/about#team" className="text-neutral-500 sm:text-base md:text-sm cursor-pointer">
							Our Team
						</Link>
					</div>
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-4/12">
						<Link href="/services" className="text-base md:text-sm font-semibold">Services</Link>
						<Link href="/services#offerings" className="text-neutral-500 sm:text-base md:text-sm cursor-pointer">
							Our Offerings
						</Link>
						<Link href="/services#clients" className="text-neutral-500 sm:text-base md:text-sm cursor-pointer">
							Clients
						</Link>
					</div>
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-5/12">
						<Link href="/products" className="sm:text-base md:text-sm font-semibold">Products</Link>
						<Link href="/products#projects" className="text-neutral-500 sm:text-base md:text-sm cursor-pointer">
							Projects
						</Link>
						<Link href="/products#testimonials" className="text-neutral-500 sm:text-base md:text-sm cursor-pointer">
							Testimonials
						</Link>
					</div>
					<div className="flex-col justify-start items-start gap-2 inline-flex md:w-full w-4/12">
						<Link href="/contact" className="sm:text-base md:text-sm font-semibold">Contact</Link>
						<div className="text-neutral-500 sm:text-base md:text-sm flex items-center w-max">
							<span>Open Positions</span>
						</div>
						<span className="text-neutral-500 sm:text-base md:text-sm flex items-center w-max">
							Apply Now
						</span>
					</div>
				</div>

				<div className="w-full md:hidden flex flex-col items-start pt-6 mt-2">
					<span className="text-base font-bold">
						Kebap Tech
					</span>
					<span className="text-base text-gray-500 mt-1">
						© {new Date().getFullYear()}
					</span>
				</div>
			</div>
			
			{showScrollButton && (
				<button 
					onClick={scrollToTop}
					className="fixed bottom-6 right-16 w-14 h-14 md:w-10 md:h-10 bg-black text-white rounded-full shadow-lg md:hover:bg-teal-600 transition text-2xl md:text-xl font-semibold transition active:scale-95"
					aria-label="Scroll to top"
					type="button"
				>
					↑
				</button>
			)}
		</footer>
	);
};

export default Footer;
