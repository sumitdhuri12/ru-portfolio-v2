import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import MuseHub from "./assets/pages/MuseHub";
import Trisa from "./assets/pages/Trisa";
import PageLayout from "./assets/components/layout/PageLayout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="Project/MuseHub" element={<MuseHub />} />
        <Route path="Project/Trisa" element={<Trisa />} />
      </Route>
    </Routes>
  );
}

export default App;
