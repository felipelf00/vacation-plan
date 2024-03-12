import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between md:grid md:grid-cols-3 p-4 shadow-md">
      <div className="flex items-center gap-2 md:col-start-2 md:justify-center">
        <img src="/vacation.png" className="max-h-10" />
        <span className="font-black md:text-xl">My Holidays</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
