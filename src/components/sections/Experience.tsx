'use client'

import { useState } from 'react';

type Job = {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const jobs: Record<string, Job> = {
  'software-engineer': {
    title: 'Software Engineer',
    company: 'ULTRA-X BD',
    date: 'Jun 2021 – Dec 2021',
    description: [
      'Built full-stack web apps with React.js and Node.js',
      'Used MongoDB for scalable db management',
      'Designed and consumed RESTful APIs',
    ],
  },
  'ta-student-prefect': {
    title: 'Teaching Assistant & Student Prefect',
    company: 'Daffodil International University',
    date: '2020 – 2022',
    description: [
      'Guided students in Microprocessor and Fundamentals labs',
      'Supported faculty in lecture sessions and lab assessments',
    ],
  },
  'ceo-youtube': {
    title: 'CEO of YouTube Channel',
    company: 'Data Will Alive',
    date: '2019 – Present',
    description: [
      'Handled video editing, content creation, and audience engagement',
      'Grew the channel to 35K subscribers with educational content',
      'Created and managed a YouTube channel focused on Data',
    ],
  },
};

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState<'software-engineer' | 'ta-student-prefect' | 'ceo-youtube'>('software-engineer');
  const [hoverSoftwareEngineer, setSoftwareEngineer] = useState(true);
  const [hoverTeachingAssistant, setTeachingAssistant] = useState(false);
  const [hoverContentCreator, setContentCreator] = useState(false);

  return (
    <section id="experience" className="w-full py-20 px-6 bg-white text-center scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side (Designation) */}
          <div className="md:w-1/3 flex flex-col items-center md:gap-0.5">
            <div
              className="space-y-2 md:space-y-4 cursor-pointer px-4 py-2 transition-all hover:text-lg"
              onMouseEnter={() => {
                setSelectedJob('ta-student-prefect');
                setSoftwareEngineer(false);
                setTeachingAssistant(true);
                setContentCreator(false);
              }}
              onClick={() => {
                setSelectedJob('ta-student-prefect')
                setSoftwareEngineer(false);
                setTeachingAssistant(true);
                setContentCreator(false);
              }}
            >
              <p className={`font-semibold text-gray-800 py-2 px-4 border-2 border-gray-100 rounded-full hover:border-gray-300 hover:text-2xl transition-all duration-500 ease-in-out ${hoverTeachingAssistant ? "border-gray-300 text-2xl text-blue-600" : 'text-xl'
                }`}>Teaching Assitant</p>
            </div>
            <div
              className={`space-y-4 cursor-pointer px-4 py-2 transition-all hover:text-lg`}
              onMouseEnter={() => {
                setSelectedJob('software-engineer');
                setSoftwareEngineer(true);
                setTeachingAssistant(false);
                setContentCreator(false);
              }}
              onClick={() => {
                setSelectedJob('software-engineer');
                setSoftwareEngineer(true);
                setTeachingAssistant(false);
                setContentCreator(false);
              }}
            >
              <p className={`font-semibold text-gray-800 py-2 px-4 border-2 border-gray-100 rounded-full hover:border-gray-300 hover:text-2xl transition-all duration-500 ease-in-out ${hoverSoftwareEngineer ? "border-gray-300 text-2xl text-blue-600" : 'text-xl'
                }`}>Software Engineer</p>
            </div>
            <div
              className="space-y-4 cursor-pointer px-4 py-2 transition-all hover:text-lg"
              onMouseEnter={() => {
                setSelectedJob('ceo-youtube');
                setTeachingAssistant(false);
                setSoftwareEngineer(false);
                setContentCreator(true);
              }}
              onClick={() => {
                setSelectedJob('ceo-youtube')
                setTeachingAssistant(false);
                setSoftwareEngineer(false);
                setContentCreator(true);
              }}
            >
              <p className={`font-semibold text-gray-800 py-2 px-4 border-2 border-gray-100 rounded-full hover:border-gray-300 hover:text-2xl transition-all duration-500 ease-in-out ${hoverContentCreator ? "border-gray-300 text-2xl" : 'text-xl'
                }`}>Content Creator</p>
            </div>
          </div>

          {/* Right Side (Details of Job) */}
          <div className="md:w-2/3 flex items-center justify-center transition-all duration-500 ease-in-out">
            <div className="border-t-4 md:border-l-4 border-gray-600 pl-4 bg-white p-6 rounded-md shadow-md w-full max-w-lg">
              <h3 className="text-xl font-semibold text-gray-800">{jobs[selectedJob].title}</h3>
              <p className="text-gray-600">{jobs[selectedJob].company}</p>
              <p className="text-sm text-gray-500">{jobs[selectedJob].date}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 text-sm space-y-1">
                {jobs[selectedJob].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}