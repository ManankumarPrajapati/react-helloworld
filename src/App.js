import "./App.css";
import Content from "./Content.js";
function App() {
  const fruits1 = {
    name: "mango",
    color: "yellow",
  };
  const fruits2 = {
    name: "watermelon",
    color: "Green",
  };
  return (
    <div>
      {/* <Content fruits={fruits1}> First Fruit Details </Content>
      <br />
      <Content fruits={fruits2}> Second Fruit Details </Content> */}
      <Content no1="10" no2="50">
        Mathematics
      </Content>
    </div>
  );
}

export default App;
