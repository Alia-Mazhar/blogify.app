import React from 'react'

function About() {
  return (
    <div className="container mx-auto my-8 p-4">
      <div className="bg-gradient-to-br from-[#150833] to-[#3D207F] shadow-[#b3aaff] rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl text-center text-[#ebe6f8] font-bold mb-4">About Us</h1>
          <p className="text-[#ebe6f8] mb-4">
            Welcome to our Blogify App! We are passionate about sharing valuable knowledge and insights through our blog posts. Our goal is to provide a platform where readers can find informative and engaging content on a variety of topics.
          </p>
          <h2 className="text-2xl text-[#ebe6f8] font-semibold mb-4">Our Mission</h2>
          <p className="text-[#ebe6f8] mb-4">
            Our mission is to create a community of readers and writers who are enthusiastic about learning and sharing information. We believe in the power of knowledge and strive to deliver high-quality content that can inspire, educate, and entertain our audience.
          </p>
          <h2 className="text-2xl text-[#ebe6f8] font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-[#ebe6f8] mb-4">
            <li>In-depth tutorials on various programming languages and frameworks.</li>
            <li>Insights and tips on UI/UX design and development tools.</li>
            <li>Comprehensive guides on trending technologies and industry best practices.</li>
            <li>Personal stories and experiences from experts in the field.</li>
          </ul>
          <h2 className="text-2xl text-[#ebe6f8] font-semibold mb-4">Our Team</h2>
          <p className="text-[#ebe6f8] mb-4">
            We are a team of dedicated writers, developers, and designers who are committed to delivering valuable content to our readers. Our diverse backgrounds and expertise allow us to cover a wide range of topics and provide unique perspectives on the subjects we write about.
          </p>
          <h2 className="text-2xl text-[#ebe6f8] font-semibold mb-4">Get In Touch</h2>
          <p className="text-[#ebe6f8]">
            If you have any questions, feedback, or suggestions, feel free to reach out to us. We would love to hear from you and are always looking for ways to improve our content and platform. Thank you for visiting our BlogPost App, and we hope you enjoy reading our posts!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
