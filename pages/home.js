import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>This is the about Login</p>
      <Link href="/about" title="About Page">
        <a>About Page</a>
      </Link>
    </div>
  );
}
