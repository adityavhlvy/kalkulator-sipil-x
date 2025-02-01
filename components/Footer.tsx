"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 mt-10">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} Kalkulator-Sipil-X. All rights reserved.</p>
            </div>
        </footer>
    );
}
