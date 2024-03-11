import PlanContext from "./PlanContext";
import { useContext } from "react";
import Plan from "./Plan";
import { Link } from "react-router-dom";

const Plans = () => {
  const { plans, createPlan, updatePlan, deletePlan } = useContext(PlanContext);
  return (
    <main className="p-4">
      <div className="relative">
        <h3 className="text-center text-2xl font-semibold my-4">
          Current plans:
        </h3>
        {/* <Link
          to="/new"
          className="absolute right-4 top-0 bg-sky-500 text-white font-semibold py-1 px-3 rounded shadow"
        >
          New plan
        </Link> */}
      </div>
      <Link
        to="/new"
        className="mx-auto my-4 block text-center max-w-28 bg-sky-500 hover:bg-sky-700 transition text-white font-semibold py-1 px-3 rounded shadow"
      >
        New plan
      </Link>
      {plans &&
        plans.map((plan) => {
          return <Plan plan={plan} key={plan.id} />;
        })}
    </main>
  );
};

export default Plans;
