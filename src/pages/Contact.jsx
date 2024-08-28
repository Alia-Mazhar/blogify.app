import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto my-8 p-4">
      <div className="bg-gradient-to-br from-[#150833] to-[#3D207F] shadow-[#b3aaff] rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl text-[#ebe6f8] font-bold mb-4">Contact Us</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {/* <h2 className="text-xl text-[#ebe6f8] font-semibold mb-2">Contact Form</h2> */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#ebe6f8]">Name</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#2a9792e0]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#ebe6f8]">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#b3aaff]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#ebe6f8]">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#b3aaff]"></textarea>
                </div>
                <button type="submit" className="bg-[#ffffffd8] inline-block px-4 py-2 font-semibold text-[#13072E] rounded-md hover:bg-[#ffffffd8] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow shadow-white">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="text-xl text-[#ebe6f8] font-semibold mb-2">Contact Information</h2>
              <p className="text-[#ebe6f8] mb-4">Feel free to reach out to us using the contact information below:</p>
              <ul className="text-[#ebe6f8]">
                <li>Email: info@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Main Street, City, Country</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
