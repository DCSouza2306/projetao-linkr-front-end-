
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagPage from "./pages/Hashtag-page";


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
