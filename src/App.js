import { Button, Card } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./state/slices/theme";

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const toggleTheme = () => {
    dispatch(actions.toggle());
  };

  return (
    <ThemeProvider theme={theme}>
      <div>This is using the dark mode {themeMode}</div>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle
      </Button>
      <Card>Hello</Card>
    </ThemeProvider>
  );
}

export default App;
