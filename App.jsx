import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Hellotab from "./Hellotab.jsx";
import Project from "./project.jsx";
import Cli from "./Butoo.jsx";
import Ludo from "./Ludo.jsx";
import Todo from "./Todo.jsx";
import Lott from "./Lott.jsx";
import Ticketnum from "./TIcketnum.jsx";
import Form from "./Form.jsx";
import Joker from "./Joker.jsx"
import SearchBox from "./Searchbox.jsx";
function App() {
  return (
    <div className="project-container">
      <SearchBox/>
    </div>
  );
}

//  <Joker/>
// <Form />
// <Lott n={3} summ={15} />
// <Lott />
// <Todo/>
// <Ludo/>
// <Cli/>
// <ProductTab/>
// <Hellotab/>
// <Project title="First Project" idx={0} />
// <Project title="Second Project" idx={1} />

export default App;
