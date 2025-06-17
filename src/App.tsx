import { Route, Routes } from "react-router";
import SignUpCard from "./Pages/SignUp/SignUpCard";
import { BrowserRouter } from "react-router";
import "./index.css";
import SignInCard from "./Pages/SignIn/SignInCard";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUpCard />} />
          <Route path="/" element={<SignInCard />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
