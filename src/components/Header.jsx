import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="Xflex Xjustify-between grid grid-cols-2 md:grid-cols-3 p-4 shadow-md">
      <div className="flex items-center gap-2 md:col-start-2 md:justify-center">
        <img src="/vacation.png" className="max-h-10" />
        <span className="font-semibold">My Vacation</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
