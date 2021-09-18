import Link from "next/link";

const Navbar = (params) => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      <Link href="/permz">
        <a>Permz</a>
      </Link>
    </nav>
  );
};

export default Navbar;
