import '../styles/Footer.css';
import logo from '../assets/nflogo.png';
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='column'>
        <div className='heading'>Server Hosting</div>
        <div className='white'>Minecraft Server Hosting</div>{' '}
        <div className='white'>hours</div>
        <div className='white'>Hytale Server Hosting</div>
        <div className='white'>ARK Server Hosting</div>
        <div className='white'>Garry's Mod Servers</div>
        <div className='white'>Terraria Servers</div>
        <div className='white'>Rust Server Hosting</div>
      </div>
      <div className='column'>
        <div className='heading'>Company</div>
        <div className='white'>About Us</div> <div className='white'>hours</div>
        <div className='white'>Contact Us</div>
        <div className='white'>Terms of Service</div>
        <div className='white'>Privacy Policy</div>
        <div className='white'>Partners</div>
        <div className='white'>Earn Money</div>
        <div className='white'>Jobs</div>
      </div>
      <div className='column'>
        <div className='heading'>Support</div>
        <div className='white'>Submit a Ticket</div>{' '}
        <div className='white'>hours</div>
        <div className='white'>Knowledgebase</div>
        <div className='white'>Server Status</div>
      </div>
      <img src={logo} alt='logo' className='picture' />
    </div>
  );
};

export default Footer;
