// import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Logo from "assets/logo.png"

const Header = () => {
    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}} width="100%">
            <Box sx={{ display: 'flex', alignItems: 'center' }} py={1} width="71%">
             <img src={Logo} alt="Logo" style={{ height: '40px' }} />
             <Box display="flex" alignItems="center" ml="auto" gap={4}>
                 <Link href="/" className="nav-link">About</Link>
                 <Link href="/about" className="nav-link">Proficiencies</Link>
                 <Link href="/contact" className="nav-link">Projects</Link>  
                 <Link href="/contact" className="nav-link">Other Platforms</Link>  
                 <Link href="/contact" className="nav-link">Contact</Link>  
             </Box>
        </Box>
       </Box>
    );
}

export default Header
