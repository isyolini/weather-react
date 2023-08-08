import Search from "./Search";
import Card from "./Card";
import Git from "./Git";

export default function App() {
  return (
    <div className="App">
      <div className="container-size">
        <Search />
        <Card />
        <Git />
      </div>
    </div>
  );
}
