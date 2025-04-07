import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "@mui/material/Link";
import { IoClose } from "react-icons/io5";

export default function SwipeableTemporaryDrawer({ showSidePanel, setShowSidePanel }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showSidePanel);
  }, [showSidePanel]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setShowSidePanel(newOpen);
  };

  const handleNavClick = (path) => {
    toggleDrawer(false)();
  
    const id = path.replace("/#", "");
    const element = document.getElementById(id);
  
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const list = (
    <Box
      sx={{ width: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {[
        { label: "About", path: "/#about" },
        { label: "Proficiencies", path: "/#proficiencies" },
        { label: "Projects", path: "/#projects" },
        { label: "Other Platforms", path: "/#other-platforms" },
        { label: "Contact", path: "/#contacts" },
      ].map((item) => (
        <Link
          key={item.label}
          href=""
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item.path);
          }}
          display="block"
          sx={{ px: 2, py: 1 }}
        >
          {item.label}
        </Link>
      ))}
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box className="sidebar-close-btn" onClick={toggleDrawer(false)}>
        <IoClose />
      </Box>
      {list}
    </SwipeableDrawer>
  );
}
