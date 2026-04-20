import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const sections = [
    {
      id: 'about',
      title: 'About',
      content: "I'm Brian Abad \u2014 economist by training, builder by default. I design AI systems and automation workflows that reduce friction and scale operations.\n\nMy background merges economics, data, and code. I spend most of my time shipping AI products, integrating autonomous agents into real-world workflows, and thinking about how to automate myself out of every role I take on.\n\nI grew up in Spain. Long-term goal: build things that matter, live free, and bring others with me.",
      initiallyOpen: true
    },
    {
      id: 'education',
      title: 'Education',
      content: 'I studied Big Data and Machine Learning through a Master\'s program focused on real-world applications of large-scale data systems.\n\nMy work included building visual dashboards, building LLM-powered classifiers, scraping with Selenium, and creating AI workflows with tools like spaCy, Neo4j, Dask and Looker.\n\nBeyond the curriculum, I\'ve turned coursework into shipped prototypes and early-stage products tested by real customers (such as <a href="https://www.opobots.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-500">opobot</a>).',
      initiallyOpen: false
    },
    {
      id: 'experience',
      title: 'Experience',
      content: "I currently drive AI adoption strategy at an international footwear brand \u2014 operating as an internal change agent bridging technical execution and C-level stakeholders.\n\nMy work spans three layers: strategic (executive benchmarks, competitive analysis against global retail leaders, building the case for AI as infrastructure \u2014 not a side project), systems (designing a multi-agent development pipeline with five specialized AI agents running on GCP), and product (agentic commerce readiness, structured data in production, and a recommendation engine built with Vertex AI image embeddings and BigQuery for a sister brand).\n\nPreviously, I built and deployed AI systems for sales automation: voice agents handling inbound calls and lead qualification, WhatsApp chatbots closing appointments, and end-to-end outbound pipelines integrating LLMs with CRMs and Google Calendar.\n\nThe through-line: I don't just build tools \u2014 I build the conditions for AI to compound over time.",
      initiallyOpen: false
    },
    {
      id: 'projects',
      title: 'Projects',
      content: '<b>Opobot</b> \u2014 AI-powered exam preparation platform. Shipped to real paying customers. \u2192 <a href="https://www.opobots.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-500">opobots.com</a>\n\n<b>Recommendation Engine</b> \u2014 PDP similarity engine for a trail running brand. Built with Vertex AI image embeddings, BigQuery, and Cloud Functions on GCP.\n\n<b>pdf-all-in-one</b> \u2014 Open-source PDF processing toolkit. \u2192 <a href="https://github.com/BrianGuadalupe/pdf-all-in-one" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-500">github.com/BrianGuadalupe/pdf-all-in-one</a>\n\n<b>Real Estate Automation</b> \u2014 End-to-end lead pipeline: cold outbound (email, LinkedIn, WhatsApp) \u2192 LLM qualification \u2192 CRM + Google Calendar integration.',
      initiallyOpen: false
    },
    {
      id: 'skills',
      title: 'Skills',
      content: "Design and deployment of AI-powered automations across sales, support, and onboarding, including WhatsApp-driven lead qualification and calendar booking.\n\nLLM Agent Design: creation of prompts and toolchains with Retell AI, GPT-4, n8n, and Python.\n\nAPI & CRM Integration: WhatsApp Cloud API, Apps Script, Stripe, Supabase, n8n Orchestration.\n\nData-Driven Operations: scraping, data processing, and dashboarding with Python, Pandas, Looker Studio, PostgreSQL, and Neo4j.",
      initiallyOpen: false
    },
    {
      id: 'stack',
      title: 'Tech Stack',
      content: "Languages: Python, JavaScript/TypeScript, SQL, R.\n\nFrameworks/Environments: Node.js, Express, React, Tailwind, Streamlit, FastAPI\n\nTools: Retell AI, n8n, Make, Apify, OpenAI API, Supabase, Prisma, Lovable, Azure Blob Storage, Passport.js, Stripe, Looker Studio\n\nDatabases: PostgreSQL, Google Sheets, NoSQL (Neo4j)\n\nDeployment Platforms: Streamlit Cloud, Lovable, Netlify, Vercel, Supabase\n\nCloud Services: Azure, Google Cloud Platform",
      initiallyOpen: false
    },
    {
      id: 'contact',
      title: 'Contact',
      content: "Let's talk!\n\n<a href=\"mailto:brianabadguadalupe@gmail.com\" class=\"underline hover:text-blue-500\">brianabadguadalupe@gmail.com</a>",
      initiallyOpen: false
    }
  ];

  const [sectionStates, setSectionStates] = useState(
    sections.reduce((acc, section) => {
      acc[section.id] = section.initiallyOpen;
      return acc;
    }, {})
  );

  const toggleSection = (id) => {
    setSectionStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen font-mono antialiased transition-colors duration-200 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex flex-col min-h-screen">
        <div className="w-full max-w-3xl mx-auto px-4 pt-20 pb-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Brian Abad Guadalupe</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M21 12.79A9 9 0 1111.21 3 7.97 7.97 0 0021 12.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </button>
          </div>

          <p className={`mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            AI Systems Builder
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <h2
                  className="cursor-pointer flex items-center text-lg"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="mr-2">
                    {sectionStates[section.id] ? '\u25be' : '\u25b8'}
                  </span>
                  [{section.title}]
                </h2>

                {sectionStates[section.id] && (
                  <div className={`pl-5 whitespace-pre-line ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                    {section.content.includes('<') ? (
                      <span dangerouslySetInnerHTML={{ __html: section.content }} />
                    ) : (
                      section.content
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 pb-10">
            <p>
              <a
                href="https://www.linkedin.com/in/brianabad/"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-4 underline hover:text-blue-500 ${darkMode ? 'text-white' : 'text-gray-600'}`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/BrianGuadalupe"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-4 underline hover:text-blue-500 ${darkMode ? 'text-white' : 'text-gray-600'}`}
              >
                GitHub
              </a>
              <a
                href="https://x.com/BrianAbad_"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-4 underline hover:text-blue-500 ${darkMode ? 'text-white' : 'text-gray-600'}`}
              >
                X
              </a>
            </p>
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
