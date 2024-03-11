import PlanContext from "./PlanContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { plans } = useContext(PlanContext);

  return (
    <main className="p-4">
      <h1 className="text-center text-4xl font-bold my-6">
        Welcome to My Vacations
      </h1>
      <div className="flex justify-center gap-8 items-center">
        <img src="trip.jpg" className="max-w-[30%] rounded-lg shadow" />
        <div>
          <h3 className="text-center text-xl font-bold my-2">
            Keep track of your travel plans!
          </h3>
          <p>
            You can create, view, modify or delete your travel plans easily.
          </p>
          <p>Right now there are {plans.length} plans registered.</p>
          <p>
            Check them out or create new ones in the{" "}
            <Link
              to="/plans"
              className="font-semibold hover:text-sky-700 transition"
            >
              plans
            </Link>{" "}
            section.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
