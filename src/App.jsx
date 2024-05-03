import reactImage from "./assets/react.png"
import tailwindImage from "./assets/tailwind.png"
import uiUxImage from "./assets/UIUX.png"

function App() {
  return (
    <>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a href="#" className="font-bold text-2xl lg:text-4xl">
            Frontend Practice
          </a>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li><a href="/" className="px-4 font-bold">Home</a></li>
              <li><a href="#" className="px-4 hover:text-gray-800">About</a></li>
              <li><a href="#" className="px-4 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-20" style={{ background: 'linear-gradient(90deg, #321CAB 0%, #4FD9DC 100%)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Hire a Dedicated Developer!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            I am constantly practicing, reiterating and improving my skillset whenever I have time and in any way possible. Frequently when I'm spending time with my family I have some docs pulled up on my phone for light reading.
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            See Resume
          </button>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Skills Being Improved
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              React
              </h4>
            <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={reactImage} alt="react picture" />
          </div>
        </div>


        <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <img src={tailwindImage} alt="tailwind" />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Tailwind CSS</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              UI/UX Design
              </h4>
            <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={uiUxImage} alt="UI picture" />
          </div>
        </div>

      </section>
    </>
  );
}

export default App;
