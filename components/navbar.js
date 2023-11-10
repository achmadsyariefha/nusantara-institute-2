import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex justify-end p-2 mx-auto lg:justify-end xl:px-0">
        {/* menu  */}
        <div className="hidden text-end sm:flex sm:items-end">
          <ul className="items-center justify-stretch flex-row pt-6 list-none sm:pt-0 sm:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 sm:flex nav__item">
          {/* <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
          </Link> */}

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
