import SpeakerForm from "./SpeakerForm";

const Events = () => {
  return (
    <div className="flex flex-col items-start text-white border-2 bg-gradient-to-tr from-teal-600 to-indigo-900 border-blue-400 p-10 rounded-xl 2xl:w-[1120px] min-[360px]:w-[300px] md:w-[600px] ">
      <form action="" className="flex flex-col items-start  gap-10">
        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor=""
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Session Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor=""
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Date :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor=""
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Venue :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor=""
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Attendees Count:
          </label>
          <input
            type="number"
            name="attendees"
            id="attendees"
            placeholder="Attendees"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor=""
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Youtube Link:
          </label>
          <input
            type="text"
            name="ylink"
            id="ylink"
            placeholder="Youtube Link"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <SpeakerForm />
      </form>
    </div>
  );
};

export default Events;
