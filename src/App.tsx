import { Route, Routes } from "react-router";
import SignUpCard from "./Pages/SignUp/SignUpCard";
import { BrowserRouter } from "react-router";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUpCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
