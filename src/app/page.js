'use client';

import React from 'react';
import { Mail, Github, Linkedin, Youtube, MapPin, ExternalLink, Code } from 'lucide-react';

// --- 学术主页数据配置 ---

const PROFILE = {
  name: "Seigenkouso Lun",
  title: "Student",
  university: "Fudan University",
  department: "College of Future Information Technology",
  avatar: "/avatar.jpg", 
  bio: (
    <>
      <p className="mb-4">
        I'm an undergrad student in <strong>College of Future Information Technology, Fudan University</strong>. 
        Now I'm under the supervision of <a href="http://www.it.fudan.edu.cn/En/Data/View/1159" className="text-blue-700 hover:underline">Prof. Chongbin Xu</a>.
      </p>
      <p>
        My research interests are mainly about <strong>telecommunication engineering</strong>, <strong>machine learning</strong>, and <strong>medical image computing</strong>.
      </p>
    </>
  ),
  contact: {
    email: "seeseaamoi@gmail.com", 
    github: "https://github.com/seigenkouso",
    linkedin: "https://www.linkedin.com/in/amoi-seesea-31a738397/",
    location: "Shanghai, China"
  }
};

const NEWS = [
  /*{ date: "Jan 26, 2026", content: <>Developed a budgeting app – <i>Manage Your Bills</i></> },
  { date: "Jan 11, 2026", content: "First version of personal homepage launched." }*/
];

// --- 新增：Projects 数据 ---
const PROJECTS = [
  {
    title: "ManageYourBills",
    type: "Android Application",
    tech: ["Kotlin", "Jetpack Compose", "AI Image Recognition"],
    desc: "A personal financial management application that utilizes AI to recognize and categorize expenses from receipt images.",
    link: "https://github.com/seigenkouso/ManageYourBills"
  },

  {
    title: "Ichininsho",
    type: "Productivity Tool",
    tech: ["Android SDK", "Kotlin", "Sensors"],
    desc: "An Android productivity app featuring a Pomodoro timer and sensor-based monitoring to enhance focus and efficiency.",
    link: "#"
  }
];

const INTERNSHIPS = [
  /*{
    company: "Microsoft Research Asia (MSRA)",
    position: "Research Intern",
    location: "Beijing, China",
    time: "Oct. 2025 – Present",
    desc: "Working on foundation models for healthcare."
  }*/
];

const AWARDS = [
  /*"National Scholarship (Top 0.2%), 2025",
  "First Prize, National Undergraduate Electronics Design Contest, 2024"*/
];

// --- 组件 ---

export default function AcademicHomepage() {
  return (
    <div 
      className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900"
      style={{ fontFamily: '"MyLocalFont", Meiryo, "Meiryo UI", "Segoe UI", Roboto, sans-serif' }}
    >
      
      <style>{`
        @font-face {
          font-family: 'MyLocalFont';
          src: url('/font.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* --- Bio Section --- */}
        <section id="home" className="grid md:grid-cols-[240px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="w-48 h-48 md:w-full md:h-auto aspect-square bg-slate-50 rounded-sm overflow-hidden border border-slate-100 shadow-sm mx-auto md:mx-0">
               <img src={PROFILE.avatar} alt={PROFILE.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-blue-700">{PROFILE.contact.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} />
                <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700">LinkedIn</a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} />
                <a href={PROFILE.contact.github} target="_blank" className="hover:text-blue-700">Github</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>{PROFILE.contact.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{PROFILE.name}</h1>
            <p className="text-lg text-slate-500 mb-6 font-medium">{PROFILE.title}</p>
            <div className="text-slate-700 leading-relaxed text-lg space-y-4 border-t border-slate-100 pt-6">
              {PROFILE.bio}
            </div>
          </div>
        </section>

        {/* --- News Section --- */}
        <section id="news">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">News</h2>
          <div className="space-y-6">
            {NEWS.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:gap-8">
                <span className="text-slate-400 font-mono text-sm sm:w-28 flex-shrink-0 pt-1">{item.date}</span>
                <span className="text-slate-700">{item.content}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Selected Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div key={index} className="p-6 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-sm text-blue-700 font-medium mb-2">{project.type}</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-500 text-xs rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Internship & Awards --- */}
        <div className="grid md:grid-cols-2 gap-16">
          <section id="internship">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Internship</h2>
            <div className="space-y-8">
              {INTERNSHIPS.map((job, index) => (
                <div key={index}>
                  <h3 className="font-bold text-slate-900">{job.company}</h3>
                  <p className="text-sm text-slate-500 mb-2">{job.position} | {job.time}</p>
                  <p className="text-slate-600 text-sm">{job.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="awards">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Awards</h2>
            <ul className="list-disc list-outside ml-4 space-y-4 text-slate-700 text-sm">
              {AWARDS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}