import { Route, Routes } from "react-router";
import SignUpCard from "./Pages/SignUp/SignUpCard";
import { BrowserRouter } from "react-router";
import "./index.css";
import SignInCard from "./Pages/SignIn/SignInCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUpCard />} />
          <Route path="/" element={<SignInCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
