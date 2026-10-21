import React, { useEffect } from 'react';
import './job-matching.css';

const JOBS_URL = 'https://o1jobaid.com/app/jobs';
const faqs = [
  ['What is job matching analysis?', 'Job matching analysis compares your profile with the requirements in a specific job listing. o1 Job Aid shows an overall match percentage, relevant matched skills, and skill gaps to help you evaluate the opportunity.'],
  ['How does o1 Job Aid calculate my job match score?', 'The analysis considers skills supported by your profile alongside relevant experience and education requirements from the job listing. The overall percentage summarizes the alignment, while the breakdown helps you understand the result.'],
  ['Is a job match score the same as an ATS score?', 'No. A job match score estimates how closely your background aligns with a role. ATS compatibility concerns how an applicant tracking system reads and processes a resume. They are not interchangeable.'],
  ['Can I apply for a job if my match score is low?', 'Yes. A lower score may reflect missing qualifications, a career change, transferable experience, or details you have not added to your profile. Review the actual job requirements before deciding.'],
  ['Why is a skill I already have listed as a gap?', 'The analysis may not have found enough evidence of that skill in your profile. Add truthful details about how you used it in your work, projects, education, or certifications, then review the result.'],
  ['Does job matching analysis work for recent graduates and entry level applicants?', 'Yes. Education, internships, projects, certifications, and other profile information can provide evidence of relevant skills when professional experience is limited.'],
  ['Can I check my job match while browsing job listings?', 'The o1 Job Aid browser extension supports job matching analysis on supported listings. Compatibility can vary by job website.'],
  ['Does a high job match percentage guarantee an interview?', 'No. The percentage reflects profile to job alignment, not an employer’s hiring decision. Hiring outcomes depend on many factors beyond this analysis.'],
  ['What should I do after finding skill gaps?', 'Check whether the gaps reflect genuinely missing skills or missing profile details. Add accurate evidence when you have it, prepare examples for interviews, and use the gaps to guide learning where needed.'],
  ['Can I use my match analysis to tailor a resume or cover letter?', 'Yes. Use the job requirements and your verified qualifications to decide what to emphasize, then open the o1 Job Aid Agent to prepare a tailored resume or cover letter. Never claim skills or experience you do not have.'],
];
const features = [
  { title: 'Overall job match score', body: 'See a percentage summarizing how closely your profile aligns with the role, including skills, experience, and education.' },
  { title: 'Skills match analysis', body: 'Recognize job requirements supported by your work history, projects, certifications, and other profile information.' },
  { title: 'Experience alignment', body: 'Understand how your background relates to responsibilities, seniority, and domain expectations.' },
  { title: 'Skill gap analysis', body: 'Spot requirements without clear supporting evidence in your profile and decide what deserves a closer look.' },
];
const steps = [
  ['01', 'Build your profile', 'Add accurate skills, education, experience, projects, and certifications. More complete information gives the analysis more evidence.'],
  ['02', 'Explore a job', 'Open a role in o1 Job Aid or use the browser extension on a supported job listing.'],
  ['03', 'Review your match', 'Look at the overall percentage, skills and experience breakdown, matched skills, and gaps.'],
  ['04', 'Prepare your application', 'Prioritize relevant roles, fill in missing profile details, and tailor your resume or cover letter when ready.'],
];
function useMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'AI Job Matching Analysis & Skill Gap Checker | o1 Job Aid';
    const desc = document.querySelector('meta[name="description"]');
    const previousDesc = desc?.getAttribute('content');
    if (desc) desc.setAttribute('content', 'Compare your profile with job requirements. See your job match score, matched skills, and skill gaps with o1 Job Aid before you apply.');
    return () => { document.title = previousTitle; if (desc && previousDesc !== null) desc.setAttribute('content', previousDesc); };
  }, []);
}
export default function JobMatchingAnalysisPage() {
  useMetadata();
  return <main className="jm-page">
    <div className="jm-shell">
      
      <section className="jm-hero" aria-labelledby="jm-title"><div><span className="jm-eyebrow"> AI JOB MATCHING ANALYSIS</span><h1 id="jm-title">See how your profile fits the role before you apply</h1><p>Compare your skills, experience, and education with actual job requirements. Review your <strong>job match score</strong>, matched skills, and <strong>skill gaps</strong> to make more informed application decisions.</p><div className="jm-actions"><a className="jm-btn jm-btn-primary" href={JOBS_URL}>Analyze My Job Match </a><a className="jm-btn jm-btn-outline" href="#how-it-works" onClick={(event) => { event.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}>See How It Works</a></div><p className="jm-note"> Overall match · Skills alignment · Experience match · Skill gaps</p></div><div className="jm-hero-visual" aria-label="Illustrative job match analysis example"><div className="jm-preview-title"> Example match overview <span>Illustration</span></div><div className="jm-score"><span>Sample job match</span><strong>82%</strong><small>Illustrative score — not a live analysis</small></div><div className="jm-bars"><div><span>Skills alignment</span><b>86%</b></div><div className="jm-bar"><i style={{width:'86%'}}/></div><div><span>Experience alignment</span><b>70%</b></div><div className="jm-bar"><i style={{width:'70%'}}/></div><div><span>Education alignment</span><b>90%</b></div><div className="jm-bar"><i style={{width:'90%'}}/></div></div><p>Match details depend on your profile and the specific job description.</p></div></section>
      <section className="jm-section" aria-labelledby="features-title"><div className="jm-heading"><span className="jm-kicker">WHAT YOU CAN REVIEW</span><h2 id="features-title">Go beyond the job title. Understand your match.</h2><p>Two jobs with the same title can have very different requirements. Compare the role itself against your background, not just its name.</p></div><div className="jm-feature-grid">{features.map(({title,body})=><article className="jm-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><p className="jm-hint"> A reported skill gap means the analysis did not find supporting evidence in your profile. It does not necessarily mean you lack the skill.</p></section>
      <section id="how-it-works" className="jm-section jm-section-tint" aria-labelledby="how-title"><div className="jm-heading"><span className="jm-kicker">FOUR SIMPLE STEPS</span><h2 id="how-title">How job matching analysis works</h2><p>From your profile to a more focused job application.</p></div><div className="jm-steps">{steps.map(([n,title,body])=><article key={n}><span className="jm-step-number">{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="jm-centered"><a href={JOBS_URL} className="jm-btn jm-btn-primary">Check My Job Match </a></div></section>
      <section className="jm-section" aria-labelledby="benefits-title"><div className="jm-heading"><span className="jm-kicker">WHY IT HELPS</span><h2 id="benefits-title">Make your next application more focused</h2></div><div className="jm-benefits"><div><h3>Prioritize relevant opportunities</h3><p>Use the analysis alongside the job description to decide which roles deserve your attention.</p></div><div><h3>Recognize your strongest qualifications</h3><p>Identify the skills and experiences you can support with concrete examples.</p></div><div><h3>Prepare for potential questions</h3><p>Review gaps ahead of interviews and consider how your related experience applies.</p></div><div><h3>Tailor with clearer direction</h3><p>Understand what the role asks for before emphasizing achievements in your resume or cover letter.</p></div></div></section>
      <section className="jm-score-explainer" aria-labelledby="score-title"><div><h2 id="score-title">What does your job match score mean?</h2><p>Your job match score estimates how closely the information in your profile aligns with the job listing. It considers skills overlap, relevant experience, and education. The breakdown helps explain the result.</p><p>A lower score may indicate missing qualifications, a career transition, or profile details that have not been added yet. <strong>A higher score does not guarantee an interview or job offer.</strong></p></div></section>
      <section className="jm-section" id="job-match-faqs" aria-labelledby="faq-title"><div className="jm-heading"><span className="jm-kicker">COMMON QUESTIONS</span><h2 id="faq-title">Frequently asked questions about job matching analysis</h2><p>Clear answers about AI job matching, match percentages, skills alignment, and job compatibility.</p></div><div className="jm-faqs">{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section className="jm-final-cta"><h2>Understand your fit before your next application</h2><p>See where your background aligns, review the gaps, and prepare for your next opportunity with a clearer plan.</p><div className="jm-actions"><a href={JOBS_URL} className="jm-btn jm-btn-light">Analyze My Job Match </a></div></section>
      
    </div>
  </main>;
}