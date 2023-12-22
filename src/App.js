import Payouts from "./components/Payouts";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Payouts />
    </div>
  );
}

export default App;
