import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagPage from "./pages/Hashtag-page";
import SignUpPage from "./pages/SignUp-page";
import GlobalStyle from "./components/Global-style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
