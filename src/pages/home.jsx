import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-6xl mt-6 justify-center flex animate-pulse">
          Welcome to Seattle Homepage
        </h1>
      </div>
      <div className="min-h-[calc(100vh-96px)] flex flex-col justify-center items-center">
        <img
          src="https://media.licdn.com/dms/image/D5610AQFYp1K7Csvwag/image-shrink_800/0/1693447203658?e=2147483647&v=beta&t=4oizXyFy5Jh6jEmmCjgRy1IwhBYiUwlAGwB2NbfBidI"
          alt="heroImage"
          className="-mt-20 h-100 w-100 bg-no-repeat bg-cover bg-center rounded-xl"
        />
        <button className="bg-slate-400 hover:bg-blue-400 p-3 mt-6 w-20 rounded-lg ">
          Login
        </button>
        <div className="flex items-center mt-4 space-x-4">
          <a
            href="/login"
            className="text-blue-500 underline hover:text-blue-950 hover:text-lg transition duration-500"
          >
            Sign up
          </a>
          <a
            href="/pw"
            className="text-blue-500 underline hover:text-blue-950 hover:text-lg transition duration-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
