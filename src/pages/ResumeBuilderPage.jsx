import React, { useState } from 'react';
import './resume-builder.css';

const BASE = 'https://o1jobaid.com/app/agent';
const FAQS = [
  { group: 'Getting started', q: 'How can I build a resume from scratch with AI?', a: 'Open the o1JobAid Agent page and choose to create a resume from scratch. The AI uses the information in your user profile to prepare a resume, which you can then review, edit, save, regenerate, or download.' },
  { group: 'Getting started', q: 'Can I create a professional resume without writing every section myself?', a: 'Yes. o1JobAid uses your profile information to help draft and organize resume content. Review every section before using it in an application to make sure it accurately represents your background.' },
  { group: 'Job description tailoring', q: 'How do I tailor my resume to a job description?', a: 'You can start a job specific resume from the Agent page or a job view page. o1JobAid considers both your profile and the job description, then rewrites and organizes relevant resume content while prioritizing accurate information.' },
  { group: 'Job description tailoring', q: 'Can I create a resume for a specific job from the job view page?', a: 'Yes. The job view page supports job description based resume creation. For both resume creation from scratch and job description based creation, use the Agent page.' },
  { group: 'Job description tailoring', q: 'What if my experience does not closely match the job description?', a: 'o1JobAid prioritizes your real profile information. When your experience is not a strong match, it focuses on presenting your existing qualifications clearly rather than inventing missing skills or experience.' },
  { group: 'Job description tailoring', q: 'Will AI add skills or experience I do not have?', a: 'The resume workflow is designed to prioritize truthful information from your profile. You should still review generated text and correct any inaccurate or overstated statements before downloading or applying.' },
  { group: 'ATS optimization', q: 'Is o1JobAid an ATS friendly resume builder?', a: 'o1JobAid builds resumes with ATS oriented formatting and content considerations in mind. It also provides an ATS score and feedback in the resume editor. Results can vary by employer and applicant tracking system.' },
  { group: 'ATS optimization', q: 'Does an ATS score of 88 mean my resume will pass every ATS?', a: 'No. The displayed score is feedback from o1JobAid’s resume analysis, not a universal score issued by employers. Different applicant tracking systems and job requirements can produce different outcomes.' },
  { group: 'ATS optimization', q: 'Can I optimize my resume for ATS keywords in a job description?', a: 'Yes. When you choose job description based resume creation, o1JobAid considers the job requirements and your profile to emphasize relevant, truthful qualifications. It does not guarantee a match or an interview.' },
  { group: 'Templates and design', q: 'How many resume templates does o1JobAid offer?', a: 'The current o1JobAid template catalog includes 46 templates, including Harvard, Jake’s Resume, Deedy Resume, ATS Professional, Graduate / Entry Level, and Modern Executive.' },
  { group: 'Templates and design', q: 'Can I use a Harvard style resume template?', a: 'Yes. Harvard is one of the resume templates in the o1JobAid catalog. You can choose a template and adjust the resume content and design in the editor.' },
  { group: 'Templates and design', q: 'Can I change resume fonts, colors, spacing, and margins?', a: 'Yes. The resume editor provides design controls for fonts, text sizes, colors, line height, spacing, padding, and page margins, with the available settings depending on the editor and template.' },
  { group: 'Editing and export', q: 'Can I edit an AI generated resume before downloading?', a: 'Yes. You can edit resume content, manage and reorder sections, adjust design settings, and preview the document before saving or exporting.' },
  { group: 'Editing and export', q: 'Can I regenerate my resume after making changes?', a: 'Yes. The resume editor includes a Regenerate action. Review regenerated content before saving or using it.' },
  { group: 'Editing and export', q: 'Can I download my resume as a PDF or Word document?', a: 'Yes. The editor offers PDF and DOCX download options, allowing you to export your resume as a PDF or Microsoft Word compatible document.' },
  { group: 'Editing and export', q: 'Can I save my resume and work on it later?', a: 'The resume editor includes a Save action. Confirm account specific storage and retention details in your account before relying on long term availability.' },
  { group: 'Audience', q: 'Can freshers and entry level job seekers create a resume?', a: 'Yes. o1JobAid includes a Graduate / Entry Level template and can build a resume using the education, projects, skills, and experience available in the user profile.' },
  { group: 'Audience', q: 'Can experienced professionals create role specific resumes?', a: 'Yes. o1JobAid supports job description based resume creation using an existing professional profile and the target job description, while prioritizing truthful experience.' },
];

