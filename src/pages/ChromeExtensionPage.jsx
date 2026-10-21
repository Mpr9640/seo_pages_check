import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Chrome, Sparkles, Search, FileText, Users, MousePointerClick,
  ListChecks, CheckCircle2, AlertCircle, ShieldCheck, ClipboardList,
  ChevronRight, BriefcaseBusiness, LayoutDashboard, Settings2,
  ExternalLink, LockKeyhole, Clock3, CircleHelp, ScanSearch
} from 'lucide-react';
import './chrome-extension.css';

const STORE_URL = import.meta.env.VITE_CHROME_EXTENSION_URL;
const ACCOUNT_URL = import.meta.env.VITE_AGENT_PAGE;

const capabilities = [
  { icon: ScanSearch, title: 'Check your job match', description: 'Review overall alignment, skills, experience, education, and gaps against the role you are viewing.', to: '/job-matching-analysis', link: 'Explore Job Matching Analysis' },
  { icon: FileText, title: 'Prepare tailored documents', description: 'Start a role-specific resume or cover letter using your saved profile and the job context.', to: '/ai-resume-builder', link: 'Explore Resume Builder' },
  { icon: Users, title: 'Find potential contacts', description: 'Review available names and LinkedIn links for potential reference or referral research. Outreach is up to you.', to: null, link: null },
  { icon: MousePointerClick, title: 'Autofill supported applications', description: 'Fill supported fields and screening questions using saved information and AI-assisted suggestions.', to: '/auto-apply', link: 'Explore Application Autofill' },
  { icon: ListChecks, title: 'Follow application progress', description: 'See supported steps, retry unanswered fields, and identify forms that need manual attention.', to: '/auto-apply', link: 'Explore Auto Apply' },
  { icon: LayoutDashboard, title: 'Track recorded outcomes', description: 'Review recorded submissions, update missed statuses manually, and manage your application pipeline.', to: '/job-application-tracker', link: 'Explore Application Tracker' }
];

const steps = [
  ['Install the extension', 'Add o1 Job Aid from the Chrome Web Store.'],
  ['Sign in', 'Connect your o1 Job Aid account for personalized features.'],
  ['Complete your profile', 'Add accurate experience, skills, contact details, and resume information.'],
  ['Open a supported job page', 'Visit a job listing or employer application page.'],
  ['Choose your next action', 'Review matching, create documents, find contacts, or start autofill.'],
  ['Review and finish', 'Check populated answers and complete any steps requiring your attention.']
];

const faqs = [
  ['What does the o1 Job Aid Chrome extension do?', 'It brings job matching, skill-gap review, reference search, tailored document creation, supported application autofill, and submission tracking into a browser side panel.'],
  ['Does it work on every job website?', 'No. Coverage depends on the website, page, installed extension version, and feature. Matching, autofill, uploads, and Auto Apply can have different availability.'],
  ['Can it autofill Workday applications?', 'The extension source includes Workday-specific form, upload, navigation, validation, and submission handling. Availability depends on the employer’s application flow and installed release. Sign-in or manual steps may be required.'],
  ['Can it fill application screening questions?', 'For supported questions, it uses your saved profile, compatible reusable answers, and AI-assisted suggestions. Review answers and supply missing information yourself.'],
  ['Does it automatically submit applications?', 'Supported workflows can submit after checks and a cancellable countdown. Other applications need review or manual completion. An autofill run or queue entry is not confirmation of submission.'],
  ['Can I use it for a single application?', 'Yes. You can start autofill on an individual supported application without launching a batch queue.'],
  ['Can it create a tailored resume while I view a job?', 'Yes. It can start document creation using the active role and saved profile, and may ask you to paste the complete job description if extraction is insufficient.'],
  ['Will it upload every generated document automatically?', 'No. Document generation and attachment are separate. Upload depends on the site, form field, document type, and workflow.'],
  ['Does reference search contact people for me?', 'No. It returns available contact information for you to review; it does not send outreach or guarantee a referral.'],
  ['Does it bypass CAPTCHA or account verification?', 'No. You may need to complete sign-in or verification steps yourself.'],
  ['Is the extension free to use?', 'Installation and feature pricing are separate. AI actions may consume account credits; check current pricing and the displayed action cost.'],
  ['Why does the extension need website access?', 'It needs access to supported pages to read job content, identify application controls, fill supported fields, and observe submission signals. Review the Web Store disclosure and privacy policy for details.'],
  ['What if an application is not detected as submitted?', 'Check the employer’s confirmation, then use Mark applied or update your application record manually if needed.']
];

const platforms = [
  'Greenhouse', 'Lever', 'Ashby', 'Workday', 'SmartRecruiters', 'Workable',
  'iCIMS', 'Jobvite', 'Paylocity', 'Teamtailor', 'Pinpoint', 'Oracle',
  'BrassRing', 'Rippling', 'BambooHR', '50+ more'
];

