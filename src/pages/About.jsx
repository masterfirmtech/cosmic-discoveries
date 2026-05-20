function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">About Us</h1>
      
      <div className="bg-gray-800 rounded-2xl p-10 space-y-8">
        <p className="text-lg leading-relaxed text-gray-200">
          This Astronomy Education Platform is a student group project designed to provide 
          an interactive and engaging way to learn about the universe, planets, constellations, 
          and space exploration.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">DANIEL PREYE AKINBOWALE</h3>
            <p className="text-blue-400">Student1714422 - SPA Architecture & Navigation</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">FAVOUR LEESI SAAYOR</h3>
            <p className="text-blue-400">Student1718074 - Data & Content Logic</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">PROSPER SOLOMON IFEANYIBEMA</h3>
            <p className="text-blue-400">Student1724042 - UI/UX & Component</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">MARK CHIDI IGWUOKU</h3>
            <p className="text-blue-400">Student1724210 - Integration, APIs & Documentation</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Project Objectives</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>Provide interactive learning experience about Astronomy</li>
          <li>Display real astronomical data and locations</li>
          <li>Implement modern web technologies (React, Maps, etc.)</li>
          <li>Demonstrate teamwork and role-based development</li>
        </ul>
      </div>
    </div>
  );
}

export default About;