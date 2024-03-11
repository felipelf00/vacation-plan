import PropTypes from "prop-types";

const Plan = ({ plan }) => {
  return (
    <>
      <p>
        <strong>Title:</strong> {plan.title}
      </p>
      <p>
        <strong>Description:</strong> {plan.description}
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
    </>
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
