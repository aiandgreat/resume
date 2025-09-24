import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  function ContactSection() {
  return (
    <div className="bg-[#094d73]">
      <h2 className="text-2xl font-semibold bg-[#073e5c] text-white px-6 py-2">
        Contact
      </h2>
      <div className="space-y-3 text-sm text-white px-7 py-4 leading-relaxed">
        <div>
          <p className="font-bold">Address</p>
          <p>Purok 5 Guemasan, Arayat, Pampanga, Miranda Appartments</p>
        </div>
        <div>
          <p className="font-bold">Phone</p>
          <p>+639916157483</p>
        </div>
        <div>
          <p className="font-bold">E-mail</p>
          <p>ajsgarcia.student@ua.edu.ph</p>
        </div>
      </div>
    </div>
  );
}

  
  function ProfileSection() {
    return (
      <div className="bg-white pt-4 pl-6 pr-8">
        <p className="text-base leading-relaxed text-black-600">
          Experienced leader with background in leading teams and organizations. Proficiency in organizing projects and events, skilled paperwork management, strong and flexible communication, and efficiency in tracking organization goals. Adept in tracking project progress while maintaining competency and quality, and strong attention to detail. Flexibility when it comes to collaborative and individual work with a commitment to progress and success.
        </p>
      </div>
    );
  }


  function EducationSection() {
  return (
    <div className="bg-white pl-6 pr-8 pt-8">
      <div className="mb-6">
        <hr className="border-t-2 border-gray-300 mb-2" />
        <h2 className="text-2xl font-bold text-[#094d73]">Education</h2>
        <hr className="border-t-2 border-gray-300 mt-2" />
      </div>
      <div className="space-y-6">
        {/* Item 1 */}
        <div className="flex items-start gap-6">
          <div className="w-28 shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2 leading-relaxed">
              Bachelor of Science: Information Technology
            </h3>
            <p className="text-base text-[black] italic leading-relaxed mr-2">
              University of the Assumption - Unisite Subdivision, Del Pilar, San Fernando, Philippines
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-28 shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2 leading-relaxed">
              IT Specialist - Databases by Certiport
            </h3>
            <p className="text-base text-[black] italic leading-relaxed mr-2">
              University of the Assumption - Unisite Subdivision, Del Pilar, San Fernando, Philippines
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-28 shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2 leading-relaxed">
              CCNA: Introduction to Networks by Cisco Networking Academy
            </h3>
            <p className="text-base text-[black] italic leading-relaxed mr-2">
              University of the Assumption - Unisite Subdivision, Del Pilar, San Fernando, Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


 
  function ExperienceSection({ jobEntries }) {
  return (
    <div className="bg-white pl-6 pr-8 pt-8">
      <div className="mb-4">
        <hr className="border-t-2 border-gray-300 mb-2" />
        <h2 className="text-2xl font-bold text-[#094d73]">Experience</h2>
        <hr className="border-t-2 border-gray-300 mt-2" />
      </div>

      {/* Job Entries */}
      <div className="space-y-4">
        {jobEntries.map((job, index) => (
          <JobEntry key={index} job={job} />
        ))}
      </div>
    </div>
  );
}


function JobEntry({ job }) {
  return (
    <div className="flex items-start text-base gap-6">
      <div className="w-28 text-base text-gray-700 shrink-0 pr-6">
        {job.startDate} - {job.endDate}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-xl text-[#363636] mb-1 text-gray-900">{job.title}</h3>
        <p className="italic text-gray-700">{job.company}</p>
        <ul className="list-disc list-outside pl-4 mt-2 space-y-1 text-gray-700 text-base leading-relaxed">
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

 function SkillsSection({ skills }) {
  return (
    <div className="bg-[#094d73] pt-4">
      <h3 className="text-2xl font-semibold bg-[#073e5c] text-white px-6 py-2">
        Skills
      </h3>
      <ul className="list-disc list-outside pl-10 pr-6 py-4 space-y-3 leading-loose text-sm text-white">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}



const jobEntries = [
  {
    startDate: "2025",
    endDate: "Current",
    title: "President",
    company: "Student Society on Information Technology Education (SSITE) - UA Chapter",
    responsibilities: [
      "In-charge of overall decision making for the organization.",
      "Orient and train new officers on document writing and event preparations",
      "Come up with new events to engage students while promoting school core values",
    ],
  },
  {
    startDate: "2024",
    endDate: "2025",
    title: "Vice President - Internal Affairs",
    company:
      "Student Society on Information Technology Education (SSITE) - UA Chapter",
    responsibilities: [
      "Serve as a substitute in the absence of the president",
      "Monitor events and projects progress",
      "Assist the president in decision making",
    ],
  },
  {
    startDate: "2023",
    endDate: "2024",
    title: "1st Year Representative - Sports Coordinator",
    company:
      "Student Society on Information Technology Education (SSITE) - UA Chapter",
    responsibilities: [
      "In-charge of organizing and managing sports events",
      "Promotes sports related events to the other students",
      "Assist in overall planning and execution of general organization tasks",
    ],
  },
  
];

  const mySkills = [
    'Experience in project and organization leadership',
    'Strong FrontEnd Foundations (HTML, CSS, JavaScript)',
    'Strong Database Management Foundations (Microsoft MySQL, XAMPP)',
    'Strong Networking Fundamentals Foundation (CCNA: Introduction to Networks)',
    'Experience in using Git and GitHub',
    'Strong and flexibile communication skills during collaborative works'
  ];


  return (
    <div className="font-['Century_Gothic',_sans-serif] bg-gray-100 min-h-screen">
      <style>{`
          font-family: 'Century Gothic', sans-serif;
        }
      `}</style>
      <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden my-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <aside className="sm:col-span-1 bg-[#094d73]">
            <header className="flex flex-col items-left px-6 bg-[#094d73] text-black">
              <div className="flex flex-col bg-[#094d73]">
                <div className="w-[250px] h-[250px] overflow-hidden mx-auto mt-4 flex items-center justify-center">
                  <img
                    src="https://i.ibb.co/1fqQPLbj/profile-min.png"
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="mt-1 mb-8">
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    Aian Jae
                  </h1>
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    Garcia
                  </h1>
                </div>
              </div>
            </header>
            <ContactSection />
            <SkillsSection skills={mySkills} />
          </aside>
          <main className="sm:col-span-2 bg-white">
            <ProfileSection />
            <EducationSection />
            <ExperienceSection jobEntries={jobEntries} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
