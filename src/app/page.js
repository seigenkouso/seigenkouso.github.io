'use client';

import "./globals.css";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Terminal, User, 
  Send, Music, Globe, ChevronDown, ArrowRight, Languages, Check, 
  Youtube, Mic2, BookOpen, PenTool
} from 'lucide-react';

// --- 多语言数据配置 ---

const TRANSLATIONS = {
  'zh-CN': {
    name: "Seigenkouso Lun",
    title: "复旦大学通信工程本科三年生",
    description: [
      "期盼从事深度学习领域、6G通信研发工作。",
      "通信工程 & 深度学习 & VOCALOID"
    ],
    nav: {
      about: "简介",
      projects: "项目",
      notes: "随笔",
      vocaloid: "VOCALOID",
      contact: "联系"
    },
    hero: {
      greeting: "你好，这里是",
      viewWork: "查看项目",
      contactBtn: "联系我"
    },
    about: {
      sectionTitle: "关于我"
    },
    projects: {
      sectionTitle: "一些项目",
      items: [
        {
          title: "Yorushika 歌词维基",
          description: "一个专注于 ヨルシカ (Yorushika) 及其作曲家 ナブナ (n-buna) 的歌词翻译与解析平台。包含多语言支持与音乐播放器集成。"
        },
        {
          title: "信号处理实验室",
          description: "基于 Web 的信号处理可视化工具，支持 FFT 变换演示与滤波器设计，辅助通信原理课程学习。"
        },
        {
          title: "个人摄影作品集",
          description: "个人摄影作品集展示网站，具有响应式画廊布局和图片懒加载功能。"
        }
      ]
    },
    notes: {
      sectionTitle: "随笔 & 思考",
      items: [
        { title: "关于离散傅里叶变换的直观理解", date: "2025-12-10", desc: "跳出公式，从几何角度重新审视 DFT..." },
        { title: "Next.js 15 的服务端组件实践", date: "2025-11-24", desc: "在构建个人主页过程中遇到的一些坑与解决方案..." },
        { title: "论ヨルシカ歌词中的文学意象", date: "2025-10-05", desc: "浅析拿布拿笔下的夏天、云与花..." }
      ]
    },
    vocaloid: {
      sectionTitle: "VOCALOID 作品",
      items: [
        { title: "【Hatsune Miku】晴る (Cover)", description: "ヨルシカ《晴る》的翻调版本。尝试还原了原曲的空气感与力度。" },
        { title: "【Kagamine Rin】花人局 (Cover)", description: "重新编曲与调校，致敬 n-buna 早期的吉他摇滚风格。" },
        { title: "【v flower】原创曲 Demo", description: "正在制作中的原创曲目片段，融合了 Math Rock 元素。" }
      ]
    },
    contact: {
      subtitle: "What's Next?",
      title: "保持联系",
      desc: "无论你是想交流通信技术、Web 开发，还是探讨 VOCALOID 调声，我的收件箱随时为你打开。",
      btn: "发邮件给我"
    },
    footer: "Designed & Built with React."
  },
  'zh-TW': {
    name: "Seigenkouso Lun",
    title: "復旦大學通訊工程本科三年級",
    description: [
      "期盼從事深度學習領域、6G通訊研發工作。",
      "通訊工程 & 深度學習 & VOCALOID"
    ],
    nav: {
      about: "簡介",
      projects: "專案",
      notes: "隨筆",
      vocaloid: "VOCALOID",
      contact: "聯繫"
    },
    hero: {
      greeting: "你好，這裡是",
      viewWork: "查看專案",
      contactBtn: "聯繫我"
    },
    about: {
      sectionTitle: "關於我"
    },
    projects: {
      sectionTitle: "一些專案",
      items: [
        {
          title: "Yorushika 歌詞維基",
          description: "一個專注於 ヨルシカ (Yorushika) 及其作曲家 ナブナ (n-buna) 的歌詞翻譯與解析平台。包含多語言支持與音樂播放器集成。"
        },
        {
          title: "信號處理實驗室",
          description: "基於 Web 的信號處理可視化工具，支持 FFT 變換演示與濾波器設計。"
        },
        {
          title: "個人攝影作品集",
          description: "個人攝影作品集展示網站，具有響應式畫廊佈局和圖片懶加載功能。"
        }
      ]
    },
    notes: {
      sectionTitle: "隨筆 & 思考",
      items: [
        { title: "關於離散傅立葉變換的直觀理解", date: "2025-12-10", desc: "跳出公式，從幾何角度重新審視 DFT..." },
        { title: "Next.js 15 的服務端組件實踐", date: "2025-11-24", desc: "在構建個人主頁過程中遇到的一些坑與解決方案..." },
        { title: "論ヨルシカ歌詞中的文學意象", date: "2025-10-05", desc: "淺析拿布拿筆下的夏天、雲與花..." }
      ]
    },
    vocaloid: {
      sectionTitle: "VOCALOID 作品",
      items: [
        { title: "【Hatsune Miku】晴る (Cover)", description: "ヨルシカ《晴る》的翻調版本。嘗試還原了原曲的空氣感與力度。" },
        { title: "【Kagamine Rin】花人局 (Cover)", description: "重新編曲與調校，致敬 n-buna 早期的吉他搖滾風格。" },
        { title: "【v flower】原創曲 Demo", description: "正在製作中的原創曲目片段，融合了 Math Rock 元素。" }
      ]
    },
    contact: {
      subtitle: "What's Next?",
      title: "保持聯繫",
      desc: "無論你是想交流通訊技術、Web 開發，還是探討 VOCALOID 調聲，我的收件箱隨時為你打開。",
      btn: "發郵件給我"
    },
    footer: "Designed & Built with React."
  },
  'en': {
    name: "Seigenkouso Lun",
    title: "Undergrad in Telecommunication Engineering at Fudan University",
    description: [
      "Aspire to work in the fields of deep learning and 6G communication research and development.",
      "Telecommunication & Deep Learning & VOCALOID"
    ],
    nav: {
      about: "Intro",
      projects: "Projects",
      notes: "Notes",
      vocaloid: "VOCALOID",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello World, I'm",
      viewWork: "View Projects",
      contactBtn: "Contact Me"
    },
    about: {
      sectionTitle: "About Me"
    },
    projects: {
      sectionTitle: "Some Projects",
      items: [
        {
          title: "Yorushika Wiki",
          description: "A platform dedicated to lyrics translation and analysis for Yorushika and its composer n-buna. Features multi-language support and integrated music player."
        },
        {
          title: "Signal Processing Lab",
          description: "Web-based signal processing visualization tool supporting FFT transformation demos and filter design."
        },
        {
          title: "Photography Portfolio",
          description: "Personal photography portfolio website featuring responsive gallery layout and lazy loading images."
        }
      ]
    },
    notes: {
      sectionTitle: "Notes & Thoughts",
      items: [
        { title: "Intuitive Understanding of DFT", date: "2025-12-10", desc: "Looking at DFT from a geometric perspective beyond formulas..." },
        { title: "Next.js 15 Server Components Practice", date: "2025-11-24", desc: "Lessons learned while building this portfolio..." },
        { title: "Literary Imagery in Yorushika's Lyrics", date: "2025-10-05", desc: "Analysis of summer, clouds, and flowers in n-buna's writing..." }
      ]
    },
    vocaloid: {
      sectionTitle: "VOCALOID Works",
      items: [
        { title: "【Hatsune Miku】Sunny (Cover)", description: "Cover of Yorushika's 'Sunny'. Tried to recreate the airy atmosphere and dynamics." },
        { title: "【Kagamine Rin】Hana-hitou (Cover)", description: "Rearranged and tuned, paying homage to n-buna's early guitar rock style." },
        { title: "【v flower】Original Demo", description: "Snippet of an original song in progress, fusing Math Rock elements." }
      ]
    },
    contact: {
      subtitle: "What's Next?",
      title: "Get In Touch",
      desc: "Whether you want to discuss communication tech, web dev, or VOCALOID tuning, my inbox is always open.",
      btn: "Say Hello"
    },
    footer: "Designed & Built with React."
  },
  'ja': {
    name: "Seigenkouso Lun",
    title: "復旦大学 通信工学専攻 3年生",
    description: [
      "深層学習分野の研究開発および6G通信分野での勤務を期待しています。",
      "通信工学 & 深層学習 & ボカロ"
    ],
    nav: {
      about: "紹介",
      projects: "開発",
      notes: "ノート",
      vocaloid: "ボカロ",
      contact: "連絡"
    },
    hero: {
      greeting: "こんにちは、これは",
      viewWork: "プロジェクト",
      contactBtn: "連絡する"
    },
    about: {
      sectionTitle: "私について"
    },
    projects: {
      sectionTitle: "あるプロジェクト",
      items: [
        {
          title: "ヨルシカ Wiki",
          description: "ヨルシカとそのコンポーザーであるナブナ (n-buna) に特化した歌詞翻訳・解説プラットフォーム。多言語サポートと音楽プレーヤーを統合。"
        },
        {
          title: "信号処理ラボ",
          description: "FFT変換デモやフィルタ設計をサポートする、Webベースの信号処理可視化ツール。"
        },
        {
          title: "写真ポートフォリオ",
          description: "レスポンシブなギャラリーレイアウトと画像の遅延読み込み機能を備えた、個人の写真ポートフォリオサイト。"
        }
      ]
    },
    notes: {
      sectionTitle: "随筆 & 思考",
      items: [
        { title: "離散フーリエ変換の直感的理解", date: "2025-12-10", desc: "数式を超えて、幾何学的視点からDFTを見直す..." },
        { title: "Next.js 15 サーバーコンポーネントの実践", date: "2025-11-24", desc: "このポートフォリオ構築中に学んだこと..." },
        { title: "ヨルシカの歌詞における文学的イメージ", date: "2025-10-05", desc: "ナブナが描く夏、雲、花についての考察..." }
      ]
    },
    vocaloid: {
      sectionTitle: "VOCALOID 作品",
      items: [
        { title: "【初音ミク】晴る (Cover)", description: "ヨルシカ「晴る」のカバー。原曲の空気感と強弱の再現を試みました。" },
        { title: "【鏡音リン】花人局 (Cover)", description: "再編曲と調声。n-buna初期のギターロックスタイルへのオマージュ。" },
        { title: "【v flower】オリジナル曲 Demo", description: "制作中のオリジナル曲の断片。マスロックの要素を融合。" }
      ]
    },
    contact: {
      subtitle: "What's Next?",
      title: "連絡を取り合う",
      desc: "通信技術、Web開発、あるいはVOCALOIDの調声について語り合いたい時など、いつでもご連絡ください。",
      btn: "メールを送る"
    },
    footer: "Designed & Built with React."
  },
};

