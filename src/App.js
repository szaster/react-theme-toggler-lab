import React, { useState } from "react";
import {
  Paper,
  Switch,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={{ height: "100vh" }}>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Typography variant="h1">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
