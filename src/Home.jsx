import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-5 items-center h-[100vh] bg-gradient-to-r to-emerald-300 from-sky-100 ">
      <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          To-Do{" "}
        </span>
        List
      </h1>
      <p className="text-lg text-center font-semibold text-gray-800 lg:text-xl">
        This is your daily task manager App. You can add your tasks and track
        them.
      </p>

      <Link to="/header">
        <button className=" bg-gradient-to-r to-emerald-600 from-sky-400 p-3 px-7 rounded-xl ">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Home;
