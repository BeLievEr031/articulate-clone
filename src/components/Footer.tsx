import Logo from "../assets/logo.webp"
function Footer() {
    return (
        <div
            className="relative"
            style={{ backgroundColor: "white", transform: "translateZ(0px)" }}
        >
            <footer
                className="relative z-10 py-4 px-4"
                style={{ transform: "translateZ(0px)", willChange: "auto" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-6 h-6 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: "white" }}
                            >
                                <img
                                    alt="Articulate Logo"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-4 h-4 object-contain"
                                    srcSet={Logo}
                                    src={Logo}
                                    style={{ color: "transparent" }}
                                />
                            </div>
                            <span
                                className="font-bold text-lg"
                                style={{ color: "rgb(74, 88, 89)" }}
                            >
                                Articulate
                            </span>
                        </div>
                        <div
                            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            <a className="hover:text-blue-600 transition-colors" href="/privacy">
                                Privacy Policy
                            </a>
                            <a className="hover:text-blue-600 transition-colors" href="/terms">
                                Terms of Service
                            </a>
                        </div>
                        <div className="text-sm" style={{ color: "rgb(74, 88, 89)" }}>
                            <p>© 2025 Articulate. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer