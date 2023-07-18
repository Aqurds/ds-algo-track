import { BsFillBoxFill } from 'react-icons/bs';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div>
        <BsFillBoxFill className='logo-main' />
        <h1 className='logo-main-text'>Ds-Algo</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-main">
          {links.map((link) => {
            return (
              <li key={link.text}>
                <a href={link.path}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );  
};
export default Navbar;
