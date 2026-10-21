import React, { useEffect } from "react";
import {
  ArrowRight, Sparkles, Search, FileText, Mail, BarChart3, CalendarDays,
  BookOpen, MousePointerClick, Building2, MessageCircle, CheckCircle2,
  BriefcaseBusiness, ShieldCheck, ChevronRight, ClipboardList, UserRound,
} from "lucide-react";
import "./adugu.css";

const AGENT_URL = "https://o1jobaid.com/app/agent";
const JOBS_URL = "https://o1jobaid.com/app/jobs";
const HOME_URL = "https://o1jobaid.com/home";
const features = [
  { id: "job-discovery", icon: Search, tag: "AI job matching", title: "Find Jobs That Match Your Skills and Preferences", text: "Describe the opportunity you want in everyday language. ADUGU searches the o1 Job Aid job catalog using available filters such as role, location, experience level, work type, salary, and sponsorship status. Where match data is available, review how a role aligns with your profile.", prompts: ["Find remote data analyst jobs matching my profile.", "Show software engineering roles in New York.", "Find jobs with a match score above 80%.", "Show recently posted roles that mention sponsorship."], note: "Review the job requirements and match details before deciding which opportunities deserve your time.", cta: "Find Matching Jobs", url: AGENT_URL },
  { id: "resume", icon: FileText, tag: "AI resume builder", title: "Build and Tailor Your Resume With AI", text: "Ask ADUGU to build a resume from your saved profile or tailor one to a job description. Review and edit the generated document in the builder. Accurate experience, skills, education, and achievements in your profile give it useful material to work with.", prompts: ["Build a resume from my profile.", "Tailor my resume to this job description.", "Rewrite the summary in the resume we just created.", "Make the experience bullets more concise."], note: "For a resume already built in the conversation, ask ADUGU to revise a specific section without rebuilding the whole document.", cta: "Build My Resume", url: AGENT_URL },
  { id: "cover-letter", icon: Mail, tag: "AI cover letter generator", title: "Create a Cover Letter for Your Target Role", text: "Give ADUGU the job description and ask for a cover letter. The workflow uses your saved profile and the role’s requirements to prepare a draft. Review the wording, check the details, and personalize the letter before using it.", prompts: ["Create a cover letter for this product analyst role.", "Build a cover letter using my profile and this job description."], cta: "Create a Cover Letter", url: AGENT_URL },
  { id: "resume-analysis", icon: BarChart3, tag: "Resume analysis", title: "Understand Your Resume’s Strengths and Improvements", text: "Ask ADUGU for an ATS content-quality score and a checklist of areas to improve. The analysis considers achievement wording, action verbs, resume section completeness, and contact information. You can ask about your saved profile or a resume uploaded in the conversation.", prompts: ["What is my ATS score?", "Check the resume I uploaded.", "What could I improve in my resume?"], note: "A resume content-quality score and a job-specific match score answer different questions. Neither guarantees an employer’s screening outcome." },
  { id: "tracking", icon: CalendarDays, tag: "Job application tracker", title: "Ask About Your Applications and Upcoming Interviews", text: "Get a clearer view of application information recorded in your account. ADUGU can retrieve application statuses, summarize activity, show saved jobs, and help you review recorded interviews and follow-up dates.", prompts: ["Show my applications from this week.", "Which applications have reached the interview stage?", "What interviews do I have coming up?", "Show applications I started but haven’t marked as applied.", "How has my application activity changed this month?"], cta: "Review My Applications", url: AGENT_URL },
  { id: "documents", icon: BookOpen, tag: "Document questions", title: "Find Details in Your Resumes and Uploaded Documents", text: "Ask questions about your saved resume or documents uploaded in the conversation. ADUGU can locate experience descriptions, project details, and relevant passages without requiring you to scan the entire file.", prompts: ["What does my resume say about cloud migration?", "Summarize the leadership experience in my resume.", "Which projects are mentioned in the document I uploaded?"], note: "Uploaded documents and the structured profile are separate sources. To use uploaded information in a newly generated resume, add it to your saved profile first." },
];

const faqs = [
  ["What is ADUGU?", "ADUGU is the AI career assistant inside o1 Job Aid. It helps users search available jobs, create resumes and cover letters, ask questions about documents, and review application information."],
  ["Can ADUGU find jobs matching my profile?", "Yes. It can search the job catalog and retrieve available match information. You can also specify preferences such as location, work type, salary, and experience level."],
  ["Can ADUGU tailor my resume to a job description?", "Yes. Its resume builder can use your saved profile and a supplied job description to prepare a tailored resume for review."],
  ["Can I ask it to change just one resume section?", "Yes. For a resume already generated in the conversation, you can request changes to a supported section, such as the summary, experience, projects, education, skills, or certifications."],
  ["Does uploading a resume automatically update my profile?", "No. Uploaded documents and your structured profile are separate sources. Update your saved profile with information you want used for document generation."],
  ["Can ADUGU track applications?", "It can retrieve and summarize applications, statuses, and related activity recorded in your o1 Job Aid account."],
  ["Does ADUGU apply to jobs through chat?", "Job application automation runs through o1 Job Aid’s supported Auto Apply and extension workflows. A chat request alone should not be assumed to launch or submit an application."],
  ["Can I try ADUGU before signing in?", "The public assistant has a smaller scope: platform questions, questions about documents uploaded in that conversation, and supported H-1B statistics. Personalized account tools and document building require sign-in."],
  ["Is its ATS score a guarantee that my resume will pass screening?", "No. It is a content-quality assessment. Employer screening systems and hiring decisions depend on factors beyond that score."],
];

