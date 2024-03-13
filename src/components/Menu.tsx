import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-stone-50 ">
      <nav className="container justify-between flex mx-auto gap-2 py-2">
        <Image src="./next.svg" width={60} height={60} alt="logo" />
        <ul className="text-black flex gap-2">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="/imc">Calculadora</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
