import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import PlanContext from "./PlanContext";

const Delete = () => {
  const { id } = useParams();
  const { plans, deletePlan } = useContext(PlanContext);
  const navigate = useNavigate();

  const plan = plans.find((element) => element._id === id);

  const handleConfirm = () => {
    deletePlan(id);
    navigate("/plans");
  };

  const handleCancel = () => {
    navigate("/plans");
  };

  return (
    <main className="p-4">
      <h3 className="text-center text-2xl font-extrabold my-6">
        Are you sure you want to delete {plan.title}?
      </h3>
      <div className="flex justify-center gap-6">
        <button
          className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </main>
  );
};

export default Delete;
