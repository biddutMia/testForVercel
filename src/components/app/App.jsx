import { Routes, Route } from "react-router-dom";

const Home = () => {
  return <div>this is a home page</div>;
};

const Other = () => {
  return <div>this is a other page</div>;
};

const App = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/other" element={<Other />}></Route>
      </Routes>
    </div>
  );
};

export default App;
