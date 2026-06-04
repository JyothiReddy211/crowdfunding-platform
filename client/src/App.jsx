import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import EditCampaign from "./pages/EditCampaign";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CampaignDetails from "./pages/CampaignDetails";
import CreateCampaign from "./pages/CreateCampaign";
import MyCampaigns from "./pages/MyCampaigns";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/create"
          element={<CreateCampaign />}
        />

        <Route
          path="/my-campaigns"
          element={<MyCampaigns />}
        />
        <Route
  path="/edit-campaign/:id"
  element={<EditCampaign />}
/>
        <Route
          path="/campaign/:id"
          element={<CampaignDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;