import Image from 'next/image';
import Link from 'next/link';

export default function Introduce() {
  return (
    <div>
      <Image src="/images/cover.jpg" height={256} width={188} alt="my image" />
      <br />
      <h3>
        <Link href="/">
          <a className="text-5xl">home!</a>
        </Link>
      </h3>
    </div>
  );
}
