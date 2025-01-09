export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-xl font-bold text-blue-400">Kalkulator-Sipil-X</span>
                <div className="space-x-4">
                    <a href="/" className="text-white hover:text-blue-400">Home</a>
                    <a href="#" className="text-white hover:text-blue-400">About</a>
                    <a href="#" className="text-white hover:text-blue-400">Contact</a>
                </div>
            </div>
        </nav>
    );
}