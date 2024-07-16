import { Typography } from "@mui/material";
import { AppProvider } from "./component/viewcourse/AppContext";
import Courses from "./component/Courses";

function App() {
  return (
    <AppProvider>
      <Typography>
        <Courses />
      </Typography>
    </AppProvider>
  );
}

export default App;
