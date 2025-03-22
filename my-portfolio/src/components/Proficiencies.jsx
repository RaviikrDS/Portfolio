// import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PROFICIENCIES} from "../config/constants.jsx"

const Proficiencies = () => {
  return (
    <Box as="section" id="proficiencies">
      <Typography variant="caption" className="section_text_p1">Here Are My</Typography>
      <Typography variant="h3" className="section_heading">Proficiencies</Typography>
      <Box mt={4} className="text-container">
            <Typography as="p" variant="body1" sx={{textAlign:"start"}} className="section_text_p2">{PROFICIENCIES?.title}</Typography>
      </Box>

      <Box as="div" mt={4} className="article_container">
        { PROFICIENCIES?.details.map((item) => (
          <Box as="article" key={item?.id}>
              {item?.image}
              <Typography as="h3">{item?.title}</Typography>
              <Typography as="p">{item?.description}</Typography>
              </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Proficiencies;
