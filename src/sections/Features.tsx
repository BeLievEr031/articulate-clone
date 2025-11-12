import DesignDiscrepancies from "../assets/design_discrepancies.webp"
import builder_network from "../assets/builder_network.webp"
import generate_rfis from "../assets/generate_rfis.webp"
import integrated_proactive from "../assets/integrated_proactive.webp"
function Features() {
    return (

        <section id="features" className="py-20 flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto text-center w-full">
                <div
                    className="text-center mb-16"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div
                        className="inline-block bg-white rounded-2xl px-16 py-6 shadow-2xl"
                        style={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.35) 0px 25px 50px -12px, rgba(0, 0, 0, 0.25) 0px 10px 25px -5px"
                        }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            Our Features
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <div className="mb-6 overflow-hidden rounded-xl h-64">
                            <img
                                alt="Design Discrepancies"
                                loading="lazy"
                                width={600}
                                height={400}
                                decoding="async"
                                data-nimg={1}
                                className="w-full h-full object-cover"
                                srcSet={DesignDiscrepancies}
                                src={DesignDiscrepancies}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            Detect design discrepancies automatically
                        </h3>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <div className="mb-6 overflow-hidden rounded-xl h-64">
                            <img
                                alt="Builder Network"
                                loading="lazy"
                                width={600}
                                height={400}
                                decoding="async"
                                data-nimg={1}
                                className="w-full h-full object-cover"
                                srcSet={builder_network}
                                src={builder_network}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            Automate crew check-ins and procurement
                        </h3>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ opacity: 1, transform: "translateY(30px)" }}
                    >
                        <div className="mb-6 overflow-hidden rounded-xl h-64 flex items-center justify-center bg-gray-50">
                            <img
                                alt="Generate RFIs"
                                loading="lazy"
                                width={600}
                                height={400}
                                decoding="async"
                                data-nimg={1}
                                className="w-full h-full object-contain"
                                srcSet={generate_rfis}
                                src={generate_rfis}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            Instantly generate RFIs and submittals. Receive notifications when
                            RFIs are complete
                        </h3>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ opacity: 1, transform: "translateY(30px)" }}
                    >
                        <div className="mb-6 overflow-hidden rounded-xl h-64">
                            <img
                                alt="Integrated and Proactive"
                                loading="lazy"
                                width={600}
                                height={400}
                                decoding="async"
                                data-nimg={1}
                                className="w-full h-full object-cover"
                                srcSet={integrated_proactive}
                                src={integrated_proactive}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "rgb(74, 88, 89)" }}
                        >
                            Integrated and proactive
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features