import React from "react";
import "./auto-apply.css";

const JOBS_URL = "https://o1jobaid.com/app/jobs";
// Replace with the verified extension store URL when integrating.
const EXTENSION_URL = 'https://chromewebstore.google.com/detail/o1-job-aid-ai-matching-at/gmjpincnpoicfljljfldcodlglhdefem';

const workflows = [
  { title: "Individual application autofill", who: "Open a supported job application and start Autofill from the extension.", action: "The extension recognizes fields, fills supported answers, handles available documents, and progresses through supported steps." },
  { title: "Auto Apply queue", who: "Select eligible jobs in the web app and launch a batch.", action: "The extension processes selected application links, records outcomes, and flags applications that need your attention." },
];

const steps = [
  ["Complete your profile", "Add contact information, work history, education, skills, links, and application preferences."],
  ["Find relevant opportunities", "Review jobs and matching information to choose roles that suit your background."],
  ["Switch to Auto Apply", "See jobs eligible for the extension queue; eligibility is narrower than general autofill support."],
  ["Select your jobs", "Choose roles to process. The app validates links and removes duplicate application URLs."],
  ["Review document preferences", "Check resume and cover-letter generation preferences where those options are available."],
  ["Launch the queue", "Send selected application links and job details to your installed browser extension."],
  ["Open application pages", "The extension follows supported routes and identifies sign-in or verification steps."],
  ["Autofill and progress", "Supported fields, documents, and steps are handled; automatic submission may be attempted where supported."],
  ["Review the outcome", "See submitted, needs-review, or failed results and return to unfinished applications."],
];

const individualSteps = [
  ["Open a supported application", "Navigate to the employer form and start Autofill from the extension."],
  ["Load your information", "Use your signed-in profile or a user-bound cached profile when applicable."],
  ["Recognize the form", "Inspect labels, input types, options, and supported application sections."],
  ["Match answers", "Use profile data, reusable answers, field mappings, and AI-assisted suggestions."],
  ["Fill supported controls", "Populate text inputs, selects, dates, radio buttons, checkboxes, and supported repeated sections."],
  ["Handle documents", "Attach available resumes or cover letters; supported workflows may generate documents when needed."],
  ["Check and continue", "Inspect validation messages, attempt supported corrections, and proceed through supported steps."],
  ["Submit or request review", "Supported flows can submit after checks and a cancellable countdown; other applications need user attention."],
];

const coverage = [
  ["Contact details", "Name, email, phone"],
  ["Location", "Address, city, state, postal code, country"],
  ["Professional links", "LinkedIn, GitHub, portfolio"],
  ["Work experience", "Employer, title, dates, responsibilities, achievements"],
  ["Education", "Institution, degree, dates, location"],
  ["Qualifications", "Skills, projects, certifications"],
  ["Job preferences", "Preferred roles, locations, remote work, relocation"],
  ["Eligibility", "Work authorization and sponsorship information"],
  ["Compensation", "Saved salary expectations"],
  ["Application questions", "Supported screening questions and hiring-manager messages"],
  ["Documents", "Resume and cover letter uploads on supported forms"],
];

const features = [
  ["Application question assistance", "Prepare supported answers using your profile and application context."],
  ["Reusable answers", "Reuse compatible answers for recurring application questions."],
  ["Multi-step support", "Continue through supported application sections beyond the first screen."],
  ["Document handling", "Attach available documents and use supported generation workflows."],
  ["Validation and recovery", "Detect some missing or rejected values and attempt supported corrections."],
  ["Progress visibility", "See the current stage and fields requiring attention."],
  ["Review-only retry", "Retry unanswered fields without advancing or submitting."],
  ["Queue tracking", "Distinguish successful submissions from review-needed and failed attempts."],
];

const platforms = ["Greenhouse", "Lever", "Ashby", "Workday", "SmartRecruiters", "Workable", "iCIMS", "Oracle", "SAP SuccessFactors", "Jobvite", "Paylocity", "50+ other platforms"];

