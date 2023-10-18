import { useStoreState } from "easy-peasy";
import { useStoreActions } from "easy-peasy";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  const data = useStoreState((state) => state.playLists.data);

  const actions = useStoreActions((action) => action.playLists.getPlayListItem);

  actions("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");

  return (
    <div>
      <div>this is a home page </div>
      {Object.values(data).length > -1 &&
        Object.values(data).map((v, i) => {
          console.log(v);
          return <div key={i}>{v.playListDescription}</div>;
        })}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div>this is about page</div>
      <h3>my name is biddut mia riju</h3>
      <p>i want to learn front end development and back end development</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
