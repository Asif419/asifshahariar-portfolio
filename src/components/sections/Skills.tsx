'use client'

import SkillsLanguages from "../ui/skillLanguages"
import SkillsBackend from "../ui/skillsBackend"
import SkillsFrontend from "../ui/skillsFrontend"


export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h2>
        <SkillsLanguages />
        <SkillsFrontend />
        <SkillsBackend />
      </div>
    </section>
  )
}