import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PhonesScreen, PhoneDetailScreen } from "./screens"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/phones" element={<PhonesScreen />} />
          <Route path="/phones/:id" element={<PhoneDetailScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
