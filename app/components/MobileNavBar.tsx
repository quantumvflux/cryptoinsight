import Link from "next/link";

const MobileNavBar = () => {
  return (
    <>
      <h1 className="text-3xl">
        <span className="font-normal">Crypto</span>
        <span className="font-bold">Insight</span>
      </h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Market Chart</Link>
        </li>
        <li>
          <Link href="/">Choose Us</Link>
        </li>
        <li>
          <Link href="/">Join</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileNavBar;
