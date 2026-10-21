import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BarChart3, CalendarClock, CheckCircle2, ChevronRight,
  ClipboardList, Clock3, FileCheck2, Filter, Mail, MessageCircle,
  NotebookPen, Search, ShieldCheck, Sparkles, TrendingUp, UserRoundCheck,
} from 'lucide-react';
import './job-application-tracker.css';

const STATUS_URL = import.meta.env.VITE_JOB_STATUS_PAGE;
const AGENT_URL = import.meta.env.VITE_AGENT_PAGE;

const statuses = [
  ['Pending', 'Opportunities waiting in your application workflow', 'pending'],
  ['Initiated but not Applied', 'Applications started but not yet recorded as submitted', 'started'],
  ['Applied', 'Applications recorded as submitted', 'applied'],
  ['Selected for interview', 'Opportunities that have progressed to an interview', 'interview'],
  ['Accepted', 'Opportunities you have marked as accepted', 'accepted'],
  ['Rejected', 'Applications you have marked as rejected', 'rejected'],
];

const dashboard = [
  { icon: ClipboardList, title: 'Application pipeline', text: 'Review preparing, applied, interview, accepted, and rejected stages in one overview.' },
  { icon: TrendingUp, title: 'Application trends', text: 'Explore recorded activity by day, week, month, year, or a custom date range.' },
  { icon: BarChart3, title: 'Status breakdown', text: 'See the distribution of your recorded applications across key stages.' },
  { icon: Clock3, title: 'Recent activity', text: 'Review recent application status changes without opening each record.' },
  { icon: UserRoundCheck, title: 'Profile completion', text: 'Check your completion percentage and find information to add to your profile.' },
  { icon: CalendarClock, title: 'Estimated time saved', text: 'See the platform’s estimate, not a measurement of every minute spent applying.' },
];

const steps = [
  ['Start an application', 'Continue from a relevant job or send eligible roles into Auto Apply.'],
  ['Check its recorded status', 'Review whether the application is pending, started, or submitted.'],
  ['Update the record', 'Add notes and record interview selections, acceptances, or rejections.'],
  ['Save interview details', 'Enter the date, time, timezone, and optional round title.'],
  ['Review your dashboard', 'Check application trends, recent activity, and upcoming interviews.'],
  ['Choose your next step', 'Return to an unfinished application or prepare for an interview.'],
];

const questions = [
  'Show my applications from this week.',
  'Which applications have reached the interview stage?',
  'What interviews do I have coming up?',
  'Show applications I started but haven’t marked as applied.',
  'Summarize my job search progress.',
];

const faqs = [
  ['What is a job application tracker?', 'A job application tracker organizes the roles you are pursuing and their current stages. o1 Job Aid combines application records, notes, dashboard statistics, and interview schedules.'],
  ['How do I track my application status?', 'Open Jobs Status, find the relevant application, and review or change its status. You can also add notes to the record.'],
  ['Does o1 Job Aid automatically detect applications?', 'The extension includes submission detection for supported workflows. Detection can be incomplete, so you can manually update an application when necessary.'],
  ['Does adding a job to Auto Apply mean it has been submitted?', 'No. A queued or pending job has not necessarily been submitted. Review the application outcome and recorded status.'],
  ['Does the tracker automatically know when an employer rejects me or offers an interview?', 'Keep those statuses updated when you receive news from the employer. The current workflow should not be described as automatically reading all recruiter messages or employer portals.'],
  ['What can I see on the home dashboard?', 'You can review application pipeline counts, application trends, status distribution, recent application activity, profile completion, upcoming interview events, and estimated time saved.'],
  ['Can I schedule an interview inside o1 Job Aid?', 'You can record an interview’s date, time, timezone, and optional round title against an application, then update those details later.'],
  ['Will it send interview reminders?', 'It supports reminder emails 48 hours, 24 hours, and 1 hour before eligible scheduled interviews, subject to notification settings and the time remaining before the interview.'],
  ['Does it book interviews with recruiters or sync my calendar?', 'The verified workflow records and manages interview details in o1 Job Aid. Calendar synchronization and recruiter booking should not be advertised without a separately verified integration.'],
];

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ButtonLink({ href, section, secondary = false, children }) {
  const className = `jat-button ${secondary ? 'jat-button-secondary' : 'jat-button-primary'}`;
  if (section) {
    return <a className={className} href={`#${section}`} onClick={(event) => scrollToSection(event, section)}>{children}<ArrowRight size={17} aria-hidden="true" /></a>;
  }
  return <a className={className} href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></a>;
}

