import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div>
        <Link href='/'>
          <Image
            width={100}
            height={100}
            layout='intrinsic'
            src='/images/Logo.jpg'
            alt='musicians mobile logo'
          />
        </Link>
      </div>
      <p>Welcome to the about page</p>
    </div>
  );
}
