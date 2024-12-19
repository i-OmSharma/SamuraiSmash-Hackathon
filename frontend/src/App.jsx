import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Progress from './pages/Progress';
import Schedule from './pages/Schedule';
import Support from './pages/Support';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WatchLearn from './pages/WatchLearn';
import QuizTime from './pages/QuizTime';
import PlayLearn from './pages/PlayLearn';
// import ProtectedRoute from "./components/ProtectedRoute";  
import "bootstrap/dist/css/bootstrap.min.css";
import "material-design-iconic-font/dist/css/material-design-iconic-font.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes without Layout */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Routes with Layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                {/* Protected Routes */}
                {/* <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                /> */}
                <Route path="/home" element={<Home />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/support" element={<Support />} />
                <Route path="/watch-learn" element={<WatchLearn />} />
                <Route path="/quiz-time" element={<QuizTime />} />
                <Route path="/play-learn" element={<PlayLearn />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
