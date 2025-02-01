"use client";

import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo dengan Link ke Home */}
                <a href="/" className="text-xl font-bold text-blue-400 hover:opacity-80 transition">
                    Kalkulator Sipil X
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-blue-400 transition">Home</a>
                    <a href="/about" className="text-white hover:text-blue-400 transition">About</a>

                    {/* Popover Kontak */}
                    <div className="relative">
                        <button
                            className="text-white hover:text-blue-400 transition"
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                            Contact
                        </button>
                        {isPopoverOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-gray-900 text-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center space-x-2">
                                    <Mail size={18} className="text-blue-400" />
                                    <span>admin@kalkulatorsipilx.com</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Phone size={18} className="text-green-400" />
                                    <span>+62 812-3456-7890</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden mt-2 bg-gray-700 p-4 rounded-lg transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <a href="/" className="block text-white hover:text-blue-400 py-2">Home</a>
                <a href="#about" className="block text-white hover:text-blue-400 py-2">About</a>

                {/* Popover di Mobile */}
                <div className="relative">
                    <button
                        className="block text-white hover:text-blue-400 py-2"
                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                    >
                        Contact
                    </button>
                    {isPopoverOpen && (
                        <div className="mt-2 w-full bg-gray-900 text-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2">
                                <Mail size={18} className="text-blue-400" />
                                <span>admin@kalkulatorsipilx.com</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <Phone size={18} className="text-green-400" />
                                <span>+62 812-3456-7890</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
