import Link from "next/link";
import { BsDiscord, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white mb-16">
      <section className="flex justify-center items-center  gap-8 text-4xl">
        <Link href="https://www.discord.com" target="_blank">
          <BsDiscord />
        </Link>
        <Link href="https://www.twitter.com" target="_blank">
          <BsTwitter />
        </Link>
        <Link href="https://www.facebook.com" target="_blank">
          <BsFacebook />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <BsYoutube />
        </Link>
      </section>
      <div className="flex justify-center gap-4 mt-8 font-semibold">
        <p className="hover:text-orange-400 hover:cursor-pointer">Privacy</p>
        <p className="hover:text-orange-400 hover:cursor-pointer">
          Terms of use
        </p>
      </div>
    </footer>
  );
};

export default Footer;
