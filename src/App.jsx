import Home from "./pages/Home";
import Projects from "./pages/Project";
import ScanCarriage from "./pages/Projects/ScanCarriage";
import StationVisit from "./pages/Projects/StationVisit.jsx";
import Celengin from "./pages/Projects/Celengin.jsx";
import BelleVue from "./pages/Projects/BelleVue.jsx";
import Bengkeltrack from "./pages/Projects/BengkelTrack.jsx";
import Skydule from "./pages/Projects/Skydule.jsx";
import Stack from "./pages/Stack.jsx";

import "./index.css";

const routes = {
  "/": Home,
  "/projects": Projects,
  "/stack": Stack,
  "/project/scan-carriage": ScanCarriage,
  "/project/station-visit": StationVisit,
  "/project/celengin": Celengin,
  "/project/belle-vue": BelleVue,
  "/project/bengkeltrack": Bengkeltrack,
  "/project/skydule": Skydule,
};

function App() {
  const Page = routes[window.location.pathname] || Home;
  return <Page />;
}

export default App;
