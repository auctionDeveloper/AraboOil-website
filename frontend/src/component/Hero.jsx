import { Link } from "react-router-dom";
import bg from "../assets/bg2.svg";

export default function Hero() {
  return (
    <header className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* subtle dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* hero content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Reliable Fuel Solutions&nbsp;Since&nbsp;2012
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl  text-white mb-8">
          Supplying certified industrial fuels across&nbsp;India with speed, safety&nbsp;and trust.
        </h2>

        <Link
          to="/contactus"
          className="inline-block rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 transition-colors duration-200"
        >
          Contact&nbsp;Us&nbsp;→
        </Link>
      </div>
    </header>
  );
}
