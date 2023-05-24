'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Logo() {
  const router = useRouter();

  const goToMain = () => router.push('/');

  return (
    <Image
      onClick={goToMain}
      alt="Airbnb logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
}

export default Logo;
