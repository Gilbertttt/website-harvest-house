import React from 'react'

const Activities = () => {
     const services = [
        {
          title: "Sunday Service: A Time for Worship",
          description: "Join us every Sunday to connect with God and each other.",
          icon: "🔳"
        },
        {
          title: "Bible Study: Deepen Your Understanding of Faith",
          description: "Engage in meaningful discussions and learn together.",
          icon: "🔳"
        },
        {
          title: "Outreach Projects: Serving Our Community Together",
          description: "Make a difference by participating in our outreach efforts.",
          icon: "🔳"
        },
        {
          title: "Outreach Projects: Serving Our Community Together",
          description: "Make a difference by participating in our outreach efforts.",
          icon: "🔳"
        },
        {
          title: "Outreach Projects: Serving Our Community Together",
          description: "Make a difference by participating in our outreach efforts.",
          icon: "🔳"
        },
        {
          title: "Outreach Projects: Serving Our Community Together",
          description: "Make a difference by participating in our outreach efforts.",
          icon: "🔳"
        },
       
      ];
    
  return (
    <div>
        {/* Section 4 */}
        <section className=" mt-40 ">
        <div className="lg:me-24 lg:mx-24 lg:grid grid-cols-2">
        <div className="p-4">
             <h1 className="mb-8">Activities</h1>
          <h1 className="text-3xl">Explort Our Vibrant Church Activities </h1>
        </div>
       <div className="p-4">
        <p className="text-[15px]">At Harvest House, we offer a variety of engaging activities designed to foster faith and community among our teens. From our uplifting Sunday Services to insightful Bible Studies, there's something for everyone. Join us in our Outreach Projects and Annual Summer Camp for unforgettable experiences!</p>
       </div>
        </div>
           <div className="lg:me-24 lg:mx-24 lg:m-2 m-5 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-xl shadow-xl hover:shadow-md inset-shadow-2xs transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        </section>
    </div>
  )
}

export default Activities
