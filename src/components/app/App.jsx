import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>this is a home page </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sed!
        Minus nemo tenetur rem recusandae. Perspiciatis sunt modi, dicta quia
        sit corporis eius molestias veniam, sequi, suscipit ad. Impedit
        assumenda omnis dicta quos rem vel, deleniti repellendus et ratione nemo
        molestiae ad ducimus, nostrum, quae eos earum similique? Facere non
        repellendus corrupti inventore eius, quae possimus tempore expedita
        nihil fuga placeat ipsa magni a tenetur blanditiis harum, ratione
        voluptas maxime, officiis natus! Id accusamus exercitationem natus quod,
        voluptatibus provident dignissimos dolorum repellendus dicta quasi ea
        debitis aspernatur perspiciatis minima. Sit, accusantium neque vitae
        amet non voluptatibus adipisci aliquam molestiae soluta odio, facilis
        dolore! Quo cumque commodi culpa sunt excepturi omnis praesentium,
        possimus aliquam aliquid corporis perferendis molestiae maxime, vero
        laborum molestias vitae distinctio facilis aspernatur similique
        necessitatibus! Deleniti ipsa autem vel, incidunt cupiditate magni.
        Pariatur architecto quas inventore amet corrupti consequatur quam nobis
        quos numquam vel mollitia sed error ex, unde voluptate deserunt odit
        impedit nulla asperiores tempora, maxime sunt provident delectus
        praesentium. Fugiat cum corporis quae similique laboriosam amet
        distinctio aspernatur quidem dolorum, in eius provident eveniet sapiente
        voluptatum eligendi alias nobis? A quo provident culpa hic rem iste ut
        accusamus minus, minima magni odio sunt ducimus obcaecati similique.
      </p>
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
