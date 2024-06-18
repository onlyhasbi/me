import { headerList } from "@/model/header.model";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex gap-x-8 items-center">
      <Image
        className="w-auto h-[5rem]"
        src="/logo.svg"
        alt="logo-image"
        width={124}
        height={84}
        priority
      />
      <ul className="flex gap-x-10 text-slate-700">
        {headerList.map(({ name, path }) => {
          return (
            <Link href={`/${path}`} key={name} className="cursor-pointer">
              {name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
