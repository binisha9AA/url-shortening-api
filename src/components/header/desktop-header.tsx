import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileHamburger from './mobile-hamburger';
import LogoIcon from '../icon/logo-icon';

export default function Header() {
  const [hamburgerMenu, setHamburgeMenu] = useState('false');

  return (
    <>
      <header className=" flex justify-between p-3 items-center ">
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
        <div className="flex md:hidden">
          <RxHamburgerMenu className="fill-neutral-gray_text h-6 w-6" />
        </div>
      </header>
    </>
  );
}
