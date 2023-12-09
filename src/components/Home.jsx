import vid from '../assets/sword_-_99299 (Original).mp4';
import '../styles/Home.css';
import minecraft from '../assets/minecraft.webp';
import valheim from '../assets/valheim.jpeg';
import zomboid from '../assets/zomboid.webp';
import sevendays from '../assets/sevendays.jpg';
import rust from '../assets/rust.jpg';
import ark from '../assets/ark.jpg';
import ddos from '../assets/ddos-protection-server-svgrepo-com.svg';
import hardware from '../assets/host-hardware-svgrepo-com.svg';
import customer from '../assets/customer-support-svgrepo-com.svg';
import freewill from '../assets/back-svgrepo-com.svg';
import control from '../assets/settings-svgrepo-com.svg';
import activation from '../assets/cogwheel-setup-svgrepo-com.svg';
import tick from '../assets/success-svgrepo-com.svg';
import server from '../assets/server-svgrepo-com.svg';
import game from '../assets/game-card-svgrepo-com.svg';
import hosting from '../assets/hosting-monitors-server-svgrepo-com.svg';

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='image-container'>
          <video autoPlay muted loop className='hero-image'>
            <source src={vid} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='image-text'>
            Ultimate &nbsp;
            <div
              style={{
                color: 'rgb(255, 145, 0)',
                background: 'transparent',
                border: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              Game
            </div>
            &nbsp; Hosting
          </div>
          <div className='intro'>
            🎮 Ready to Level Up Your Gaming Experience? 🚀
          </div>
          <div className='desc'>
            Charge up yourself and join
            <div
              style={{
                color: 'rgb(255, 145, 0)',
                background: 'transparent',
                border: 'none',
                padding: 7,
                margin: 0,
              }}
            >
              NODEFALL
            </div>
            to experience what you never had!!!
          </div>
          <div className='pricing' style={{ display: 'flex' }}>
            Just at &nbsp;
            <div
              style={{
                color: 'green',
                background: 'transparent',
                border: 'none',
              }}
            >
              $599
            </div>
            /month
          </div>
          <div className='Button'>Create Now</div>
        </div>
        <div className='servers'>Server Arena</div>
        <div>
          <div className='image-container'>
            <img className='image' src={minecraft} alt='minecraft' />
            <div className='title'>MINECRAFT</div>
          </div>
          <div className='image-container'>
            <img className='image' src={valheim} alt='valheim' />
            <div className='title'>VALHEIM</div>
          </div>
          <div className='image-container'>
            <img className='image' src={ark} alt='ark' />
            <div className='title'>ARK: SURVIVOR EVOLVED</div>
          </div>
        </div>
        <div>
          <div className='image-container'>
            <img className='image' src={sevendays} alt='sevendays' />
            <div className='title'>7 DAYS TO DIE</div>
          </div>
          <div className='image-container'>
            <img className='image' src={rust} alt='rust' />
            <div className='title'>RUST</div>
          </div>
          <div className='image-container'>
            <img className='image' src={zomboid} alt='zomboid' />
            <div className='title'>ZOMBOID PROJECT</div>
          </div>
        </div>
        <div className='button-container'>
          <div className='see-more'>peek store</div>
        </div>
      </div>
      <div style={{ color: 'white' }}>
        <div className='services'>Our Services</div>
        <div className='card-container'>
          <div className='cards'>
            <img src={game} alt='servers' className='card-icon' />
            <div className='card-title'>Game Server Hosting</div>
            <div className='card-desc'>
              Hosting your own game server shouldn't be hard. Choose from a
              variety of supported games and we'll get you up and running within
              few minutes.
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              30+ games supported
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              Automatic Backups
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              Workshop and Mod Installers
            </div>
          </div>

          <div className='cards'>
            <img src={hosting} alt='servers' className='card-icon' />
            <div className='card-title'>Ryzen VPS Hosting</div>
            <div className='card-desc'>
              Built on Ryzen processors and NVMe SSDs, our unique VPS platform
              is built for those needing serious processing power from their
              instances.
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              AMD Ryzen Hypervisors
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              1-6 vCPU(s)
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              Unmetered Bandwidth
            </div>
          </div>
          <div className='cards'>
            <img src={server} alt='servers' className='card-icon' />
            <div className='card-title'>Dedicated Servers</div>
            <div className='card-desc'>
              Need that dedicated, raw performance? We offer both unmanaged and
              managed hosting solutions for your most resource-demanding
              projects.
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              AMD Ryzen Processors
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              NVMe SSD Storage
            </div>
            <div className='ticks'>
              <img src={tick} alt='' className='tick' />
              Unmetered Bandwidth
            </div>
          </div>
        </div>
      </div>
      <div className='why-us'>Why Us?</div>
      <div className='content-container'>
        <div className='contents'>
          <img src={ddos} alt='ddos protection' className='svgs' />
          <div className='head-title'>DDos as a standard protection</div>
          <div>
            Down to the most intricate attacks, we've got you covered. Our
            platform is carefully tuned and adjusted as necessary to keep
            today's attacks at bay and your services online.
          </div>
        </div>
        <div className='contents'>
          <img src={hardware} alt='Leading hardware' className='svgs' />
          <div className='head-title'>Industry Leading Hardware</div>
          <div>
            Our platform is built on the latest Ryzen and Xeon CPUs, giving you
            unmatched game server performance. Unlike many competitors, we own
            and operate our own hardware.
          </div>
        </div>
        <div className='contents'>
          <img src={customer} alt='customer support' className='svgs' />
          <div className='head-title'>24/7 Customer Support</div>
          <div>
            It's unacceptable to wait hours, possibly days, for a response to
            support requests. Our customers enjoy an average ticket response
            time of less than 10 minutes.
          </div>
        </div>
      </div>
      <div className='content-container'>
        <div className='contents'>
          <img src={freewill} alt='No commitment' className='svgs' />
          <div className='head-title'>No Commitment</div>
          <div>
            We do not hold you to any contracts or commitments. You're free to
            cancel your service at any time during its subscription period
            without a penalty or cancellation fee.
          </div>
        </div>
        <div className='contents'>
          <img src={control} alt='Best Control Panel' className='svgs' />
          <div className='head-title'>Refined Control Panels</div>
          <div>
            Over the years, we've refined our control panels and their
            underlying infrastructure to provide users with highly consitent and
            capable service management experiences.
          </div>
        </div>
        <div className='contents'>
          <img src={activation} alt='Instant Activation' className='svgs' />
          <div className='head-title'>Instant Activation</div>
          <div>
            A provisioning process kicks off automatically after we've received
            your order. Your new hosting service will be online and available
            for use in just minutes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
