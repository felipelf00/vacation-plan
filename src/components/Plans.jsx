import PlanContext from "./PlanContext";
import { useContext } from "react";
import Plan from "./Plan";

const Plans = () => {
  const { plans, createPlan, updatePlan, deletePlan } = useContext(PlanContext);
  return (
    <main className="p-4">
      <h3 className="text-center text-2xl font-semibold">Current plans:</h3>
      {plans &&
        plans.map((plan) => {
          return (
            <div key={plan.id}>
              <Plan plan={plan} />
            </div>
          );
        })}
    </main>
  );
};

export default Plans;
