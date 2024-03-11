import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Plan = ({ plan }) => {
  return (
    <div className="mx-auto max-w-xl">
      <div>
        <Link to={`/edit/${plan.id}`}>Edit</Link>
        <Link to={`/delete/${plan.id}`}>Delete</Link>
      </div>
      <p>
        <strong>Title:</strong> {plan.title}
      </p>
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
