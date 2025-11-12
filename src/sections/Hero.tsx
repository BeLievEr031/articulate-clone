import YCombinator from "../assets/y_combinator.webp"
function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 pt-36 md:pt-32"
        >
            <div className="max-w-7xl mx-auto text-center">
                <div
                    className="flex items-center justify-center gap-3 mb-6"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <p className="text-sm text-gray-600 font-medium">Backed by</p>
                    <img
                        alt="Y Combinator"
                        loading="lazy"
                        width={120}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="object-contain"
                        srcSet={YCombinator}
                        src={YCombinator}
                        style={{ color: "transparent" }}
                    />
                </div>
                <div
                    className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl"
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 10px 20px -5px",
                        opacity: 1,
                        transform: "none"
                    }}
                >
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: "rgb(74, 88, 89)", opacity: 1, transform: "none" }}
                    >
                        Cut Months off Projects.
                        <br />
                        Save Millions of Dollars.
                    </h1>
                    <div className="mb-8" style={{ opacity: 1, transform: "none" }}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 group px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:opacity-90"
                            href="https://cal.com/milind-sagaram/30min"
                            style={{ backgroundColor: "rgb(255, 102, 0)" }}
                        >
                            Book a Free Demo
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
                                className="lucide lucide-arrow-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div
                        className="mb-8 mx-auto max-w-3xl"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                                src="https://www.youtube.com/embed/sen1fR6e7n4?autoplay=1&mute=1&controls=1&rel=0"
                                title="Articulate Launch Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <p
                        className="text-lg md:text-xl text-gray-900 dark:text-gray-600 mb-4 max-w-3xl mx-auto"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        Catch clashes in your drawings before boots hit the ground. Automate
                        procurement and improve subcontractor coordination with agents. We help
                        construction and solar clients reduce over $100,000,000 in losses and
                        save months with intelligent automation.
                    </p>
                    <p
                        className="text-sm text-gray-900 dark:text-gray-600 text-center"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        SOC 2 Type II compliant
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Hero