import { NavLink } from 'react-router';

const NavLinks = ({ navItems }) => (
  <>
    {navItems.map(({ path, name }) => (
      <NavLink
        key={name}
        to={path}
        end={path === '/manzashops/'}
        className={({ isActive }) =>
          isActive
            ? 'text-[22px] text-black hover:text-[#0000ff]'
            : 'text-white hover:text-[#0000ff]'
        }
      >
        {({ isActive }) => (
          <>
            <span>{isActive ? '| ' : undefined}</span>{' '}
            <span className={isActive ? 'underline' : undefined}>{name}</span>
          </>
        )}
      </NavLink>
    ))}
  </>
);

export default NavLinks;
