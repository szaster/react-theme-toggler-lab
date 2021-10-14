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

  return (
    <div className="App">
      <Paper style={{ height: "100vh" }}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Typography variant="h1">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Paper>
    </div>
  );
}

export default App;
