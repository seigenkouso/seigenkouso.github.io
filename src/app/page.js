'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Youtube, MapPin, Menu, X } from 'lucide-react';

// --- 学术主页数据配置 ---

const PROFILE = {
  name: "Lun Tian",
  title: "Undergraduate Student",
  university: "Fudan University",
  department: "College of Future Information Technology",
  // 1. 这里修改为你的文件名，不需要加 /public
  avatar: "/avatar.jpg", 
  bio: (
    <>
      <p className="mb-4">
        I'm an undergrad student in <strong>College of Future Information Technology, Fudan University</strong>. 
        Now I'm under the supervision of <a href="http://www.it.fudan.edu.cn/Data/View/1159" className="text-blue-700 hover:underline">Prof. Chongbin Xu</a>.
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
    youtube: "https://www.youtube.com/@seigenkouso",
    location: "Shanghai, China"
  }
};

const NEWS = [
  { date: "Jan 11, 2026", content: "First time building my personal homepage." }
];

// --- Publications 数据 (模块保留，内容暂时注释) ---
const PUBLICATIONS = [
  /*
  {
    id: 1,
    title: "Deep Learning for Wireless Channel Estimation in High-Speed Railway Scenarios",
    authors: "Lun Tian, Chongbin Xu, et al.",
    venue: "IEEE Transactions on Wireless Communications (TWC), 2025",
    tags: ["Telecommunication", "Deep Learning"],
    links: [
      { name: "Paper", url: "#" },
      { name: "Code", url: "#" },
    ]
  },
  {
    id: 2,
    title: "Cross-Modality Medical Image Segmentation with Transformer",
    authors: "Lun Tian*, Collaborator Name*, Chongbin Xu",
    venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI), 2024",
    note: "(Oral Presentation)",
    tags: ["Medical Image", "Transformer"],
    links: [
      { name: "Paper", url: "#" },
      { name: "Project Page", url: "#" }
    ]
  }
  */
];

const INTERNSHIPS = [
  /*
  {
    company: "Microsoft Research Asia (MSRA)",
    position: "Research Intern",
    location: "Beijing, China",
    time: "Oct. 2025 – Present",
    desc: "Mentored by Dr. Researcher. Working on foundation models for healthcare."
  },
  {
    company: "SenseTime",
    position: "Computer Vision Intern",
    location: "Shanghai, China",
    time: "Jun. 2025 – Sep. 2025",
    desc: "Focused on 3D reconstruction algorithms."
  }
  */
];

const SERVICES = [
  /*
  "Reviewer for IEEE Transactions on Signal Processing",
  "Reviewer for CVPR 2025, ICCV 2025",
  "Teaching Assistant for 'Signals and Systems', Fudan University, Fall 2024"
  */
];

const AWARDS = [
  /*
  "National Scholarship (Top 0.2%), Ministry of Education of China, 2025",
  "First Prize, National Undergraduate Electronics Design Contest, 2024",
  "Academic Excellence Scholarship, Fudan University, 2023-2025"
  */
];

// --- 组件 ---

export default function AcademicHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'News', href: '#news' },
    { name: 'Publications', href: '#publications' }, 
    { name: 'Internship', href: '#internship' },
    { name: 'Service', href: '#service' },
    { name: 'Awards', href: '#awards' },
  ];

  return (
    <div 
      className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900"
      style={{ fontFamily: 'Meiryo, "Meiryo UI", "MS PGothic", sans-serif' }}
    >
      
      {/* 字体设置：局部引入衬线体，非衬线体直接使用内联样式设置的 Century Gothic */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        /* 标题保留衬线体 */
        h1, h2, h3, .serif {
          font-family: 'Crimson Text', serif;
        }
      `}</style>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-20">
        
        {/* --- Header / Bio Section --- */}
        <section id="home" className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
          {/* Avatar & Contact Info */}
          <div className="flex flex-col gap-6">
            
            {/* 头像显示区域 */}
            <div className="w-48 h-48 md:w-full md:h-auto aspect-square bg-slate-100 rounded-sm overflow-hidden border border-slate-200 shadow-sm mx-auto md:mx-0">
               <img 
                 src={PROFILE.avatar} 
                 alt={PROFILE.name} 
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-slate-400 flex-shrink-0" />
                <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-blue-700 break-all">
                  {PROFILE.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} className="text-slate-400 flex-shrink-0" />
                <a href={PROFILE.contact.github} target="_blank" className="hover:text-blue-700">Github</a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} className="text-slate-400 flex-shrink-0" />
                <a href={PROFILE.contact.linkedin} target="_blank" className="hover:text-blue-700">LinkedIn</a>
              </div>
              <div className="flex items-center gap-3">
                <Youtube size={16} className="text-slate-400 flex-shrink-0" />
                <a href={PROFILE.contact.youtube} target="_blank" className="hover:text-blue-700">YouTube</a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <MapPin size={16} className="text-slate-400 flex-shrink-0" />
                <span>{PROFILE.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 serif">{PROFILE.name}</h1>
            <p className="text-lg text-slate-600 mb-6 font-medium">{PROFILE.title}</p>
            <p className="text-slate-700 mb-1">{PROFILE.department}</p>
            <p className="text-slate-700 mb-8">{PROFILE.university}</p>

            <div className="text-slate-700 leading-relaxed text-lg space-y-4 border-t border-slate-100 pt-6">
              {PROFILE.bio}
            </div>
          </div>
        </section>

        {/* --- News Section --- */}
        <section id="news">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
            News
          </h2>
          <div className="space-y-4">
            {NEWS.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="text-slate-500 font-mono text-sm sm:w-24 flex-shrink-0 pt-0.5">{item.date}</span>
                <span className="text-slate-800">{item.content}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Publications Section --- */}
        <section id="publications">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
            Selected Publications
          </h2>
          <div className="space-y-8">
            {PUBLICATIONS.map((pub) => (
              <div key={pub.id} className="flex gap-4 group">
                <div className="hidden sm:block w-32 h-20 bg-slate-50 border border-slate-100 rounded-sm flex-shrink-0"></div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 mb-1">
                    {pub.authors.split(', ').map((author, i, arr) => (
                      <span key={i}>
                        {author.includes("Lun Tian") ? <strong className="text-slate-900">{author}</strong> : author}
                        {i < arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="text-slate-700 italic mb-2">
                    {pub.venue}
                    {pub.note && <span className="text-red-600 font-medium ml-2">{pub.note}</span>}
                  </p>
                  <div className="flex gap-3 text-sm">
                    {pub.links.map((link, i) => (
                      <a key={i} href={link.url} className="text-blue-700 hover:underline font-medium">
                        [{link.name}]
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Internship Section --- */}
        <section id="internship">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
            Internship
          </h2>
          <div className="space-y-8 relative border-l-2 border-slate-100 ml-3 pl-8 py-2">
            {INTERNSHIPS.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-slate-200"></div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-900">{job.company}</h3>
                  <span className="text-sm font-mono text-slate-500">{job.time}</span>
                </div>
                <div className="text-slate-700 font-medium mb-2">
                  {job.position} <span className="text-slate-400 mx-1">|</span> {job.location}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Service & Awards (2 Columns) --- */}
        <div className="grid md:grid-cols-2 gap-12">
          
          <section id="service">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
              Service
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-3 text-slate-700">
              {SERVICES.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="awards">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
              Selected Awards
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-3 text-slate-700">
              {AWARDS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

        </div>

      </main>

      {/* Footer (Hidden) */}
      {/* <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <p className="mt-1">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
        </p>
      </footer> 
      */}
    </div>
  );
}