function Action({ href, children, secondary = false }) {
  return <a className={`ad-button ${secondary ? "ad-button-secondary" : "ad-button-primary"}`} href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></a>;
}

function Feature({ feature, index }) {
  const Icon = feature.icon;
  return (
    <section id={feature.id} className={`ad-feature ${index % 2 ? "ad-feature-reverse" : ""}`} aria-labelledby={`${feature.id}-title`}>
      <div className="ad-feature-copy">
        <span className="ad-eyebrow"><Icon size={15} aria-hidden="true" /> {feature.tag}</span>
        <h2 id={`${feature.id}-title`}>{feature.title}</h2>
        <p>{feature.text}</p>
        {feature.note && <p className="ad-feature-note"><CheckCircle2 size={17} aria-hidden="true" />{feature.note}</p>}
        {feature.cta && <a className="ad-text-link" href={feature.url}>{feature.cta} <ArrowRight size={17} aria-hidden="true" /></a>}
      </div>
      <div className="ad-prompt-panel">
        <div className="ad-prompt-header"><MessageCircle size={18} aria-hidden="true" /><strong>Try asking ADUGU</strong><span>Example prompts</span></div>
        <ul>{feature.prompts.map((prompt) => <li key={prompt}><span>“{prompt}”</span><ArrowRight size={15} aria-hidden="true" /></li>)}</ul>
        <div className="ad-prompt-footer">Illustrative prompts · Responses depend on available account data and tools</div>
      </div>
    </section>
  );
}

