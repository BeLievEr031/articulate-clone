import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Blog() {
    return (
        <div className="flex min-h-dvh flex-col relative z-10">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 relative z-10">
                    <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
                        <div
                            className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
                            style={{
                                boxShadow:
                                    "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 10px 20px -5px"
                            }}
                        >
                            <h1
                                className="text-5xl font-bold mb-4"
                                style={{ color: "rgb(74, 88, 89)" }}
                            >
                                Articulate Blog
                            </h1>
                            <p className="text-xl text-gray-600">
                                Insights on construction technology, innovation, and the future of
                                building
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="rounded-lg border text-card-foreground shadow-sm p-6 cursor-pointer bg-white transition-all duration-300 hover:-translate-y-2"
                                style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 25px -5px" }}
                            >
                                <div className="mb-3">
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 text-white hover:opacity-90"
                                        style={{ backgroundColor: "rgb(255, 102, 0)" }}
                                    >
                                        Events
                                    </div>
                                </div>
                                <h2
                                    className="text-2xl font-bold mb-3 transition-colors"
                                    style={{ color: "rgb(74, 88, 89)" }}
                                >
                                    CMAA Conference: Tackling Delays in Nashville
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    We just got back from the CMAA conference in Nashville. We met people
                                    from big general contractors, owner's reps, and construction
                                    management firms, and almost every conversation came back to one major
                                    pain point: delays.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Events
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        CMAA
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        BIM
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Construction Management
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        AI
                                    </span>
                                </div>
                                <div
                                    className="mt-4 font-semibold flex items-center"
                                    style={{ color: "rgb(255, 102, 0)" }}
                                >
                                    Read more
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="rounded-lg border text-card-foreground shadow-sm p-6 cursor-pointer bg-white transition-all duration-300 hover:-translate-y-2"
                                style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 25px -5px" }}
                            >
                                <div className="mb-3">
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 text-white hover:opacity-90"
                                        style={{ backgroundColor: "rgb(255, 102, 0)" }}
                                    >
                                        Events
                                    </div>
                                </div>
                                <h2
                                    className="text-2xl font-bold mb-3 transition-colors"
                                    style={{ color: "rgb(74, 88, 89)" }}
                                >
                                    Build Show LIVE 2025: Three Days in Dallas
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    Our experience at Build Show LIVE in Dallas, where we connected with
                                    builders and contractors to learn about the biggest challenges facing
                                    the construction industry today.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Events
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Networking
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Custom Homes
                                    </span>
                                </div>
                                <div
                                    className="mt-4 font-semibold flex items-center"
                                    style={{ color: "rgb(255, 102, 0)" }}
                                >
                                    Read more
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div
                                className="rounded-lg border text-card-foreground shadow-sm p-6 cursor-pointer bg-white transition-all duration-300 hover:-translate-y-2"
                                style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 25px -5px" }}
                            >
                                <div className="mb-3">
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 text-white hover:opacity-90"
                                        style={{ backgroundColor: "rgb(255, 102, 0)" }}
                                    >
                                        Events
                                    </div>
                                </div>
                                <h2
                                    className="text-2xl font-bold mb-3 transition-colors"
                                    style={{ color: "rgb(74, 88, 89)" }}
                                >
                                    Groundbreak 2025: Insights from Houston
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    We went to the Procore Groundbreak conference in Houston, where we met
                                    general contractors, project managers, and tech folks working to make
                                    construction better.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Events
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Procore
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        Construction Tech
                                    </span>
                                    <span
                                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                                        style={{ color: "rgb(74, 88, 89)" }}
                                    >
                                        AI
                                    </span>
                                </div>
                                <div
                                    className="mt-4 font-semibold flex items-center"
                                    style={{ color: "rgb(255, 102, 0)" }}
                                >
                                    Read more
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 text-center" style={{ opacity: 1 }}>
                        <p className="text-gray-600">3 posts</p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Blog