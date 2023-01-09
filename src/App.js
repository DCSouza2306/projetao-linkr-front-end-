import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagPage from "./pages/Hashtag-page";
import SignUpPage from "./pages/SignUp-page";
import LoginPage from "./pages/Login-page";
import GlobalStyle from "./components/Global-style";
import UserPage from "./pages/User-Page";
import HeaderSearch from "./components/Header-Search";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
