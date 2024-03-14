import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch(
        "https://vacation-api.netlify.app/.netlify/functions/api/plans"
      );
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    }
  };

  const createPlan = async (newPlan) => {
    // setPlans([...plans, newPlan]);
    try {
      const response = await fetch(
        "https://vacation-api.netlify.app/.netlify/functions/api/plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlan),
        }
      );
      const data = await response.json();
      setPlans([...plans, data]);
    } catch (error) {
      console.error("Failed to create plan:", error);
    }
  };

  // const getPlans = () => plans;

  const updatePlan = async (id, updatedPlan) => {
    try {
      const response = await fetch(
        `https://vacation-api.netlify.app/.netlify/functions/api/plans/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPlan),
        }
      );
      const data = await response.json();
      setPlans(plans.map((plan) => (plan._id === id ? data : plan)));
    } catch (error) {
      console.error("Failed to update plan:", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      await fetch(
        `https://vacation-api.netlify.app/.netlify/functions/api/plans/${id}`,
        {
          method: "DELETE",
        }
      );
      setPlans(plans.filter((plan) => plan._id !== id));
    } catch (error) {
      console.error("Failed to delete plan:", error);
    }
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
