import { createContext, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      title: "Summer Vacation",
      description: "A trip to the beach",
      startDate: "2024-06-01",
      // startTime: "13:00",
      endDate: "2024-06-10",
      // endTime: "18:00",
      location: "Miami Beach",
      participants: "Bill, Steve",
    },
  ]);

  const createPlan = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  // const getPlans = () => plans;

  const updatePlan = (id, updatedPlan) => {
    setPlans(plans.map((plan) => (plan.id === id ? updatedPlan : plan)));
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

export default PlanContext;
