import Router from "./Router";
import { PlanProvider } from "./PlanContext";

function App() {
  return (
    <PlanProvider>
      <Router />
    </PlanProvider>
  );
}

export default App;
