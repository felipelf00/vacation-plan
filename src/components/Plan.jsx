import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

const Plan = ({ plan }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto max-w-xl my-4">
      <div className="flex justify-between items-center my-4">
        <span className="w-[75px] text-left">
          <span
            onClick={handleClick}
            className={
              "material-symbols-outlined transition hover:text-sky-700 cursor-pointer " +
              (isOpen ? "rotate-180" : "")
            }
          >
            expand_more
          </span>
        </span>
        <span
          onClick={handleClick}
          className="font-bold text-xl cursor-pointer hover:text-sky-700 transition"
        >
          {plan.title}
        </span>
        <div className="w-[75px] flex items-center">
          <Link
            to={`/edit/${plan.id}`}
            className="material-symbols-outlined hover:text-sky-700 transition"
          >
            edit
          </Link>
          <Link
            to={`/delete/${plan.id}`}
            className="material-symbols-outlined hover:text-sky-700 transition"
          >
            delete
          </Link>
          <Link
            to={`/delete/${plan.id}`}
            className="material-symbols-outlined hover:text-sky-700 transition"
          >
            print
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:mx-12">
          <p>
            <strong>From:</strong> {plan.startDate}
          </p>
          <p>
            <strong>Until:</strong> {plan.endDate}
          </p>
          <p>
            <strong>Location:</strong> {plan.location}
          </p>
          <p>
            <strong>Participants:</strong> {plan.participants}
          </p>
          <p>
            <strong>Description:</strong>
          </p>
          <p>{plan.description}</p>
        </div>
      )}
    </div>
  );
};

Plan.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    participants: PropTypes.string.isRequired,
  }).isRequired,
};

export default Plan;
