import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Features from "../sections/Features"
import Hero from "../sections/Hero"

function Home() {
    return (
        <div className="flex min-h-dvh flex-col relative z-10">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

export default Home