import React, { useState } from "react";
import Imageplaceholder from "../../../assets/images/placeholderImage.svg"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Events = () => {
      const [forward, setForward] = useState()


  const scrollContainer = (forward) => {
    forward = setForward(true)
  }

  const programs = [
   {
    icon: Imageplaceholder,
    title: "Summer Camp",
    pill: "Camp",
    location: "Location",
    subtitle:
      "Dive into faith and fun at our Summer Camp this February!",
    eventClick:
    "View event  >"
  },
   {
    icon: Imageplaceholder,
    title: "Bible Study",
    pill: "Study",
    location: "Location",
    subtitle:
      "Join our Bible Study for deep discussions and community bonding.",
    eventClick:
    "View event  >"
  },
   {
    icon: Imageplaceholder,
    title: "Outreach Project",
    pill: "Project",
    location: "Location",
    subtitle:
      "Participate in our Outreach Project to make a difference in the community.",
    eventClick:
    "View event  >"
  },
   {
    icon: Imageplaceholder,
    title: "Prayer Time",
    pill: "Prayer",
    location: "Location",
    subtitle:
      "We gather as one to pray to our one and only Father",
    eventClick:
    "View event  >"
  },
   {
    icon: Imageplaceholder,
    title: "Outreach Project",
    pill: "Project",
    location: "location",
    subtitle:
      "Participate in our Outreach Project to make a difference in the community.",
    eventClick:
    "View event  >"
  },
   {
    icon: Imageplaceholder,
    title: "Outreach Project",
    pill: "Project",
    location: "location",
    subtitle:
      "Participate in our Outreach Project to make a difference in the community.",
    eventClick:
    "View event  >"
  },
]

  return (
    <div>
         {/* Section 5 */}
        <section className="lg:m-24 m-5">
        <div>
            <h1 className="mb-8">Events</h1>
            <h1 className="text-3xl font-medium mb-4">Upcomings</h1>
            <p className="mb-8">Join us for an exciting summer experience!</p>
          </div>
          <div onScroll={scrollContainer}>
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
             <div className="flex gap-6 min-w-max ">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#F9F9F9] rounded-xl shadow p-6 w-80 "
          >
            <img
              src={program.icon}
              alt={program.title}
              className="size-32 md:size-40 lg:size-48 object-contain mx-auto mb-4"
            />
            <button className="rounded-full py-2 px-3 bg-slate-200 mb-4">{program.pill}</button>
            <h3 className="mb-4 text-lg font-medium">{program.title}</h3>
            <p>{program.location}</p>
            <p className="text-sm mb-4 lg:text-base  text-gray-700 mt-2">
              {program.subtitle}
            </p>
            <p className="text-sm mb-4 lg:text-base  text-gray-500 mt-2">
              {program.description}
            </p>
            <button>{program.eventClick}</button>
          </div>
        ))}
      </div>
          </div>
            
          </div>
          <div className="flex gap-2 justify-end mt-8">
            <button
             className="bg-gray-300 p-4 rounded-full"><FaArrowLeft /></button>
            <button 
            onClick={() => setForward()}
            value={forward}
            className=" bg-gray-300 p-4 rounded-full"><FaArrowRight /></button>
          </div>
        </section>
    </div>
  )
}

export default Events
