import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error
        amet minus dicta veritatis eveniet iusto provident eos sit laborum.
        Accusamus magni quia doloremque, dolorem fugit mollitia rem inventore
        tenetur!
      </p>
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      <Link href="/permz">
        <a>Permz</a>
      </Link>
    </div>
  );
}
