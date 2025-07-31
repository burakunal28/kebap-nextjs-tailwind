import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kebap Tech",
	description: "Kebap Tech",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<div className="layout-container">
					<div className="header-wrapper">
						<Header />
					</div>
					<div className="content-wrapper">
						<div>{children}</div>
					</div>
				</div>
				<Footer />
			</body>
		</html>
	);
}
