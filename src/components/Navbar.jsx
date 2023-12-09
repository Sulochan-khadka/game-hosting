import logo from '../assets/nflogo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img className='logos' src={logo} alt='NfLOGO' />
      </div>
      <div className='links'>
        <div className='link'>Create&nbsp;a&nbsp;server</div>
        <div className='link'>Games</div>
        <div className='link'>Community</div>
        <div className='link'>Support</div>
        <div className='link'>Company</div>
      </div>
    </div>
  );
};

export default Navbar;