// --- 通用数据 ---

const EMAIL = "seeseaamoi@gmail.com";
const SOCIAL_LINKS = {
  github: "https://github.com/seigenkouso",
  linkedin: "https://www.linkedin.com/in/amoi-seesea-31a738397/",
  youtube: "https://www.youtube.com/@seigenkouso"
};

// 项目元数据
const PROJECTS_META = [
  {
    tags: ["React", "Next.js", "i18n"],
    link: "#",
    color: "from-blue-500 to-cyan-400",
    icon: <Music size={24} />
  },
  {
    tags: ["Python", "D3.js", "Flask"],
    link: "#",
    color: "from-emerald-500 to-teal-400",
    icon: <Terminal size={24} />
  },
  {
    tags: ["React", "Tailwind", "Vercel"],
    link: "#",
    color: "from-purple-500 to-pink-400",
    icon: <Globe size={24} />
  }
];

// Vocaloid 作品元数据
const VOCALOID_META = [
  {
    tags: ["Hatsune Miku", "Cover"],
    link: "https://youtube.com", // 示例链接，实际可换成具体视频
    color: "from-teal-400 to-emerald-400",
    icon: <Mic2 size={24} />
  },
  {
    tags: ["Kagamine Rin", "Arrangement"],
    link: "https://youtube.com",
    color: "from-yellow-400 to-orange-400",
    icon: <Music size={24} />
  },
  {
    tags: ["v flower", "Original"],
    link: "https://youtube.com",
    color: "from-violet-500 to-purple-500",
    icon: <Code2 size={24} /> // 使用 Code2 代表合成/制作
  }
];

