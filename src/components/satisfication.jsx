import React from 'react'

const satisfication = () => {
  return (
    <div>
              {/* Core Values Section */}
              <section className="core-values bg-white-1 py-10 bottom-9">
              <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Our Core Values <hr className="bold m-2 gap-5" /></h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10  ">
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110 ">
                          <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
                          <p className="text-lg">Our rapid response team is ready to spring into action during emergencies such as natural disasters or accidents involving animals.</p>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110">
                          <h3 className="text-xl font-bold mb-2">Shelter and Care</h3>
                          <p className="text-lg">Providing a safe haven for animals in need, we offer temporary shelter, nutritious food, and essential medical attention.</p>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110">
                          <h3 className="text-xl font-bold mb-2">Adoption Services</h3>
                          <p className="text-lg">Facilitating the adoption process for domestic animals, we match pets with loving and suitable adoptive families.</p>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110">
                          <h3 className="text-xl font-bold mb-2">Wildlife Rehabilitation</h3>
                          <p className="text-lg">Specializing in wildlife rehabilitation, we provide critical care to injured or orphaned wild animals..</p>
                      </div><div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110">
                          <h3 className="text-xl font-bold mb-2">Funding and Support</h3>
                          <p className="text-lg">As a nonprofit organization, we rely on the generosity of donors, grants, and volunteer support to sustain our operations.</p>
                      </div><div className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 transform hover:scale-110">
                          <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                          <p className="text-lg">nimals in distress can't wait, which is why our services are available round the clock.</p>
                      </div>
                  </div>

              </div>
          </section>
          
    </div>
  )
}

export default satisfication
