import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div id="footer">
      <NavLink to="contact">Contact</NavLink>
      <Typography color="initial" fontWeight={100}>
        Naeem Malik&copy; 2024
      </Typography>
    </div>
  );
};

export default Footer;
