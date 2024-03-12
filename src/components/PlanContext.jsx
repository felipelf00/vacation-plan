import { createContext, useState } from "react";
import PropTypes from "prop-types";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([
    {
      id: 0,
      title: "Beach Vacation",
      startDate: "2024-04-01",
      endDate: "2024-04-06",
      location: "Ipanema Beach",
      participants: "Me, Gustavo, Marina, Thiago",
      description: "A trip to the beach",
    },
  ]);

  const createPlan = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  // const getPlans = () => plans;

  const updatePlan = (id, updatedPlan) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === +id ? { ...plan, ...updatedPlan } : plan
      )
    );
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <PlanContext.Provider value={{ plans, createPlan, updatePlan, deletePlan }}>
      {children}
    </PlanContext.Provider>
  );
};

PlanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanContext;
