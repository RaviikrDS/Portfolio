import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Logo from "assets/logo.png"
import { useGSAP } from '@gsap/react';
import { HiMenu } from "react-icons/hi";
import SideBar from './SideBar';
import { SlMenu } from "react-icons/sl";

const Header = ({timeline}) => {

    const headerRef = useRef(null);
    const [showSidePanel, setShowSidePanel] = useState(false);

  useGSAP(
    () => {
      const logo = headerRef.current.querySelector('img');
      const links = headerRef.current.querySelectorAll('.nav-link');
      const menuIcon = headerRef.current.querySelector('.menu-icon');

      // Add animation to the passed timeline
      timeline.from([logo, ...links, menuIcon], {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 0.5,
        stagger: 0.15,
      });
    },
    { scope: headerRef, dependencies: [timeline] }
  );


    return (
        <Box ref={headerRef} sx={{display:"flex", justifyContent:"center", alignItems:"center"}} width="100%">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} py={1} className="header-link-container">
             <img src={Logo} alt="Logo" style={{ height: '40px' }} />
             <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }} alignItems="center" ml="auto" gap={4}>
                 <Link href="#about" className="nav-link">About</Link>
                 <Link href="#proficiencies" className="nav-link">Proficiencies</Link>
                 <Link href="#projects" className="nav-link">Projects</Link>  
                 <Link href="#other-platforms" className="nav-link">Other Platforms</Link>  
                 <Link href="#contacts" className="nav-link">Contact</Link>  
             </Box>
                <Box sx={{ display: { xs: 'flex', lg: 'none', cursor: 'pointer' } }}>
                   <SlMenu color='black' size={25} onClick={() => setShowSidePanel(true)} className='menu-icon' />
                </Box>
        </Box>
        
        <SideBar showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel} />
        
       </Box>
    );
}

export default Header
