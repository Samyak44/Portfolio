import dynamic from 'next/dynamic';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';

// Dynamic imports for canvas components to prevent SSR issues
const EarthCanvas = dynamic(() => import('./canvas/Earth'), { ssr: false });
const BallCanvas = dynamic(() => import('./canvas/Ball'), { ssr: false });
const ComputersCanvas = dynamic(() => import('./canvas/Computers'), { ssr: false });
const StarsCanvas = dynamic(() => import('./canvas/Stars'), { ssr: false });

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
}