export default function ADUGUPage() {
  useEffect(() => {
    const title = "ADUGU AI Job Search Assistant | o1 Job Aid";
    const description = "Meet ADUGU, your AI job search assistant. Find matching jobs, build tailored resumes and cover letters, and review your applications with o1 Job Aid.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;
  }, []);

  return (
    <main className="ad-page">
      <div className="ad-container"><nav className="ad-breadcrumb" aria-label="Breadcrumb"><a href={HOME_URL}>o1 Job Aid</a><ChevronRight size={14} aria-hidden="true" /><span>ADUGU AI Job Search Assistant</span></nav></div>
      <section className="ad-container ad-hero" aria-labelledby="ad-title">
        <div className="ad-hero-copy">
          <span className="ad-eyebrow"><Sparkles size={16} aria-hidden="true" /> Meet your AI career assistant</span>
          <h1 id="ad-title">Meet <span>ADUGU</span>, Your AI Job Search Assistant</h1>
          <p className="ad-lead">Find relevant jobs, build tailored resumes and cover letters, and understand your application progress through conversation.</p>
          <p>ADUGU connects your questions with the tools inside o1 Job Aid. Ask for help in your own words and move from searching to preparing your next application.</p>
          <div className="ad-actions"><Action href={AGENT_URL}>Start With ADUGU</Action><Action href="#capabilities" secondary>Explore What ADUGU Can Do</Action></div>
          <p className="ad-small-note"><CheckCircle2 size={17} aria-hidden="true" /> Your profile, job search, and application tools—connected through one assistant.</p>
        </div>
        <div className="ad-chat-preview" aria-label="Illustrative ADUGU conversation preview">
          <div className="ad-chat-top"><div className="ad-chat-brand"><span className="ad-chat-avatar"><Sparkles size={19} /></span><div><strong>ADUGU</strong><small>AI job search assistant</small></div></div><span className="ad-demo-label">Illustrative example</span></div>
          <div className="ad-chat-bubble ad-chat-user">Find remote data analyst jobs matching my profile.</div>
          <div className="ad-chat-bubble ad-chat-assistant"><span className="ad-mini-avatar"><Sparkles size={14}/></span><div>I can help search available roles using your profile and preferences. Let's review the job requirements and available match details.</div></div>
          <div className="ad-chat-chips"><span><Search size={13}/> Job discovery</span><span><FileText size={13}/> Resume building</span><span><ClipboardList size={13}/> Tracking</span></div>
          <div className="ad-chat-bottom"><MessageCircle size={17}/><span>Ask ADUGU about your next step...</span><ArrowRight size={17}/></div>
        </div>
      </section>

      <section className="ad-intro ad-section" aria-labelledby="ad-intro-title"><div className="ad-container ad-intro-inner"><span className="ad-eyebrow">A connected career workspace</span><h2 id="ad-intro-title">Give Your Job Search a Clear Next Step</h2><p>A job search brings together your experience, different job requirements, several resume versions, and applications at different stages. ADUGU helps you work with that information inside o1 Job Aid.</p><p>Ask which jobs match your background. Create a resume for a role. Review upcoming interviews. Find an achievement in your saved resume. Get an answer about your applications without searching through every page yourself.</p></div></section>

      <section id="capabilities" className="ad-container ad-section" aria-labelledby="ad-capabilities-title"><div className="ad-section-heading"><span className="ad-eyebrow">What ADUGU can do</span><h2 id="ad-capabilities-title">From Job Search to Application Preparation</h2><p>Use natural-language requests to work with the supported tools and information in your career workspace.</p></div><div className="ad-features">{features.map((feature, i) => <Feature feature={feature} index={i} key={feature.id}/>)}</div></section>

      <section className="ad-section ad-tint" aria-labelledby="ad-autofill-title"><div className="ad-container ad-split"><div><span className="ad-eyebrow"><MousePointerClick size={16}/> Connected application workflow</span><h2 id="ad-autofill-title">Continue From Preparation to Application Autofill</h2><p>Once you have reviewed a role and prepared your documents, continue through o1 Job Aid’s application tools. The Chrome extension fills supported application forms using your profile. Auto Apply lets you select eligible jobs and send them to the extension queue.</p><p>ADUGU provides a conversational entry point to your career workspace. Application execution depends on the supported web app and extension workflows—not a chat request alone.</p><Action href="https://o1jobaid.com/auto-apply">Explore Auto Apply and Autofill</Action></div><div className="ad-info-card"><div className="ad-info-icon"><BriefcaseBusiness size={27}/></div><h3>Preparation and application are connected, but distinct.</h3><ul><li><CheckCircle2 size={17}/> Review a role and its requirements</li><li><CheckCircle2 size={17}/> Prepare your resume and cover letter</li><li><CheckCircle2 size={17}/> Use supported autofill or eligible Auto Apply queue workflows</li><li><CheckCircle2 size={17}/> Check application outcomes and steps requiring attention</li></ul><a className="ad-text-link" href={JOBS_URL}>Explore jobs in o1 Job Aid <ArrowRight size={16}/></a></div></div></section>

      <section className="ad-section" aria-labelledby="ad-h1b-title"><div className="ad-container ad-h1b"><div className="ad-h1b-icon"><Building2 size={28}/></div><div><span className="ad-eyebrow">Employer research</span><h2 id="ad-h1b-title">Research Employer H-1B Petition History</h2><p>Ask ADUGU about employer-level H-1B petition approval and denial statistics from the USCIS public dataset. Explore available results by employer, fiscal year, industry, or state as part of your research.</p><p className="ad-disclaimer"><ShieldCheck size={16}/> Historical petition activity does not establish whether a specific job currently offers sponsorship.</p></div></div></section>

      <section className="ad-section ad-tint" id="how-it-works" aria-labelledby="ad-how-title"><div className="ad-container"><div className="ad-section-heading"><span className="ad-eyebrow">How it works</span><h2 id="ad-how-title">Start With a Question. Continue With the Right Tool.</h2></div><div className="ad-steps">{[[UserRound,"Complete your profile","Add the background information ADUGU needs for personalized job search and document creation."],[MessageCircle,"Tell ADUGU what you need","Ask a question or choose a skill such as job search, resume building, or cover letter creation."],[Search,"Review the result","Explore retrieved jobs, open a generated document, or review information from your account."],[ArrowRight,"Take the next step","Edit your document, investigate a role, or continue into the application workflow."]].map(([Icon,title,text],i)=><div className="ad-step" key={title}><span className="ad-step-number">{String(i+1).padStart(2,"0")}</span><span className="ad-step-icon"><Icon size={23}/></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="ad-section" id="faq" aria-labelledby="ad-faq-title"><div className="ad-container ad-faq-wrap"><div className="ad-section-heading"><span className="ad-eyebrow">Frequently asked questions</span><h2 id="ad-faq-title">Questions About ADUGU</h2><p>Understand what your AI job search assistant can do—and where account access or other tools are required.</p></div><div className="ad-faq-list">{faqs.map(([q,a])=><details key={q} className="ad-faq-item"><summary>{q}<span className="ad-faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="ad-container ad-closing" aria-labelledby="ad-closing-title"><div className="ad-closing-inner"><span className="ad-eyebrow"><Sparkles size={16}/> Your next move starts here</span><h2 id="ad-closing-title">Make Your Next Career Move With ADUGU</h2><p>Find a relevant opportunity. Build the documents it needs. Understand where your applications stand. Start with the question on your mind.</p><div className="ad-actions"><Action href={AGENT_URL}>Start With ADUGU</Action><Action href={HOME_URL} secondary>Explore o1 Job Aid</Action></div><p className="ad-closing-note">Public access has a limited scope. Personalized account tools and document building require sign-in.</p></div></section>
      <div className="ad-container ad-related"><strong>Explore related tools</strong><a href="https://o1jobaid.com/ai-resume-builder">AI Resume Builder <ArrowRight size={14}/></a><a href="https://o1jobaid.com/job-matching-analysis">Job Matching Analysis <ArrowRight size={14}/></a><a href="https://o1jobaid.com/auto-apply">Auto Apply & Autofill <ArrowRight size={14}/></a></div>
    </main>
  );
}
