import image from "../../assets/images/Image.jpg";
import AboutUs from "./components/about-us";
import Leadership from "./components/leadership";
import Activities from "./components/activities";
import Events from "./components/events";
import Contact from "./components/contact";
const Home = () => {

  return (
    <div>
      <div>
        {/* Home */}
        <section
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
          className="items-center justify-center bg-cover bg-no-repeat h-screen"
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-25 z-10 h-screen" /> */}

          <div className="flex flex-col items-center justify-center absolute inset-0 z-10 text-white text-left lg:text-center ml-5 lg:ml-0">
            <h1 className="text-4xl mb-4">
              Welcome to Harvest House Teens <span className="md:block">Church</span>
            </h1>
            <p className="mb-4">
              A place where faith, community, and purpose come together. Join us
              as we embark on a <span className="md:block"> journey of spiritual growth and
              connection.</span>
            </p>
            <div className="flex gap-4">
              <button className="py-2 px-4 rounded-full bg-transparent border border-white hover:bg-white hover:text-black">
                Join
              </button>
              <button className="py-2 px-4 rounded-full bg-transparent border border-white hover:bg-white hover:text-black">
                Event
              </button>
            </div>
          </div>
        </section>
       <AboutUs/>
      <Leadership/>
      <Activities/>
      <Events />
      <Contact/>
      </div>
    </div>
  );
};

export default Home;


 