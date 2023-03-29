import Link from "next/link";
import HeadingH2 from "../chooseus/components/HeadingH2";

const JoinUs = () => {
  return (
    <section id="join" className="mt-4 mb-24 sm:scroll-mt-52 ">
      <HeadingH2 text="Join us via Discord" />
      <h4 className="text-white -mt-4 text-2xl text-center">
        Invest and manage all your crypto at one place.
      </h4>
      <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-xl font-bold text-white px-12 py-4 rounded-2xl flex justify-center m-auto mt-8">
        <Link target="_blank" href="https://discord.com/">
          Join via Discord
        </Link>
      </button>
    </section>
  );
};

export default JoinUs;
