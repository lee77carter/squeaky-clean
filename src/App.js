import "./styles.css";
import Tabs from "./Tabs";
import services from "./services";

export default function App() {
  return (
    <div className="App">
      <h1>SqueakyClean Laundromat </h1>
      <h2>We take the dirty work out of laundry!</h2>
      <Tabs services={services} />
    </div>
  );
}