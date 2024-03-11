import PlanContext from "./PlanContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { plans, createPlan, updatePlan, deletePlan } = useContext(PlanContext);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    createPlan({
      id: plans.length,
      title,
      description,
      startDate,
      endDate,
      location,
      participants,
    });
    // Reset the form fields after submission
    // setTitle("");
    // setDescription("");
    // setStartDate("");
    // setEndDate("");
    // setLocation("");
    // setParticipants("");
    navigate("/plans");
  };

  return (
    <main className="p-4">
      <h3 className="text-center text-2xl font-semibold my-4">New plan</h3>
      <form className="mx-auto max-w-md p-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="start">
            Starting date:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            type="date"
            name="start"
            id="start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="end">
            Ending date:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            type="date"
            name="end"
            id="end"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="participants"
          >
            Participants:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            type="text"
            name="participants"
            id="participants"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Form;
