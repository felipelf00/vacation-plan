import PlanContext from "./PlanContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const { plans, createPlan, updatePlan } = useContext(PlanContext);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");

  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [participantsError, setParticipantsError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const validateForm = () => {
    let isValid = true;

    // Validate title
    if (!title) {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    // Description is not required, but if present must be at least 3 characters long
    if (description && description.length < 3) {
      setDescriptionError("Description must be at least 3 characters long");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    // Dates are not required, but if present, endDate should be after start date
    if (startDate && endDate && startDate > endDate) {
      setDateError("Vacation must start before it ends");
      isValid = false;
    } else {
      setDateError("");
    }

    // Location is not required, but if present must be at least 3 characters long
    if (location && location.length < 3) {
      setLocationError("Location must be at least 3 characters long");
      isValid = false;
    } else {
      setLocationError("");
    }

    // Participants is not required, but if present must be at least 3 characters long
    if (participants && participants.length < 3) {
      setParticipantsError("Participants must be at least 3 characters long");
      isValid = false;
    } else {
      setParticipantsError("");
    }

    return isValid;
  };

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const plan = plans.find((element) => element.id === +id);

      if (plan) {
        setTitle(plan.title);
        setStartDate(plan.startDate);
        setEndDate(plan.endDate);
        setLocation(plan.location);
        setParticipants(plan.participants);
        setDescription(plan.description);
      }
    }
  }, [id, plans]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      updatePlan(id, {
        id: parseInt(id),
        title,
        startDate,
        endDate,
        location,
        participants,
        description,
      });
    } else {
      createPlan({
        id: plans.length,
        title,
        description,
        startDate,
        endDate,
        location,
        participants,
      });
    }
    navigate("/plans");
  };

  return (
    <main className="p-4">
      <h3 className="text-center text-2xl font-semibold my-4">
        {id ? "Edit plan" : "New Plan"}
      </h3>
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
            required
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
