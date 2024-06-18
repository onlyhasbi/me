import { headerList } from "@/model/header.model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const currentPath = useRouter().pathname;

  const toPath = (pathname) => {
    if (pathname == "/") return pathname;
    return `/${pathname}`;
  };

  const isMatch = (pathname) => {
    if (currentPath == "/" && currentPath == pathname) return true;
    return currentPath == `/${pathname}`;
  };

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
            <Link
              href={toPath(path)}
              key={name}
              className={`cursor-pointer ${isMatch(path) ? "underline" : ""}`}
            >
              {name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