export default function JobApplicationTrackerPage() {
  useEffect(() => {
    const oldTitle = document.title;
    const title = 'Job Application Tracker & Interview Reminders | o1 Job Aid';
    const description = 'Track job applications, review your job search dashboard, and manage interview schedules with email reminders. Keep your search organized with o1 Job Aid.';
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute('content');
    meta.setAttribute('content', description);
    return () => {
      document.title = oldTitle;
      if (created) meta.remove();
      else if (previousDescription === null) meta.removeAttribute('content');
      else meta.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="jat-page">
      <div className="jat-container">
        <nav className="jat-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">o1 Job Aid</Link><ChevronRight size={14} aria-hidden="true" /><span>Job Application Tracker</span>
        </nav>
      </div>

      <section className="jat-container jat-hero" aria-labelledby="jat-title">
        <div className="jat-hero-copy">
          <span className="jat-eyebrow"><ClipboardList size={16} /> Job application tracker</span>
          <h1 id="jat-title">Your Job Applications, Progress, and <span>Interviews in One Place</span></h1>
          <p className="jat-lead">Keep track of where you applied, which opportunities are moving forward, and what needs your attention next.</p>
          <p>o1 Job Aid connects application status tracking, dashboard statistics, and interview schedules so you can manage your job search with a clearer view of your progress.</p>
          <div className="jat-actions">
            <ButtonLink href={STATUS_URL}>Start Tracking My Applications</ButtonLink>
            <ButtonLink section="dashboard" secondary>Explore the Dashboard</ButtonLink>
          </div>
          <p className="jat-hero-note"><CheckCircle2 size={17} /> Organize applications. Review your progress. Keep interview details close.</p>
        </div>
        <div className="jat-preview" aria-label="Illustrative application tracker preview">
          <div className="jat-preview-head"><span><BarChart3 size={18} /> Application overview</span><span className="jat-sample">Illustrative only</span></div>
          <div className="jat-preview-row"><span className="jat-preview-dot jat-dot-applied" /><div><strong>Product Analyst</strong><small>Example Company A</small></div><span className="jat-status-pill">Applied</span></div>
          <div className="jat-preview-row"><span className="jat-preview-dot jat-dot-interview" /><div><strong>Data Analyst</strong><small>Example Company B</small></div><span className="jat-status-pill jat-pill-interview">Interview</span></div>
          <div className="jat-preview-row"><span className="jat-preview-dot jat-dot-pending" /><div><strong>Business Analyst</strong><small>Example Company C</small></div><span className="jat-status-pill jat-pill-pending">Pending</span></div>
          <div className="jat-preview-footer"><CalendarClock size={17} /> Keep interview details connected to each application</div>
        </div>
      </section>

      <section className="jat-section jat-tint" id="tracking" aria-labelledby="jat-tracking-title">
        <div className="jat-container">
          <div className="jat-section-heading"><span className="jat-eyebrow">Application tracking</span><h2 id="jat-tracking-title">A Job Application Tracker Built Around Your Next Step</h2><p>When you're applying to several companies, it becomes difficult to remember what you started, submitted, or moved to an interview. The Jobs Status page brings those records together so you can review opportunities, update statuses, and save notes.</p></div>
          <div className="jat-tracking-layout">
            <div className="jat-panel"><h3>Follow each application's status</h3><div className="jat-status-list">{statuses.map(([name, detail, type]) => <div className="jat-status-item" key={name}><span className={`jat-status-marker jat-marker-${type}`} /><div><strong>{name}</strong><p>{detail}</p></div></div>)}</div></div>
            <div className="jat-tracking-side"><article className="jat-mini-card"><NotebookPen size={25} /><h3>Add notes to each opportunity</h3><p>Save recruiter feedback, interview preparation points, and details you want to remember.</p></article><article className="jat-mini-card"><Filter size={25} /><h3>Find the applications you need</h3><p>Filter by status and date range, including today, this week, this month, or a custom period.</p></article><ButtonLink href={STATUS_URL}>Organize My Applications</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="jat-section" id="dashboard" aria-labelledby="jat-dashboard-title"><div className="jat-container"><div className="jat-section-heading"><span className="jat-eyebrow">Job search dashboard</span><h2 id="jat-dashboard-title">See Your Job Search Progress at a Glance</h2><p>Turn recorded application activity into a practical overview of your pipeline, trends, recent changes, and upcoming interviews.</p></div><div className="jat-card-grid">{dashboard.map(({ icon: Icon, title, text }) => <article className="jat-feature-card" key={title}><span className="jat-icon"><Icon size={23} /></span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="jat-center-action"><ButtonLink href={STATUS_URL}>View My Job Search Dashboard</ButtonLink></div></div></section>

      <section className="jat-section jat-tint" id="interviews" aria-labelledby="jat-interview-title"><div className="jat-container jat-interview-layout"><div><span className="jat-eyebrow"><CalendarClock size={16} /> Interview tracker</span><h2 id="jat-interview-title">Keep Interview Dates, Times, and Rounds Organized</h2><p>Record interview details against the relevant application so the role, company, and schedule stay connected.</p><ul className="jat-check-list"><li><CheckCircle2 /> Save the interview date, time, and timezone</li><li><CheckCircle2 /> Add an optional round title, such as “Technical Interview”</li><li><CheckCircle2 /> Update saved details when plans change</li><li><CheckCircle2 /> Review upcoming events and countdown labels</li></ul><p className="jat-note">Updating a saved interview changes your tracking record. Confirm schedule changes with the employer separately.</p><ButtonLink href={STATUS_URL}>Organize My Interviews</ButtonLink></div><div className="jat-reminder-card"><span className="jat-icon"><Mail size={25} /></span><h3>Interview reminder emails</h3><p>For eligible saved interviews, reminders are supported at:</p><div className="jat-reminder-times"><div><strong>48</strong><span>hours before</span></div><div><strong>24</strong><span>hours before</span></div><div><strong>1</strong><span>hour before</span></div></div><p className="jat-small">Reminders require email notifications to be enabled and the interview to be saved before the reminder time. Schedule updates recalculate remaining reminders.</p></div></div></section>

      <section className="jat-section" id="how-it-works" aria-labelledby="jat-steps-title"><div className="jat-container"><div className="jat-section-heading"><span className="jat-eyebrow">Connected workflow</span><h2 id="jat-steps-title">From Application to Interview, Keep the Context Together</h2></div><div className="jat-steps">{steps.map(([title, text], index) => <article className="jat-step" key={title}><span className="jat-step-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="jat-center-note"><ShieldCheck size={17} /> Supported extension submission detection can help record applications. If detection misses one, update its status manually.</p></div></section>

      <section className="jat-section jat-tint" aria-labelledby="jat-adugu-title"><div className="jat-container jat-adugu-layout"><div><span className="jat-eyebrow"><Sparkles size={16} /> ADUGU assistant</span><h2 id="jat-adugu-title">Ask ADUGU About Your Application Progress</h2><p>Use the ADUGU assistant to retrieve and summarize application information recorded in your o1 Job Aid account.</p><ButtonLink href={AGENT_URL}>Ask ADUGU</ButtonLink></div><div className="jat-prompts"><div className="jat-prompts-title"><MessageCircle size={19} /> Try asking ADUGU</div><ul>{questions.map(question => <li key={question}>“{question}”</li>)}</ul></div></div></section>

      <section className="jat-section" id="faq" aria-labelledby="jat-faq-title"><div className="jat-container jat-faq-wrap"><div className="jat-section-heading"><span className="jat-eyebrow">Frequently asked questions</span><h2 id="jat-faq-title">Job Application Tracking and Interview FAQs</h2></div><div className="jat-faq-list">{faqs.map(([question, answer]) => <details className="jat-faq" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="jat-container jat-closing" aria-labelledby="jat-closing-title"><div className="jat-closing-inner"><span className="jat-eyebrow"><FileCheck2 size={16} /> Stay organized</span><h2 id="jat-closing-title">Know Where Your Job Search Stands</h2><p>Keep your applications organized, understand your progress, and return to your next interview with the details you need.</p><div className="jat-actions"><ButtonLink href={STATUS_URL}>Start Tracking My Applications</ButtonLink><ButtonLink href={AGENT_URL} secondary>Meet ADUGU</ButtonLink></div></div></section>
      
      <nav
        className="jat-container jat-related"
        aria-label="Explore related tools"
      >
        <strong>Explore related tools</strong>

        {[
          ["/adugu-ai-assistant", "ADUGU AI Assistant"],
          ["/job-matching-analysis", "Job Matching Analysis"],
          ["/ai-resume-builder", "AI Resume Builder"],
          ["/auto-apply", "Auto Apply & Autofill"],
          ["/chrome-extension", "Chrome Extension"],
        ].map(([path, label]) => (
          <Link
            key={path}
            to={path}
            onClick={() => window.scrollTo(0, 0)}
          >
            {label}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        ))}
      </nav>

    </main>
  );
}
