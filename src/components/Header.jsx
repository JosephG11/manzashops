import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import NavLinks from './NavLinks';
import { navItems } from '../constants';
import { Link } from 'react-router';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex h-[50px] items-center justify-between bg-header px-16 xl:px-40">
      <Link to="/" className="text-white hover:text-secondary">
        Manza
      </Link>

      <input
        className="hidden h-8 w-[480px] rounded-[5px] border-[3px] border-black lg:inline-block xl:w-[550px]"
        placeholder="Search..."
      />

      <div className="hidden md:gap-4 lg:flex lg:gap-16">
        <Link to="/mission" className="px-2 text-white">
          Our Mission
        </Link>

        <Link to="/checkout" className="px-2 text-white">
          Support Us
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end lg:hidden">
        <button type="button" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <RxCross1 className="size-7 text-white" />
          ) : (
            <RxHamburgerMenu className="size-7 text-white" />
          )}
        </button>

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } sidebar absolute right-0 top-20 z-20 mx-4 mt-2 min-w-[140px] flex-col rounded-lg border-t-4 border-secondary bg-header`}
        >
          <div className="p-6">
            <input
              className="h-8 w-full rounded-[5px] border-[3px] border-black"
              placeholder="Search..."
            />
          </div>

          <div className="flex w-full justify-between gap-4 px-6 pb-3">
            <Link to="/mission" className="px-2 text-white">
              Our Mission
            </Link>

            <Link to="/checkout" className="px-2 text-white">
              Support Us
            </Link>
          </div>

          <ul className="flex flex-1 flex-col gap-2 rounded-b-lg bg-secondary px-6 pb-5 pt-3">
            <NavLinks navItems={navItems} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
