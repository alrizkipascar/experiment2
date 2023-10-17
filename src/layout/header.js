"use client";
import NavbarButton from "@/components/NavBarButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header({ kanit }) {
  const pathname = usePathname();
  const admin = "admin";
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blogs" },
    { href: "/location", label: "Location" },
    { href: "/about", label: "About" },
  ];

  if (!pathname.includes(admin)) {
    return (
      <header className="fixed z-10 top-0 w-full h-[20%] lg:h-24 lg:ml-0">
        <div className="h-24 grid grid-cols-2 lg:grid-cols-5  lg:justify-items-center  lg:content-center text-slate-950">
          <div
            className={`${kanit.className} my-auto content-start pl-[40px] lg:pl-0 lg:my-0  lg:content-normal text-whitebg
        col-span-1 text-3xl transition-all duration-300`}
          >
            Logo
          </div>
          <ul
            className={`${"text-white"}  hidden lg:grid transition-all duration-300 col-span-2 lg:col-span-3   grid-cols-5 gap-8 text-center justify-items-center  content-center`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={`${
                    link.href === pathname ? "border-b" : ""
                  } relative w-full justify-items-center content-center col-span-1`}
                  href={link.href}
                >
                  {/* {link.href === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-textWhite"
                    />
                  )} */}
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <Link
              href="/"
              className=" grid grid-rows-2 w-full justify-items-center content-center col-span-1"
            >
              <p className={`${"hover:text-slate-300"} is-active`}>Dashboard</p>
            </Link>
            <Link
              href="/projects"
              className=" grid grid-rows-2 w-full  justify-items-center content-center col-span-1"
            >
              <p className={`${"hover:text-slate-300"} `}>Projects</p>
            </Link>
            <Link
              href="/blog"
              className="grid grid-rows-2 w-full  justify-items-center content-center col-span-1"
            >
              <p className="hover:text-slate-700"> Blog</p>
            </Link>
            <Link
              href="/location"
              className="grid grid-rows-2 w-full  justify-items-center content-center col-span-1"
            >
              <p className="hover:text-slate-700"> Location</p>
            </Link>
            <Link
              href="/about"
              className="grid grid-rows-2 w-full  justify-items-center content-center col-span-1"
            >
              <p className="hover:text-slate-700"> About</p>
            </Link> */}
          </ul>
          {/* <div className="hidden lg:block col-span-1  text-whitebg text-sm w-full  ">
            <button
              className={`flex 
             transition-all duration-300  rounded-3xl items-center place-content-center w-24 lg:w-44 h-12 gap-2`}
            >
              <p className={`${kanit.className} hidden lg:block  lg:text-xl`}>
                About Us
              </p>
            </button>
          </div> */}

          <div className=" lg:hidden my-auto  flex justify-end lg:my-0   lg:content-normal">
            <NavbarButton
              className="block lg:hidden "
              onClick={toggleNavbar}
              isNavbarVisible={isNavbarVisible}
            ></NavbarButton>
            {!isNavbarVisible ? null : (
              <nav
                className={`navbar ${
                  isNavbarVisible ? "animate-fadeIn " : "hidden"
                }  block w-full pr-5 text-[15px] lg:hidden col-span-2 lg:col-span-1"`}
              >
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className={`${
                          link.href === pathname ? "border-b" : ""
                        } relative w-full justify-items-center content-center col-span-1`}
                        href={link.href}
                      >
                        {/* {link.href === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-textWhite"
                    />
                  )} */}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    );
  }
}
