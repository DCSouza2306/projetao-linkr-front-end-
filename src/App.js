import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HashtagPage from './pages/Hashtag-page';
import SignUpPage from './pages/SignUp-page';
import LoginPage from './pages/Login-page';
import GlobalStyle from './components/Global-style';
import TimelinePage from './pages/Timeline-page';
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />

			<Routes>
				<Route path="/hashtag/:hashtag" element={<HashtagPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/" element={<LoginPage />} />
				<Route path="/timeline" element={<TimelinePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
