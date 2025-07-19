import placeholder from "../../../assets/images/placeholderImage.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Leadership = () => {
  const socialMedia = [<FaLinkedin />, <FaXTwitter />, <FaInstagram />];

  const individuals = [
    {
      image: placeholder,
      name: "John Doe",
      title: "Youth Leader",
      text: "Inspiring teens to explore their faith and build lasting friendships.",
      media: socialMedia,
    },
    {
      image: placeholder,
      name: "Jane Smith",
      title: "Event Coordinator",
      text: "Organizing engaging events that foster community and spiritual growth.",
      media: socialMedia,
    },
    {
      image: placeholder,
      name: "Mike Johnson",
      title: "Outreach Director",
      text: "Connecting with the community through service and outreach initiatives.",
      media: socialMedia,
    },
    {
      image: placeholder,
      name: "Sarah Lee",
      title: "Worship Leader",
      text: "Leading worship to create an atmosphere of praise and connection.",
      media: socialMedia,
    },
    {
      image: placeholder,
      name: "Emily Brown",
      title: "Media Specialist",
      text: "Crafting engaging content to share our message and events.",
      media: socialMedia,
    },
    {
      image: placeholder,
      name: "Micheal Johnson",
      title: "Design Expert",
      text: "Explore exciting opportunities to make a difference in our community.",
      media: socialMedia,
    },
  ];
  return (
    <div>
      {/* Section 3 */}
      <section className="bg-white">
        <div className="text-left lg:text-center ml-5 lg:ml-2 mt-12">
          <h1 className="font-bold text-3xl">Our Leadership</h1>
          <p>Meet the Passionate individuals shapping harvest house</p>
        </div>
        <div className="m-24 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {individuals.map((item, idx) => (
            <div key={idx} className="">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-lg"
                ></img>
              </div>
              <div className="text-center">
                <h1 className="font-bold">{item.name}</h1>
                <h2 className="mb-5">{item.title}</h2>
                <p className="text-sm mb-5">{item.text}</p>
                <div className="flex justify-center gap-5">{item.media}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leadership;
