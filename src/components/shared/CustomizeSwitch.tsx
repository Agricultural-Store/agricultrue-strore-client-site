import { Switch, alpha, styled } from "@mui/material";

const CustomizedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: alpha("#265426", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    width: "23px",
    height: "23px",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#E6E8EC",
    height: "18px",
    borderRadius: "100px",
    opacity: 1,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#265426",
    opacity: 1,
  },
}));

export default CustomizedSwitch;
