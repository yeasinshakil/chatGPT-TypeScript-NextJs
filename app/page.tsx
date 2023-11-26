import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-white px-2 h-full min-h-screen">
      <h1 className=" text-3xl sm:text-5xl font-bold mb-20 mt-20 sm:mt-0">
        ChatGPT
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 space-x-2 text-center">
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <SunIcon className=" h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of Sun?"</p>
          </div>
        </div>
        {/* 2nd */}
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <BoltIcon className=" h-8 w-8" />
            <h2>Capabelities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of Sun?"</p>
          </div>
        </div>
        {/* 3rd */}
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <ExclamationTriangleIcon className=" h-8 w-8" />
            <h2>Limititios</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of Sun?"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
