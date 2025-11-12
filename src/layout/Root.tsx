import KeyCraneImg from "../assets/key-crane.webp"
import KeySolarImg from "../assets/key-solar.webp"
import KeyPlanImg from "../assets/key-plans.webp"
import { Outlet } from "react-router-dom"
function Root() {
    return (
        <div
            className="min-h-screen transition-colors duration-500 "
            style={{ backgroundColor: "white" }}
        >
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundColor: "white" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-gray-900/50" />
            </div>
            <div
                className="fixed top-48 left-16 transform -rotate-[20deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.7"
                }}
            >
                <img
                    alt="Crane Key"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-25 h-25"
                    srcSet={KeyCraneImg}
                    src={KeyCraneImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-80 left-8 transform rotate-[15deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.6"
                }}
            >
                <img
                    alt="Plans Key"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-25 h-25"
                    srcSet={KeyPlanImg}
                    src={KeyPlanImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[22rem] left-32 transform -rotate-[12deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.7"
                }}
            >
                <img
                    alt="Solar Key"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-25 h-25"
                    srcSet={KeySolarImg}
                    src={KeySolarImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[26rem] left-12 transform -rotate-[25deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.65"
                }}
            >
                <img
                    alt="Crane Key"
                    loading="lazy"
                    width={95}
                    height={95}
                    decoding="async"
                    data-nimg={1}
                    className="w-24 h-24"
                    srcSet="/_next/image?url=%2Fkey-crane.png&w=96&q=75 1x, /_next/image?url=%2Fkey-crane.png&w=256&q=75 2x"
                    src={KeyCraneImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[36rem] left-24 transform rotate-[38deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.6"
                }}
            >
                <img
                    alt="Plans Key"
                    loading="lazy"
                    width={95}
                    height={95}
                    decoding="async"
                    data-nimg={1}
                    className="w-24 h-24"
                    srcSet="/_next/image?url=%2Fkey-plans.png&w=96&q=75 1x, /_next/image?url=%2Fkey-plans.png&w=256&q=75 2x"
                    src={KeyPlanImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-40 right-20 transform -rotate-[28deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.8"
                }}
            >
                <img
                    alt="Solar Key"
                    loading="lazy"
                    width={105}
                    height={105}
                    decoding="async"
                    data-nimg={1}
                    className="w-26 h-26"
                    srcSet={KeySolarImg}
                    src={KeySolarImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[18rem] right-8 transform rotate-[42deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.65"
                }}
            >
                <img
                    alt="Crane Key"
                    loading="lazy"
                    width={110}
                    height={110}
                    decoding="async"
                    data-nimg={1}
                    className="w-[6.5rem] h-[6.5rem]"
                    srcSet={KeyCraneImg}
                    src={KeyCraneImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[24rem] right-20 transform -rotate-[18deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.6"
                }}
            >
                <img
                    alt="Plans Key"
                    loading="lazy"
                    width={105}
                    height={105}
                    decoding="async"
                    data-nimg={1}
                    className="w-26 h-26"
                    srcSet={KeyPlanImg}
                    src={KeyPlanImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[32rem] right-12 transform rotate-[30deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.7"
                }}
            >
                <img
                    alt="Solar Key"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-25 h-25"
                    srcSet={KeySolarImg}
                    src={KeySolarImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[42rem] right-16 transform -rotate-[20deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.75"
                }}
            >
                <img
                    alt="Crane Key"
                    loading="lazy"
                    width={115}
                    height={115}
                    decoding="async"
                    data-nimg={1}
                    className="w-[6.5rem] h-[6.5rem]"
                    srcSet={KeyCraneImg}
                    src={KeyCraneImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[26rem] left-12 transform -rotate-[25deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.65"
                }}
            >
                <img
                    alt="Crane Key"
                    loading="lazy"
                    width={95}
                    height={95}
                    decoding="async"
                    data-nimg={1}
                    className="w-24 h-24"
                    srcSet={KeyCraneImg}
                    src={KeyCraneImg}
                    style={{ color: "transparent" }}
                />
            </div>
            <div
                className="fixed top-[36rem] left-24 transform rotate-[38deg] z-[5]"
                style={{
                    filter: "drop-shadow(rgba(0, 0, 0, 0.4) 0px 10px 20px)",
                    opacity: "0.6"
                }}
            >
                <img
                    alt="Plans Key"
                    loading="lazy"
                    width={95}
                    height={95}
                    decoding="async"
                    data-nimg={1}
                    className="w-24 h-24"
                    srcSet={KeyPlanImg}
                    src={KeyPlanImg}
                    style={{ color: "transparent" }}
                />
            </div>


            <Outlet />


        </div>

    )
}

export default Root