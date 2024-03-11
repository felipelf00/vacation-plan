import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-end items-center gap-6 md:px-4">
      <Link to="/" className="font-semibold hover:text-sky-700 transition">
        Home
      </Link>
      <Link to="/plans" className="font-semibold hover:text-sky-700 transition">
        Plans
      </Link>
    </div>
  );
};

export default Navigation;
