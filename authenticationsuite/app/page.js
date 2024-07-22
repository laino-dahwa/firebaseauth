import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2">
        <h1>Welcome to my firebase Authentication suite</h1>
        <ul className="cursor-pointer">
          <li>Email and password</li>
          <li>Google</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Github</li>
          <li>Microsoft</li>
        </ul>
    </main>
  );
}
