import React from 'react'
import aboutImage from "../../../assets/images/aboutImage.jpg"

const AboutUs = () => {
  return (
    <div>
        <section className="bg-[#0A3D23] text-white h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl gap-16 mx-auto px-4">
        <div className="md:flex-1 text-left">
          <h2 className="font-medium text-3xl mb-4">Discover the Heart of Harvest House Teens Church</h2>
          <p>At Harvest House, we empower teenagers to grow in faith, build <span className='md:block'>community, and discover their purpose. Located at RCCG Redemption </span>Camp, we invite you to join us on this transformative journey.</p>
        </div>
        <div className="md:flex-1 ">
          <img src={aboutImage} alt="About-us-image" className="h-[300px] md:h-[500px] w-full  rounded-lg object-cover">
          </img>
        </div>
        </div>
        </section>
    </div>
  )
}

export default AboutUs
