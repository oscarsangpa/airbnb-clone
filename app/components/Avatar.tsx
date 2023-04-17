'use client';
import Image from 'next/image';

interface AvatarProp {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProp> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="User avatar"
      src={src || `/images/placeholder.jpg`}
    />
  );
};

export default Avatar;