function ScrollLink({ target, children, className = '' }) {
  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return <a className={className} href={`#${target}`} onClick={handleClick}>{children}</a>;
}

function StoreButton({ children = 'Add to Chrome', secondary = false }) {
  return (
    <a className={`ce-button ${secondary ? 'ce-button-outline' : 'ce-button-primary'}`} href={STORE_URL} target="_blank" rel="noopener noreferrer">
      <Chrome size={19} aria-hidden="true" />{children}<ExternalLink size={15} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="ce-section-heading"><span className="ce-eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export default function ChromeExtensionPage() {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = 'Job Application Autofill Chrome Extension | o1 Job Aid';
    let meta = document.querySelector('meta[name="description"]');
    const oldDescription = meta?.getAttribute('content');
    const created = !meta;
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.setAttribute('content', 'Match jobs, create tailored resumes and cover letters, find reference contacts, and autofill supported applications with the o1 Job Aid Chrome extension.');
    return () => {
      document.title = oldTitle;
      if (created) meta.remove();
      else if (oldDescription !== null && oldDescription !== undefined) meta.setAttribute('content', oldDescription);
    };
  }, []);

  return (
    <main className="ce-page">
      <div className="ce-container ce-breadcrumb"><Link to="/">o1 Job Aid</Link><ChevronRight size={14} aria-hidden="true" /><span>Chrome Extension</span></div>

      <section className="ce-container ce-hero" aria-labelledby="ce-title">
        <div className="ce-hero-copy">
          <span className="ce-eyebrow"><Sparkles size={16} /> Job application assistant in your browser</span>
          <h1 id="ce-title">Your Chrome Extension for <span>Smarter Job Applications</span></h1>
          <p className="ce-lead">Understand how a role fits your background, create tailored application documents, and fill supported forms while you browse.</p>
          <p>The o1 Job Aid Chrome extension connects job matching, reference search, resume and cover letter creation, application autofill, and tracking in one side panel.</p>
          <div className="ce-actions"><StoreButton /><ScrollLink target="how-it-works" className="ce-button ce-button-outline">See How It Works <ArrowRight size={17} /></ScrollLink></div>
          <p className="ce-subnote"><ShieldCheck size={16} /> Built for supported job boards and employer application systems. Availability varies by site and workflow.</p>
        </div>
        <div className="ce-preview" aria-label="Illustrative extension side panel preview">
          <div className="ce-preview-top"><div className="ce-preview-brand"><span><Sparkles size={20}/></span><strong>o1 Job Aid</strong></div><span className="ce-preview-tag">Illustrative preview</span></div>
          <div className="ce-preview-job"><small>ROLE OVERVIEW</small><strong>Product Analyst</strong><span>Example company · Remote</span></div>
          <div className="ce-preview-score"><div className="ce-score-circle">78<span>%</span></div><div><strong>Job match overview</strong><p>Sample score only</p><div className="ce-score-bar"><span /></div></div></div>
          <div className="ce-preview-tiles"><span><CheckCircle2 size={15}/> Matched skills</span><span><Search size={15}/> Skill gaps</span><span><FileText size={15}/> Resume tools</span><span><MousePointerClick size={15}/> Autofill</span></div>
          <div className="ce-preview-action">Review your application <ArrowRight size={17}/></div>
          <p className="ce-preview-foot">Example interface, not live extension data</p>
        </div>
      </section>

      <section className="ce-tint ce-section" aria-labelledby="ce-intro-heading"><div className="ce-container ce-intro"><div><span className="ce-eyebrow">One connected workflow</span><h2 id="ce-intro-heading">Move From Job Listing to Application With Less Repeated Work</h2></div><div><p>Job searching often means switching between descriptions, resumes, company pages, and forms asking for details you have already entered.</p><p>On supported pages, open the extension to review the role, understand your match, prepare documents, and begin autofill. An accurate saved profile helps each step work with the right information.</p></div></div></section>

      <section className="ce-container ce-section" id="features" aria-labelledby="ce-features-heading"><SectionHeading eyebrow="What the extension can do" title="Your Next Application Step, in One Side Panel" description="Use the available tools for the job or application you are viewing. Each feature has its own site and workflow requirements." /><div className="ce-feature-grid">{capabilities.map(({ icon: Icon, title, description, to, link }) => <article className="ce-feature" key={title}><div className="ce-feature-icon"><Icon size={23}/></div><h3>{title}</h3><p>{description}</p>{to && <Link to={to} className="ce-text-link">{link}<ArrowRight size={16}/></Link>}</article>)}</div></section>

      <section className="ce-tint ce-section" aria-labelledby="ce-application-heading"><div className="ce-container ce-two-col"><div><span className="ce-eyebrow">Form filling and progress</span><h2 id="ce-application-heading">Autofill Supported Forms. Stay in Control.</h2><p>The extension can recognize application fields and prepare answers using your saved profile, reusable answers, and AI-assisted suggestions. Supported controls include text inputs, dropdowns, dates, radio buttons, checkboxes, repeated sections, and some upload fields.</p><p>Check populated information before it is used. Account passwords and verification steps remain your responsibility.</p><Link className="ce-text-link" to="/auto-apply">Explore Job Application Autofill <ArrowRight size={16}/></Link></div><div className="ce-detail-card"><h3>Follow the application as it progresses</h3><ul><li><CheckCircle2 size={18}/> View the current autofill stage</li><li><CheckCircle2 size={18}/> Identify fields needing attention</li><li><CheckCircle2 size={18}/> Stop or skip where supported</li><li><CheckCircle2 size={18}/> Retry eligible unanswered fields without submitting</li><li><AlertCircle size={18}/> Complete sign-in, verification, or unsupported steps yourself</li></ul><p>Supported flows can submit automatically after checks and a cancellable countdown. Autofill alone does not confirm submission.</p></div></div></section>

      <section className="ce-container ce-section" aria-labelledby="ce-queue-heading"><div className="ce-two-col"><div className="ce-queue-visual"><span className="ce-visual-label">Illustrative queue outcomes</span><div><CheckCircle2 size={20}/><span>Submitted</span><small>Submission detected</small></div><div><Clock3 size={20}/><span>Needs review</span><small>User action required</small></div><div><AlertCircle size={20}/><span>Failed</span><small>Retry or investigate</small></div></div><div><span className="ce-eyebrow">Batch application workflow</span><h2 id="ce-queue-heading">Queue Eligible Jobs Through Auto Apply</h2><p>Select eligible roles in the web app and send them to the extension queue. The extension opens supported application destinations, runs autofill, and monitors each attempt.</p><p>Queue eligibility is narrower than general extension coverage. A supported job page is not necessarily eligible for batch Auto Apply, and a queued entry is not proof of submission.</p><Link to="/auto-apply" className="ce-text-link">Explore Auto Apply <ArrowRight size={16}/></Link></div></div></section>

      <section className="ce-tint ce-section" aria-labelledby="ce-coverage-heading"><div className="ce-container"><SectionHeading eyebrow="Platform coverage" title="Built for Different Job Boards and Application Platforms" description="The extension source contains configuration or specialized handling for these systems. This list does not mean every feature is tested or available on every employer’s page."/><div className="ce-platforms">{platforms.map(name => <span key={name}>{name}</span>)}</div><div className="ce-coverage-note"><ShieldCheck size={21}/><p><strong>Feature coverage varies.</strong> Job recognition, matching, document creation, references, autofill, uploads, multi-step navigation, automatic submission, submission detection, and queue eligibility must be checked separately for a particular site and release.</p></div></div></section>

      <section className="ce-container ce-section" id="how-it-works" aria-labelledby="ce-how-heading"><SectionHeading eyebrow="Getting started" title="Get Started With the o1 Job Aid Chrome Extension" description="From installation to reviewing your first supported application."/><div className="ce-steps">{steps.map(([title, detail], index) => <div className="ce-step" key={title}><span className="ce-step-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div><div className="ce-setup-footer"><p><LockKeyhole size={17}/> AI actions may consume account credits. Check the displayed cost and current pricing before starting a paid action.</p><StoreButton>Install From Chrome Web Store</StoreButton></div></section>

      <section className="ce-tint ce-section" aria-labelledby="ce-faq-heading"><div className="ce-container ce-faq-wrap"><SectionHeading eyebrow="Frequently asked questions" title="Chrome Extension Questions" description="Clear answers about site coverage, autofill, document handling, submission, and privacy."/><div className="ce-faq-list">{faqs.map(([question, answer]) => <details className="ce-faq" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="ce-container ce-closing" aria-labelledby="ce-closing-heading"><div className="ce-closing-inner"><span className="ce-eyebrow"><Chrome size={17}/> Your browser-side job search toolkit</span><h2 id="ce-closing-heading">Bring Your Job Search Tools to the Application Page</h2><p>Review the fit. Prepare the documents. Fill supported forms. Keep the outcome connected to your search.</p><div className="ce-actions"><StoreButton>Add o1 Job Aid to Chrome</StoreButton><a className="ce-button ce-button-outline" href={ACCOUNT_URL}>Create My o1 Job Aid Account <ArrowRight size={17}/></a></div><small>An account is required for personalized services. Features vary by website and extension version; AI actions may require credits.</small></div></section>

      <nav className="ce-container ce-related" aria-label="Related o1 Job Aid features"><strong>Explore related tools</strong><Link to="/job-matching-analysis">Job Matching <ArrowRight size={14}/></Link><Link to="/ai-resume-builder">AI Resume Builder <ArrowRight size={14}/></Link><Link to="/auto-apply">Auto Apply <ArrowRight size={14}/></Link><Link to="/job-application-tracker">Application Tracker <ArrowRight size={14}/></Link><Link to="/adugu-ai-assistant">ADUGU <ArrowRight size={14}/></Link></nav>
    </main>
  );
}
