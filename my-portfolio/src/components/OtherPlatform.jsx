import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { OTHER_PLATFORMS } from "../config/constants.jsx";
import Card from "@mui/material/Card";

const Projects = () => {
  return (
    <Box component="section" id="other-platforms">
      <Typography variant="caption" className="section_text_p1">Explore My</Typography>
      <Typography variant="h3" className="section_heading">Other Platforms</Typography>
      <Box className="details_container">
        {OTHER_PLATFORMS?.length > 0 && OTHER_PLATFORMS.map((item) => (
          <Card variant="outlined" className="subdetail_container" key={item?.id}>
            <a href={item?.link} className="platform-link" target="_blank" rel="noopener noreferrer">
              {/* Ensure item?.image is an <img> or JSX element */}
              {typeof item?.image === "string" ? (
                <img src={item?.image} alt={item?.title} className="platform-image" />
              ) : (
                item?.image
              )}
              <Typography component="h3" className="text-center">{item?.title}</Typography>
              <Typography component="p" className="text-center">{item?.description}</Typography>
            </a>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;