const LANGUAGE_OPTIONS = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' }
];

// --- 组件代码 ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('zh-CN');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // 获取当前语言的数据
  const t = TRANSLATIONS[language];
  const langMenuRef = useRef(null);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'projects', 'notes', 'vocaloid', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击外部关闭语言菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'about', href: '#home' }, // 简介合并到 Home/About
    { key: 'projects', href: '#projects' },
    { key: 'notes', href: '#notes' },
    { key: 'vocaloid', href: '#vocaloid' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden relative font-mixed">
      
      {/* 字体定义与全局样式覆盖 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
        
        @font-face {
          font-family: 'Google Sans';
          src: url('https://fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Owp5eKQtG.woff2') format('woff2');
          font-display: swap;
        }

        .font-mixed {
          font-family: 'Google Sans', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans JP', sans-serif;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* --- 背景装饰 --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-teal-300/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[120px]"></div>
      </div>

      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              My Personal Profile
            </span>
            <span className="text-teal-500">.</span>
          </a>
          
          <div className="flex items-center gap-4">
            {/* 桌面端菜单 */}
            <div className="hidden md:flex space-x-1 items-center bg-white/50 p-1 rounded-full border border-slate-200 backdrop-blur-md shadow-sm">
              {navItems.map((item) => (
                <a 
                  key={item.key} 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    // 特殊处理 about 对应 home
                    (activeSection === 'home' && item.key === 'about') || activeSection === item.href.substring(1) 
                      ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {t.nav[item.key]}
                </a>
              ))}
            </div>

            {/* 语言切换器 */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-full bg-white/50 border border-slate-200 text-slate-600 hover:text-teal-600 hover:bg-white hover:shadow-sm transition-all flex items-center gap-1"
                aria-label="Change Language"
              >
                <Languages size={20} />
                <span className="hidden lg:inline text-xs font-medium uppercase">{language.split('-')[0]}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        language === opt.code ? 'text-teal-600 font-medium bg-teal-50/50' : 'text-slate-600'
                      }`}
                    >
                      {opt.label}
                      {language === opt.code && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className="md:hidden text-slate-600 hover:text-slate-900 p-2 bg-white/50 border border-slate-200 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100 shadow-lg' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.key} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-teal-600 font-medium transition-colors"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. 个人简介 (Hero + About) */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex items-center justify-center z-10 flex-col">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-sm font-semibold tracking-wide mb-6">
              {t.hero.greeting}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-slate-900 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t.name}
          </h1>
          
          {/* 更新后的 Title：复旦大学通信工程本科三年生 */}
          <h2 className="text-xl md:text-2xl text-teal-600 font-medium mb-8 animate-fade-in-up" style={{animationDelay: '0.25s'}}>
            {t.title}
          </h2>

          <div className="max-w-2xl mx-auto mb-10 text-slate-600 text-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
             {t.description.map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="group relative px-8 py-4 rounded-full bg-teal-500 text-white font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] shadow-lg shadow-teal-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewWork} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 font-semibold border border-slate-200 transition-all hover:bg-white hover:border-slate-300 hover:shadow-md"
            >
              {t.hero.contactBtn}
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* 2. 项目展示 (Projects) */}
      <section id="projects" className="py-24 px-6 relative z-10 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-teal-500 opacity-80 text-2xl">02.</span>
            <span className="text-slate-800">{t.projects.sectionTitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_META.map((meta, index) => {
              const projectContent = t.projects.items[index];
              return (
                <div key={index} className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full shadow-sm">
                  <div className={`h-2 w-full bg-gradient-to-r ${meta.color}`}></div>
                  <div className="p-8 flex-1 flex flex-col z-10 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl text-teal-600 ring-1 ring-slate-200 group-hover:scale-110 transition-transform duration-300">
                        {meta.icon}
                      </div>
                      <div className="flex gap-4">
                        <a href={SOCIAL_LINKS.github} className="text-slate-400 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-full">
                          <Github size={20} />
                        </a>
                        <a href={meta.link} className="text-slate-400 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-full">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                      {projectContent.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-1">
                      {projectContent.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {meta.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Note (随笔) */}
      <section id="notes" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-teal-500 opacity-80 text-2xl">03.</span>
            <span className="text-slate-800">{t.notes.sectionTitle}</span>
          </h2>
          
          <div className="space-y-6">
            {t.notes.items.map((note, index) => (
              <div key={index} className="group flex flex-col md:flex-row gap-4 md:items-center p-6 bg-white/80 rounded-2xl border border-slate-200 hover:border-teal-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="p-4 bg-slate-50 rounded-xl text-slate-400 group-hover:text-teal-500 transition-colors">
                   <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{note.title}</h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">{note.date}</span>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-2">{note.desc}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={20} className="text-teal-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VOCALOID */}
      <section id="vocaloid" className="py-24 px-6 relative z-10 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-teal-500 opacity-80 text-2xl">04.</span>
            <span className="text-slate-800">{t.vocaloid.sectionTitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {VOCALOID_META.map((meta, index) => {
              const itemContent = t.vocaloid.items[index];
              return (
                <div key={index} className="group relative rounded-2xl bg-white border border-slate-200 hover:border-pink-300/50 overflow-hidden hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 flex flex-col h-full shadow-sm">
                  {/* Vocaloid 特色渐变顶栏 */}
                  <div className={`h-2 w-full bg-gradient-to-r ${meta.color}`}></div>
                  
                  <div className="p-8 flex-1 flex flex-col z-10 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl text-pink-500 ring-1 ring-slate-200 group-hover:scale-110 transition-transform duration-300">
                        {meta.icon}
                      </div>
                      <a href={meta.link} className="text-slate-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-50 rounded-full">
                         <Youtube size={20} />
                      </a>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-pink-600 transition-colors">
                      {itemContent.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-1">
                      {itemContent.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {meta.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 联系方式 (Contact) */}
      <section id="contact" className="py-32 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-white/70 p-10 md:p-16 rounded-3xl border border-slate-200 backdrop-blur-lg shadow-2xl">
          <p className="text-teal-600 font-bold mb-4 text-sm tracking-widest uppercase">{t.contact.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">{t.contact.title}</h2>
          <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            {t.contact.desc}
          </p>
          
          <a 
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-teal-500 text-white font-bold text-lg hover:bg-teal-600 transition-all hover:-translate-y-1 shadow-lg shadow-teal-500/20"
          >
            <Mail size={22} />
            {t.contact.btn}
          </a>

          <div className="mt-16 pt-10 border-t border-slate-200 flex justify-center gap-10">
            <a href={SOCIAL_LINKS.github} className="text-slate-400 hover:text-slate-900 transition-all transform hover:scale-125 hover:-translate-y-1" title="GitHub">
              <Github size={28} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="text-slate-400 hover:text-slate-900 transition-all transform hover:scale-125 hover:-translate-y-1" title="LinkedIn">
              <Linkedin size={28} />
            </a>
            <a href={SOCIAL_LINKS.youtube} className="text-slate-400 hover:text-red-600 transition-all transform hover:scale-125 hover:-translate-y-1" title="YouTube">
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-50 relative z-10 border-t border-slate-200">
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()} {t.name}. 
          <span className="hidden md:inline">{t.footer}</span>
        </p>
      </footer>
    </div>
  );
}