const faqs = [
  ["What is job application autofill?", "Job application autofill uses saved candidate information to populate supported application forms. o1 Job Aid also supports certain application questions, document uploads, and multi-step workflows."],
  ["What is the difference between Auto Apply and Autofill?", "Autofill works on one supported application at a time. Auto Apply queues selected eligible jobs and uses the extension to process each application workflow."],
  ["Does o1 Job Aid submit applications automatically?", "Yes, in supported flows. Automatic submission follows submission checks and a countdown that you can cancel. Other applications may require manual review."],
  ["Does every supported website work with the Auto Apply queue?", "No. Individual autofill support and batch queue eligibility are different capabilities. A platform may support autofill without supporting queued applications."],
  ["Can it answer job application questions?", "For supported questions, it uses your profile, reusable answers, and AI-assisted suggestions. Review the information for accuracy and provide missing details."],
  ["Can it upload my resume and cover letter?", "It can attach available documents on supported forms. Document selection, generation, and upload depend on the application platform and workflow."],
  ["What if an application requires sign-in or verification?", "You may need to sign in or complete verification yourself, then continue or retry the application. The tool does not bypass CAPTCHA or account verification."],
  ["Can I retry unanswered fields without submitting?", "Yes. Review-only retry attempts to fill unanswered fields without moving to another step or submitting the application."],
  ["Does Auto Apply guarantee successful applications?", "No. Website behavior and employer requirements vary. The queue records submitted, needs-review, and failed outcomes so you can follow up."],
  ["Which applicant tracking systems does autofill support?", "The extension includes platform-specific handling for systems such as Greenhouse, Lever, Ashby, Workday, SmartRecruiters, Workable, iCIMS, Oracle, SAP SuccessFactors, Jobvite, and Paylocity. Features vary by site and form."],
  ["Is this an AI job application assistant or just a form filler?", "It goes beyond basic field entry with supported AI-assisted answers, document handling, multi-step navigation, validation, and application queue tracking."],
  ["Can I autofill work authorization and salary questions?", "Supported forms may use saved authorization, sponsorship, and salary-preference information. Always verify the answers are correct for the specific application."],
];

