import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { HomePage } from "./pages/HomePage/HomePage";
import {MatchPage} from "./pages/MatchPage/MatchPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/teams/:teamName" element={<TeamPage />} />
                <Route path="/teams/:teamName/matches/:year" element={ <MatchPage /> } />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