const TEMPLATE_NAMES = ['Harvard', 'Jake’s Resume', 'Deedy Resume', 'ATS Professional', 'Graduate / Entry Level', 'Modern Executive', 'IT / Data', 'Classic', 'Minimal', 'Consulting', 'Corporate Elite', 'Healthcare / Clinical'];
const FLOW = [
  { title: 'Choose how to start', text: 'Build from your profile on the Agent page, or select a job description to tailor your resume.' },
  { title: 'AI prepares your resume', text: 'Your profile remains the source of truth; job specific creation also considers the target role.' },
  { title: 'Choose a template and refine', text: 'Select from 46 templates, edit sections, and adjust fonts, spacing, colors, and layout.' },
  { title: 'Review ATS feedback and export', text: 'Inspect the ATS oriented feedback, verify every claim, save your work, and export PDF or DOCX.' },
];

function FAQSection() {
  const groups = [...new Set(FAQS.map(f => f.group))];
  return <section id="resume-faqs" className="rb-section rb-faq" aria-labelledby="resume-faq-heading">
    <div className="rb-heading"><span className="rb-eyebrow">RESUME BUILDER FAQS</span><h2 id="resume-faq-heading">Questions about creating, tailoring, and downloading resumes</h2><p>Answers about the actual o1JobAid resume workflow, ATS feedback, templates, and editing options.</p></div>
    <div className="rb-faq-groups">{groups.map(group => <div key={group} className="rb-faq-group"><h3>{group}</h3>{FAQS.filter(f => f.group === group).map(f => <details key={f.q} className="rb-faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>)}</div>
  </section>;
}

export default function ResumeBuilderPage() {
  const [mode, setMode] = useState('scratch');
  return <main className="rb-page">
    <div className="rb-container">
      
      <section className="rb-hero" aria-labelledby="rb-title">
        <div className="rb-hero-copy"><span className="rb-eyebrow"> AI RESUME BUILDER</span><h1 id="rb-title">Build an ATS friendly resume with AI from scratch or for a specific job</h1><p>Create a professional resume from your profile, or tailor it to a job description without inventing qualifications. Choose from <strong>46 resume templates</strong>, customize the design, review ATS feedback, and download as <strong>PDF or DOCX</strong>.</p><div className="rb-actions"><a className="rb-button rb-primary" href="https://o1jobaid.com/app/agent">Build my resume </a><a className="rb-button rb-secondary" href="#how-it-works" onClick={(event) => { event.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}>See how it works</a></div><div className="rb-trust"><span> 46 templates</span><span> Editable designs</span><span> PDF & DOCX</span></div></div>
        <div className="rb-preview" aria-label="Illustrative resume editor preview"><div className="rb-preview-top"><span> AI Career Assistant</span><span className="rb-score">ATS feedback</span></div><div className="rb-paper"><div className="rb-paper-name">Your Name</div><div className="rb-paper-contact">City · Email · Phone · Portfolio</div><h3>PROFESSIONAL SUMMARY</h3><div className="rb-lines"><i/><i/><i className="short"/></div><h3>EXPERIENCE</h3><div className="rb-lines"><i/><i className="short"/><i/><i/></div><h3>PROJECTS & SKILLS</h3><div className="rb-lines"><i/><i/><i className="short"/></div></div><div className="rb-preview-bottom"><span> Edit</span><span> Regenerate</span><span> Export</span></div></div>
      </section>
      <section className="rb-section" aria-labelledby="rb-modes-title"><div className="rb-heading"><span className="rb-eyebrow">TWO WAYS TO CREATE</span><h2 id="rb-modes-title">Start from your profile or tailor a resume to a job description</h2><p>Choose the workflow that fits your next application.</p></div><div className="rb-mode-switch" role="group" aria-label="Resume creation method"><button type="button" aria-pressed={mode==='scratch'} className={mode==='scratch'?'active':''} onClick={()=>setMode('scratch')}>Build from scratch</button><button type="button" aria-pressed={mode==='jd'} className={mode==='jd'?'active':''} onClick={()=>setMode('jd')}>Tailor to a job description</button></div><div className="rb-mode-panel">{mode==='scratch'?<><h3>AI resume builder from scratch</h3><p>Start on the Agent page. o1JobAid uses the education, skills, projects, and experience in your user profile to draft a professional resume. Review and edit the result, select a template, and download your document.</p><p><strong>Best for:</strong> creating a first resume, refreshing an outdated resume, or preparing a general professional resume.</p><a href="https://o1jobaid.com/app/agent" className="rb-inline-link">Create a resume from scratch </a></>:<><h3>Tailor your resume to a job description</h3><p>Start from the Agent page or a job view page. o1JobAid considers both your profile and the target job description, emphasizing relevant qualifications where they genuinely match. If your background is less aligned, your real profile takes priority over forced keyword matching.</p><p><strong>Best for:</strong> creating a job specific resume, highlighting relevant experience, and improving truthful keyword alignment.</p><a href="https://o1jobaid.com/app/agent" className="rb-inline-link">Tailor a resume with AI </a></>}</div></section>
      <section className="rb-section" id="how-it-works"><div className="rb-heading"><span className="rb-eyebrow">HOW IT WORKS</span><h2>From your profile to a polished resume</h2></div><div className="rb-steps">{FLOW.map((step,i)=><article className="rb-step" key={step.title}><span className="rb-step-num">{String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="rb-section"><div className="rb-heading"><span className="rb-eyebrow">TEMPLATES & CUSTOMIZATION</span><h2>46 resume templates, with editing controls to make each one yours</h2><p>Explore professional, minimalist, executive, technical, and entry level layouts. These are examples from the current catalog.</p></div><div className="rb-template-grid">{TEMPLATE_NAMES.map(name=><div className="rb-template" key={name}><span>{name}</span></div>)}</div><p className="rb-muted">Additional templates are available in the resume builder. Layouts vary; choose based on readability and the requirements of your application.</p></section>
      <section className="rb-section rb-feature-section"><div className="rb-heading"><span className="rb-eyebrow">RESUME EDITOR</span><h2>Edit, regenerate, save, and download your resume</h2></div><div className="rb-feature-grid">{[
        {title:'Edit resume content',text:'Update contact details, summary, experience, projects, skills, and section order.'},
        {title:'Customize the design',text:'Adjust font family, text sizes, colors, line height, spacing, padding, and page margins.'},
        {title:'Regenerate with AI',text:'Regenerate resume content and review the new version for accuracy.'},
        {title:'Review ATS oriented feedback',text:'Inspect resume analysis for structure, action verbs, measurable results, and keyword coverage.'},
        {title:'Export PDF or DOCX',text:'Download a PDF resume or Word compatible DOCX file after reviewing your content.'},
        {title:'Save your resume',text:'Use the Save action to retain your work in the application.'}
      ].map(item=><article className="rb-feature" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="rb-section rb-ats"><div><span className="rb-eyebrow">ATS AWARE, NOT ATS GUARANTEED</span><h2>Make your resume easier to review without sacrificing accuracy</h2><p>o1JobAid provides ATS oriented resume feedback and job description based tailoring. It can help surface relevant skills and improve resume presentation, but no tool can guarantee that every employer's ATS will accept, rank, or shortlist a resume.</p><a href="#resume-faqs" className="rb-inline-link" onClick={(event) => { event.preventDefault(); document.getElementById('resume-faqs')?.scrollIntoView({ behavior: 'smooth' }); }}>Read ATS resume FAQs </a></div><div className="rb-ats-card"><strong>Truthful qualifications first</strong><p>Job requirements inform tailoring. Your actual education, skills, and experience remain the foundation.</p></div></section>
      <FAQSection/>
      <section className="rb-cta"><h2>Ready to create your next resume?</h2><p>Build from scratch or tailor your resume to a role, then customize and export it.</p><a className="rb-button rb-cta-button" href="https://o1jobaid.com/app/agent">Open AI Resume Builder </a></section>
      
    </div>
  </main>;
}

export const resumePageSeo = {
  title: 'o1JobAid : Build an  ATS Friendly Resumes  For Free',
  description: 'Build a resume from scratch or tailor it to a job description with o1JobAid Agent ADUGU. Explore 46 templates, ATS feedback, editing, and PDF or DOCX downloads.',
  canonical: `${BASE}`,
  faqCount: FAQS.length,
};
export const resumePageFaqs = FAQS;