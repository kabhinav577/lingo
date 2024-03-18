'use client';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

type props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? 'sidebarOutline' : 'sidebar'}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          width={32}
          height={32}
        />
        {label}
      </Link>
    </Button>
  );
};
