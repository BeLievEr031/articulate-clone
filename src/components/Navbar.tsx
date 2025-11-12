import { Link } from "react-router-dom"
import LogoImg from "../assets/logo.webp"
function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-3">
            <div className="max-w-7xl mx-auto">
                <div
                    className="glass-card rounded-2xl px-6 py-3"
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.15) 0px 0px 40px, rgba(0, 0, 0, 0.12) 0px 8px 32px"
                    }}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: "white" }}
                                >
                                    <img
                                        alt="Articulate Logo"
                                        loading="lazy"
                                        width={48}
                                        height={48}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-10 h-10 object-contain"
                                        srcSet={LogoImg}
                                        src={LogoImg}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <span
                                    className="font-bold text-xl"
                                    style={{ color: "rgb(74, 88, 89)" }}
                                >
                                    Articulate
                                </span>
                            </div>
                            <div className="hidden md:flex items-center space-x-6">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                                    href="https://www.youtube.com/watch?v=sen1fR6e7n4"
                                >
                                    Our Launch
                                </a>
                                <Link

                                    to={"/blogs"}
                                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                                >
                                    Blog
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:opacity-90"
                                href="https://cal.com/milind-sagaram/30min"
                                style={{ backgroundColor: "rgb(255, 102, 0)" }}
                            >
                                Book a Demo
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="glass-button p-2 rounded-lg"
                                style={{ color: "rgb(74, 88, 89)" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-menu w-6 h-6"
                                    aria-hidden="true"
                                >
                                    <path d="M4 5h16" />
                                    <path d="M4 12h16" />
                                    <path d="M4 19h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar