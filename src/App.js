import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  return (
    <div >
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
