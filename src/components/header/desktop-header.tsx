import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileHamburger from './mobile-hamburger';
import LogoIcon from '../icon/logo-icon';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [hamburgerMenu, setHamburgeMenu] = useState(false);
  function handleHamburger() {
    setHamburgeMenu(!hamburgerMenu);
  }
  return (
    <>
      <header className=" flex justify-between p-3 items-center relative ">
        <div className="flex gap-4 items-center">
          <figure>
            <LogoIcon />
          </figure>

          <nav className="hidden md:flex">
            <ul className="flex gap-2 items-center font-bold text-neutral-gray_text">
              <li className="hover:text-primary-dark_violet ">Features</li>
              <li className="hover:text-primary-dark_violet ">Pricing</li>
              <li className="hover:text-primary-dark_violet ">Resources</li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3 ">
          <button className="text-neutral-gray_text text-base">login</button>
          <button className="bg-primary-cyan_btn p-2 text-white rounded-2xl text-base w-[120px]">
            Signup
          </button>
        </div>
        <div className="flex md:hidden" onClick={handleHamburger}>
          {hamburgerMenu ? (
            <IoMdClose />
          ) : (
            <RxHamburgerMenu className="fill-neutral-gray_text h-6 w-6" />
          )}
        </div>
        {hamburgerMenu ? (
          <div className="absolute top-14 left-0 rounded-md bg-primary-dark_violet w-full py-10 px-10">
            <ul className="flex gap-8 items-center font-bold text-neutral-gray_text flex-col h-full">
              <li className="text-white">Features</li>
              <li className="text-white">Pricing</li>
              <li className="text-white">Resources</li>
            </ul>
            <div className="flex items-center gap-3 flex-col mt-8">
              <button className="text-white text-base border-neutral-grayish_violet border-t pt-4 w-full font-bold">
                Login
              </button>
              <button className="bg-primary-cyan_btn p-2 text-white rounded-2xl text-base w-full font-bold">
                Sign up
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </header>
    </>
  );
}
