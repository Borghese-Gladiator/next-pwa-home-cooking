import { Box, Paper } from "@mui/material";

const Content = ({ children }) => {
  return (
    <Paper sx={{ p: 3 }}>
      {children}
    </Paper >
  );
}

export default Content;