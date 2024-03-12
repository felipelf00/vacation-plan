const NotFound = () => {
  return (
    <main className="p-4">
      <h3 className="text-center text-2xl font-extrabold my-4">
        404 - Page not found
      </h3>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <img
        src="https://http.cat/images/404.jpg"
        className="max-w-96 mx-auto my-6"
      />
    </main>
  );
};

export default NotFound;
