import NavLinks from './NavLinks';
import { navItems } from '../constants';

const Menu = () => {
  return (
    <nav className="h-3 rounded-b-[10px] border-[3px] border-black bg-navbar lg:h-[50px]">
      <div className="hidden h-full items-center justify-around lg:flex">
        <NavLinks navItems={navItems} />
      </div>
    </nav>
  );
};

export default Menu;
