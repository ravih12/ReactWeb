import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import SingIn from "./Pages/SignIn"
import SingUp from "./Pages/SignUp"
import ForgotPassword from "./Pages/ForgotPassword"
import Offers from "./Pages/Offers"
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>      
        
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
