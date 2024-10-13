'use client'

import { useState } from 'react';

import { usePathname } from 'next/navigation';

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileHeaderProps) => {
    const pathname = usePathname();

    const getItemLabel = (item: string): string => {
        switch (item) {
            case 'about':
                return 'About';
            case 'services':
                return 'Services';
            case 'products':
                return 'Products';
            case 'contact':
                return 'Contact';
            default:
                return item;
        }
    };

    return (
        <nav className={`md:hidden w-full bg-white ring-1 ring-gray-300 pr-6 pl-6 pt-3 pb-3 shadow-3xl ${
            isMobileMenuOpen ? 'fixed inset-0 h-[100dvh] flex flex-col overflow-y-auto' : ''
        }`}>
            <div className="flex justify-between items-center">
                <a href="/" title="Home" className="text-2xl font-semibold text-teal-600">
                    Kebap Tech
                </a>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    className="p-2 text-gray-500"
                >
                    <span className="sr-only">
                        {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                    </span>
                    {isMobileMenuOpen ? (
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <title>Close Icon</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <title>Menu Icon</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col justify-between h-full mt-6">
                    <ul className="flex flex-col space-y-6 text-2xl">
                        {['about', 'services', 'products', 'contact'].map((item) => (
                            <li key={item} className="py-2">
                                <div className="flex flex-row items-center gap-2 group">
                                    <a
                                        href={`/${item}`}
                                        className={`block rounded-xl ${
                                            pathname === `/${item}` ? 'text-teal-600' : 'text-gray-600'
                                        }`}
                                    >
                                        {getItemLabel(item)}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-auto">
                        <button type="button" className="md:hidden inline-flex text-lg w-full mt-2 py-3 items-center justify-center rounded-xl bg-neutral-800 text-neutral-50 shadow-neutral-500/20 transition hover:bg-teal-500 active:scale-95">
                            <span>
                                english
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

const DesktopHeader = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="hidden md:flex w-full justify-center bg-white ring-1 ring-gray-300 py-3 xitems-center shadow-3xl">
            <div className="w-9/12 justify-between flex items-center">
                <div>
                    <a href="/" title="Home" className="text-xl font-semibold text-teal-600">
                        Kebap Tech
                    </a>
                </div>
                <div>
                    <ul className="flex justify-center space-x-3 lg:space-x-4 text-base font-semibold lg:text-lg lg:font-medium">
                        {navItems.map((item) => (
                            <li key={item.href} className="flex flex-row items-center gap-0 md:gap-1">
                                <div className="flex flex-row items-center gap-0 md:gap-1 group">
                                    <a
                                        href={item.href}
                                        className={`py-1 pr-2 pl-2 rounded-xl md:p-0 ${
                                            pathname === item.href ? 'text-teal-600' : 'text-gray-600 md:hover:text-teal-500'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                    <button type="button" className="inline-flex h-7 text-base items-center justify-center rounded-xl bg-neutral-800 font-medium text-neutral-50 shadow-neutral-500/20 transition hover:bg-teal-500 active:scale-95 px-3">
                        <span>
                            en
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <MobileHeader 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <DesktopHeader />
        </>
    );
}

export default Header;