function Button({ children, href = JOBS_URL, secondary = false }) {
  return (
    <a className={`aa-button ${secondary ? "aa-button-secondary" : "aa-button-primary"}`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Heading({ eyebrow, title, children }) {
  return <div className="aa-heading">{eyebrow && <span className="aa-eyebrow">{eyebrow}</span>}<h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function AutoApplyPage() {
  return (
    <main className="aa-page" id="top">
      <div className="aa-container">
        
        <section className="aa-hero" aria-labelledby="aa-title">
          <div>
            <span className="aa-eyebrow"> AI job application assistant</span>
            <h1 id="aa-title">Auto Apply to Supported Jobs. <span>Autofill Applications With Your Profile.</span></h1>
            <p>Stop entering the same information into every application. o1 Job Aid uses your saved profile to fill supported job application forms, prepare documents, and move through application steps.</p>
            <p>Apply to an individual role through the browser extension, or select eligible jobs in the web app and send them to your application queue.</p>
            <div className="aa-actions"><Button>Start Applying With o1 Job Aid</Button><Button secondary href={EXTENSION_URL}>Get the Chrome Extension</Button></div>
            <p className="aa-caption"> Follow application progress and return to steps that need your attention.</p>
          </div>
          <div className="aa-preview" aria-label="Illustrative application queue statuses, not live user data">
            <div className="aa-preview-top"><span> Application queue</span><span className="aa-demo">Illustrative example</span></div>
            <div className="aa-preview-item"><div><strong>Software Engineer</strong><small>Application workflow</small></div><span className="aa-status aa-status-success">Submitted</span></div>
            <div className="aa-preview-item"><div><strong>Product Analyst</strong><small>Verification required</small></div><span className="aa-status aa-status-review">Needs review</span></div>
            <div className="aa-preview-item"><div><strong>Data Specialist</strong><small>Form could not complete</small></div><span className="aa-status aa-status-failed">Failed</span></div>
            <p className="aa-preview-foot">Starting autofill is not the same as submitting an application.</p>
          </div>
        </section>
      </div>

      <section className="aa-section aa-section-tint" id="workflows"><div className="aa-container">
        <Heading eyebrow="Choose your workflow" title="Two Ways to Simplify Your Job Applications">Use individual job application autofill or queue eligible jobs for Auto Apply. Both use the extension's autofill engine.</Heading>
        <div className="aa-grid aa-grid-2">{workflows.map(({ title, who, action }) => <article className="aa-card" key={title}><h3>{title}</h3><p><strong>You:</strong> {who}</p><p><strong>o1 Job Aid:</strong> {action}</p></article>)}</div>
        <p className="aa-note"> Automatic submission is available in supported flows. Unresolved application steps may require your attention.</p>
      </div></section>

      <section className="aa-section" id="how-auto-apply-works"><div className="aa-container">
        <Heading eyebrow="Batch workflow" title="How Auto Apply Works">From selecting opportunities to checking outcomes, stay in control of the jobs you choose.</Heading>
        <ol className="aa-step-grid">{steps.map(([title, description], index) => <li className="aa-step" key={title}><span className="aa-step-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        <div className="aa-inline-action"><Button>Explore Jobs for Auto Apply</Button></div>
      </div></section>

      <section className="aa-section aa-section-tint" id="how-autofill-works"><div className="aa-container">
        <Heading eyebrow="Single-application workflow" title="How Job Application Autofill Works">Use the extension on an individual supported job application, from reading the form through final review.</Heading>
        <div className="aa-grid aa-grid-2">{individualSteps.map(([title, description], index) => <article className="aa-mini-step" key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div></section>

      <section className="aa-section" id="profile-fields"><div className="aa-container">
        <Heading eyebrow="Saved candidate information" title="Use Your Saved Profile Across Applications">Fields depend on the form, platform support, and the information you provide. Always review sensitive or eligibility-related answers.</Heading>
        <div className="aa-table-scroll"><table className="aa-table"><caption className="aa-sr-only">Profile information that supported job applications may autofill</caption><thead><tr><th scope="col">Information</th><th scope="col">Examples</th></tr></thead><tbody>{coverage.map(([type, examples]) => <tr key={type}><th scope="row">{type}</th><td>{examples}</td></tr>)}</tbody></table></div>
        <p className="aa-footnote">Some applications request voluntary demographic information. Responses depend on the information supplied and the form. Password fields are excluded from AI-answer payloads; you manage your own account credentials.</p>
      </div></section>

      <section className="aa-section aa-section-tint" id="features"><div className="aa-container">
        <Heading eyebrow="Capabilities" title="More Than Basic Form Filling">Application automation with support for questions, documents, multi-step forms, and outcome tracking.</Heading>
        <div className="aa-grid aa-grid-4">{features.map(([title, description]) => <article className="aa-card aa-feature" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="aa-section" id="platforms"><div className="aa-container">
        <Heading eyebrow="Platform compatibility" title="Built for Different Job Application Platforms">The extension includes platform-specific handling for these systems. Support is not universal: form layouts, document uploads, multi-step navigation, automatic submission, and queue eligibility vary.</Heading>
        <div className="aa-platform-list">{platforms.map(platform => <span className="aa-platform" key={platform}>{platform}</span>)}</div>
        <div className="aa-table-scroll"><table className="aa-table aa-capability-table"><caption>Capability distinctions (not platform-by-platform support claims)</caption><thead><tr><th scope="col">Capability</th><th scope="col">Availability</th></tr></thead><tbody>
          <tr><th scope="row">Individual autofill</th><td>Supported forms and fields only</td></tr>
          <tr><th scope="row">Document upload</th><td>Supported document controls and workflows only</td></tr>
          <tr><th scope="row">Multi-step navigation</th><td>Supported application layouts only</td></tr>
          <tr><th scope="row">Automatic submission</th><td>Supported flows after submission checks</td></tr>
          <tr><th scope="row">Auto Apply queue</th><td>Eligible jobs only; narrower than general autofill coverage</td></tr>
        </tbody></table></div>
        <p className="aa-footnote">A verified platform-by-platform feature matrix should be added after live compatibility testing. A platform name does not promise that every capability works on every employer form.</p>
      </div></section>

      <section className="aa-section aa-section-tint" id="tracking"><div className="aa-container">
        <Heading eyebrow="Clear outcomes" title="Know Which Applications Are Complete">Starting autofill does not mean your application has been submitted. The queue separates completed submissions from work that needs follow-up.</Heading>
        <div className="aa-grid aa-grid-3">
          <article className="aa-card"><span className="aa-status aa-status-success">Submitted</span><h3>Submission detected</h3><p>The workflow found evidence of a successful application submission.</p></article>
          <article className="aa-card"><span className="aa-status aa-status-review">Needs review</span><h3>Action required</h3><p>Sign-in, verification, missing documents, or unresolved form steps may require your attention.</p></article>
          <article className="aa-card"><span className="aa-status aa-status-failed">Failed</span><h3>Retry or complete manually</h3><p>The application attempt could not start or finish successfully.</p></article>
        </div>
      </div></section>

      <section className="aa-section" id="faq"><div className="aa-container">
        <Heading eyebrow="Help & answers" title="Job Application Autofill & Auto Apply FAQs">Answers to common questions about automatic job applications, Chrome extension autofill, compatibility, and submission.</Heading>
        <div className="aa-faq-list">{faqs.map(([question, answer]) => <details className="aa-faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </div></section>

      <section className="aa-container"><div className="aa-final-cta"><span className="aa-eyebrow">Get started</span><h2>Spend Less Time Repeating Your Application Details</h2><p>Build your profile once, choose relevant jobs, and let o1 Job Aid handle supported application steps while you follow the results.</p><div className="aa-actions"><Button>Start Using Auto Apply</Button><Button secondary href={EXTENSION_URL}>Explore the Autofill Extension</Button></div></div></section>
    </main>
  );
}
