'use client'

import SkillsLanguages from "../ui/skillsLanguages"
import SkillsBackend from "../ui/skillsBackend"
import SkillsDB from "../ui/skillsDB"
import SkillsFrontend from "../ui/skillsFrontend"
import SkillsTools from "../ui/skillstools"


export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h2>
        <SkillsLanguages />
        <SkillsFrontend />
        <SkillsBackend />
        <SkillsDB />
        <SkillsTools />
      </div>
    </section>
  )
}