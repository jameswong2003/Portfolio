import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import timelineElements from "./components/timelineElements";
import openpollImg from "../assets/openpoll.png";
import resumePdf from "../assets/James-Wong-Resume.pdf";
import portrait from "../assets/About_me_img.png";
import "./PortfolioSite.css";

const username = "jameswong2003";
const skills = ["Java", "TypeScript", "Python", "Go", "JavaScript", "Spring Boot", "React", "Next.js", "Node.js", "Flask", "AWS", "Docker", "Kubernetes", "Kafka", "MongoDB", "Firebase"];
const projects = [
  { name: "SoleSync", description: "Revenue SaaS platform used by 10+ users, automating pricing and inventory syncing across marketplaces. Scaled to $1.2M in GMV with 7,500+ sales since launch.", tech: ["TypeScript", "Next.js", "AWS", "Flask", "MongoDB"], link: "https://solesync-app.vercel.app/", kind: "SaaS platform", color: "violet" },
  { name: "OpenPoll", description: "Open-source live-polling app integrated in 5+ classrooms, providing students a free solution for tracking grades and attendance in real time.", tech: ["Next.js", "TypeScript", "Firebase"], link: "https://github.com/s-alad/openpoll", kind: "Open source", image: openpollImg },
  { name: "JobWatch Engine", description: "Asynchronous Python engine that polls supported company job-board APIs, categorizes new postings, stores them in SQLite, and sends grouped email digests with scrape errors.", tech: ["Python", "asyncio", "SQLite", "REST APIs", "SMTP"], link: "https://github.com/jameswong2003/jobwatch-engine", kind: "Automation", color: "blue" },
  { name: "MapReduce & RAFT", description: "Fault-tolerant distributed system processing hundreds of gigabytes of data, with RAFT consensus algorithm verified by the MIT 6.824 distributed systems test suite.", tech: ["Go", "Distributed Systems"], link: `https://github.com/${username}`, kind: "Distributed systems", color: "orange" },
];

function PageTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <PageTop />
      <header className="site-header">
        <Link className="wordmark" to="/" onClick={closeMenu}><span className="wordmark-mark">JW</span><span>james.wong<span className="wordmark-dot">.dev</span></span></Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <NavItem to="/" onClick={closeMenu}>Home</NavItem><NavItem to="/about" onClick={closeMenu}>About</NavItem><NavItem to="/projects" onClick={closeMenu}>Projects</NavItem><NavItem to="/resume" onClick={closeMenu}>Resume</NavItem>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer"><div className="footer-inner"><span>© {new Date().getFullYear()} James Wong</span><span>Built with React <span className="accent">{'//'}</span> New York, NY</span><SocialLink kind="github" href={`https://github.com/${username}`} target="_blank">GitHub</SocialLink></div></footer>
    </div>
  );
}

function NavItem({ to, children, onClick }) { return <NavLink to={to} end={to === "/"} onClick={onClick} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>{children}</NavLink>; }
function SocialIcon({ kind }) {
  const paths = {
    github: <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.62 1.21 3.26.93.1-.73.4-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.3-2.62 5.24-5.12 5.51.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />,
    linkedin: <><path d="M4.6 3.2a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0ZM1.5 6.3h2.9v16.2H1.5zM8 6.3h2.8v2.2h.04c.4-.83 1.38-2.7 4.3-2.7 4.6 0 5.46 2.93 5.46 6.74v9.96h-2.92v-8.83c0-2.1-.04-4.8-2.93-4.8-2.94 0-3.39 2.3-3.39 4.65v8.98H8z" /></>,
    email: <><rect x="2" y="4" width="20" height="16" rx="1.5" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill={kind === "email" ? "none" : "currentColor"} stroke={kind === "email" ? "currentColor" : "none"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>;
}
function SocialLink({ kind, href, target, className = "", children }) { return <a className={`icon-link ${className}`.trim()} href={href} target={target} rel={target ? "noreferrer" : undefined}><SocialIcon kind={kind} />{children}</a>; }
function Breadcrumb({ section, title }) { return <div className="breadcrumb"><span>~/james-wong</span><span className="breadcrumb-slash">/</span><span>{section.toLowerCase()}</span><span className="breadcrumb-slash">/</span><strong>{title}</strong><span className="cursor-block" /></div>; }
function PageHeading({ section, title, subtitle }) { return <div className="page-heading"><Breadcrumb section={section} title={title} /><h1>{title}<span className="accent">.</span></h1>{subtitle && <p>{subtitle}</p>}</div>; }

function HomePage() {
  return <>
    <section className="home-hero content-width">
      <div className="hero-copy"><Breadcrumb section="home" title="index" /><p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · BNY MELLON</p><h1>Building software<br />that <span className="accent">moves things forward.</span></h1><p className="hero-intro">Hi, I'm James Wong — a Full-Stack Software Engineer at BNY Mellon. I build scalable distributed systems and enterprise microservices, and enjoy making software that solves real-world problems.</p><div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <span>↗</span></Link><Link className="button button-quiet" to="/about">More about me <span>→</span></Link></div><div className="social-row"><SocialLink kind="github" href={`https://github.com/${username}`} target="_blank">GitHub</SocialLink><SocialLink kind="linkedin" href="https://www.linkedin.com/in/james-wong03/" target="_blank">LinkedIn</SocialLink><SocialLink kind="email" href="mailto:wong.james2003@gmail.com">Email</SocialLink></div></div>
      <div className="hero-aside"><div className="portrait-frame"><img src={portrait} alt="James Wong" /><span className="portrait-label">NYC · SOFTWARE ENGINEER</span></div><div className="hero-aside-note"><span className="mono muted">CURRENTLY AT</span><strong>BNY Mellon</strong><span className="mono accent">Full-Stack Software Engineer</span></div></div>
    </section>
    <section className="content-width home-lower"><div className="section-title"><div><span className="section-kicker">01 / RECENT WORK</span><h2>Selected projects</h2></div><Link to="/projects" className="text-link">All projects <span>→</span></Link></div><div className="project-grid project-grid-home">{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></section>
    <section className="content-width github-section"><GithubPanel /></section>
    <div className="content-width"><ContactBlock /></div>
  </>;
}

function AboutPage() {
  return <div className="content-width inner-page about-page"><PageHeading section="about" title="About me" subtitle="A little context on the person behind the pull requests." />
    <section className="about-intro panel"><div><span className="section-kicker">HELLO, I'M JAMES</span><h2>Software engineer<br /><span className="accent">and curious builder.</span></h2><p>I'm a Full-Stack Software Engineer at BNY Mellon, building scalable distributed systems and enterprise microservices. I enjoy creating impactful software that solves real-world problems, and working across the stack to bring useful ideas to life.</p><p>Based in New York, NY.</p></div><div className="about-code"><span className="code-comment">{'// a few things I work with'}</span>{skills.slice(0, 9).map((skill, i) => <div key={skill}><span className="code-num">{String(i + 1).padStart(2, "0")}</span><span>{skill}</span></div>)}</div></section>
    <section className="page-section"><div className="section-title"><div><span className="section-kicker">01 / TOOLKIT</span><h2>Technologies</h2></div></div><div className="skill-cloud">{skills.map(skill => <span className="skill-chip" key={skill}>{skill}</span>)}</div></section>
    <section className="page-section"><div className="section-title"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>Where I've worked</h2></div></div><ExperienceList /></section><ContactBlock /></div>;
}

function ProjectsPage() {
  return <div className="content-width inner-page"><PageHeading section="projects" title="Things I've built" subtitle="A selection of projects, from distributed systems to products in use." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div><GithubPanel /><ContactBlock /></div>;
}

function ResumePage() {
  return <div className="content-width inner-page"><PageHeading section="resume" title="Resume" subtitle="Experience and skills, in brief." /><div className="resume-toolbar panel"><div><span className="section-kicker">JAMES WONG · SOFTWARE ENGINEER</span><p>Use the browser preview or download the PDF for the full resume.</p></div><a className="button button-primary" href={resumePdf} download="James-Wong-Resume.pdf">Download PDF <span>↓</span></a></div><div className="resume-viewer"><iframe title="James Wong resume" src={`${resumePdf}#view=FitH`} /></div><ContactBlock /></div>;
}

function ExperienceList() {
  return <div className="experience-list">{timelineElements.map((job, index) => <article className="experience-entry" key={job.id}><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="experience-body"><div className="experience-heading"><div><h3>{job.title}</h3><p>{job.company}</p></div><span className="date-label">{job.date}</span></div><ul>{job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}</ul></div></article>)}</div>;
}

function ProjectCard({ project, index }) {
  return <a className="project-card" href={project.link} target="_blank" rel="noreferrer"><div className={`project-art ${project.color || ""}`} style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}>{!project.image && <span className="project-art-mark">{project.name === "SoleSync" ? "S/" : "∿"}</span>}<span className="project-number">0{index + 1}</span></div><div className="project-card-body"><div className="project-card-meta"><span>{project.kind}</span><span>↗</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>;
}

function GithubPanel() {
  const data = useGithubData();
  const calendar = useMemo(() => buildContributionCalendar(data.contributions), [data.contributions]);
  const contributionCount = calendar.cells.reduce((sum, cell) => sum + (cell.count || 0), 0);
  return <section className="github-panel">
    <div className="extra-info-heading"><h2>Extra Info</h2><SocialLink kind="github" className="text-link" href={`https://github.com/${username}`} target="_blank">@{username}</SocialLink></div>
    <div className="extra-info-grid">
      <section className="extra-card contributions-card panel" aria-labelledby="contributions-heading">
        <h3 id="contributions-heading"><SocialIcon kind="github" />{data.contributions.length ? `${contributionCount.toLocaleString()} contributions in the past six months` : "GitHub contributions · past six months"}</h3>
        {data.contributions.length ? <>
          <div className="contrib-months" style={{ "--contrib-weeks": calendar.weeks }} aria-hidden="true">{calendar.months.map(month => <span key={month.key} style={{ gridColumn: month.column }}>{month.label}</span>)}</div>
          <div className="contrib-grid" style={{ "--contrib-weeks": calendar.weeks }} role="group" aria-label={`${contributionCount} contributions in the past six months`}>{calendar.cells.map(cell => {
            const detail = `${cell.count} ${cell.count === 1 ? "contribution" : "contributions"} · ${formatContributionDate(cell.date)}`;
            return <span key={cell.date} role="img" aria-label={detail} data-tooltip={detail} className={`contrib-cell${cell.inWindow ? ` level-${cell.level ?? getLevel(cell.count)}` : " contrib-cell-empty"}`} />;
          })}</div>
          <div className="contrib-legend"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <i key={level} className={`contrib-cell level-${level}`} />)}<span>More</span></div>
        </> : <p className="muted mono">{data.contributionLoading || data.loading ? "Loading contribution calendar…" : "Contribution calendar unavailable."}</p>}
        {data.error && <p className="github-footnote">GitHub activity is temporarily unavailable. <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">Visit my profile</a>.</p>}
      </section>
    </div>
      <section className="recent-activity panel" aria-labelledby="recent-commits-heading">
        <h3 id="recent-commits-heading"><span className="extra-icon activity-pulse" aria-hidden="true">⌁</span>Recent Commits</h3>
        {data.pushes.length ? <div className="activity-list">{data.pushes.slice(0, 5).map((push, index) => <a className="activity-row" href={push.url} key={`${push.sha}-${index}`} target="_blank" rel="noreferrer"><span className="activity-main"><span><strong>{push.repo}</strong><span className="activity-message">: {isMissingCommitMessage(push) ? data.resolvingCommitMessages ? "Loading commit message…" : "Commit details unavailable" : push.message}</span></span></span><code className="activity-sha">{push.sha.slice(0, 7)}</code><time dateTime={push.date}>{formatActivityDate(push.date)}</time><span className="activity-stats"><b>+{push.additions ?? "—"}</b><span>/</span><i>-{push.deletions ?? "—"}</i></span></a>)}</div> : <p className="activity-empty">{data.loading ? "Loading recent commits…" : data.error ? "GitHub activity is temporarily unavailable." : "No recent public commits to show."}</p>}
        <p className="github-footnote">Public GitHub data · cached for this session</p>
      </section>
  </section>;
}

function useGithubData() {
  const [state, setState] = useState(() => {
    const cached = readGithubCache();
    const stale = !cached || cached.partial || Date.now() - cached.savedAt >= 15 * 60 * 1000 || hasFallbackPushes(cached.data?.pushes);
    return cached ? { ...cached.data, loading: stale, resolvingCommitMessages: hasFallbackPushes(cached.data?.pushes), contributionLoading: stale, error: false } : { loading: true, pushes: [], contributions: [], resolvingCommitMessages: false, contributionLoading: true, error: false };
  });
  useEffect(() => {
    const cached = readGithubCache();
    if (cached && !cached.partial && Date.now() - cached.savedAt < 15 * 60 * 1000 && !hasFallbackPushes(cached.data?.pushes)) return undefined;
    const requestController = new AbortController();
    const contributionController = new AbortController();
    let active = true;
    let commitController = null;
    let commitTimeout = null;
    let contributionTimeout = null;
    async function load() {
      let data = cached?.data || { pushes: [], contributions: [] };
      let activityAvailable = false;
      let contributionsAvailable = false;
      try {
        const headers = { Accept: "application/vnd.github+json" };
        const eventsResult = await fetch(`https://api.github.com/users/${username}/events?per_page=20`, { headers, signal: requestController.signal }).catch(() => null);
        if (!active || requestController.signal.aborted) return;
        let pushes = data.pushes || [], eventsSucceeded = false;
        try {
          if (eventsResult?.ok) {
            const events = await eventsResult.json();
            if (Array.isArray(events)) {
              pushes = mergeCachedPushes(data.pushes || [], extractPushes(events));
              eventsSucceeded = true;
              activityAvailable = true;
            }
          }
        } catch (_) { /* Keep the cached activity when the events endpoint is unavailable. */ }
        data = { ...data, pushes };
        if (active) setState(previous => ({ ...previous, ...data, loading: hasFallbackPushes(pushes), resolvingCommitMessages: hasFallbackPushes(pushes), contributionLoading: true, error: false }));
        writeGithubCache(data, true);

        let cachePartial = true;
        if (pushes.length && (eventsSucceeded || hasFallbackPushes(pushes))) {
          commitController = new AbortController();
          commitTimeout = window.setTimeout(() => commitController?.abort(), 5000);
          const commitStats = awaitCommitStats(pushes, headers, commitController.signal);
          commitStats.then(stats => {
            if (!active) return;
            const latestData = readGithubCache()?.data || data;
            const updatedPushes = resolveMissingCommitMessages(mergeCommitStats(latestData.pushes || pushes, pushes, stats));
            data = { ...latestData, pushes: updatedPushes };
            setState(previous => ({ ...previous, pushes: updatedPushes, resolvingCommitMessages: false }));
            writeGithubCache(data, cachePartial);
          }).catch(() => {}).finally(() => {
            window.clearTimeout(commitTimeout);
            if (active) setState(previous => ({ ...previous, loading: false, resolvingCommitMessages: false }));
          });
        }

        let contributions = data.contributions || [];
        contributionTimeout = window.setTimeout(() => contributionController.abort(), 8000);
        try {
          const contributionResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, { signal: contributionController.signal });
          if (contributionResponse.ok) {
            const contributionData = await contributionResponse.json();
            if (Array.isArray(contributionData.contributions)) {
              contributions = contributionData.contributions;
              contributionsAvailable = true;
            }
          }
        } catch (_) { /* Cached commit data remains useful without the calendar. */ }
        finally {
          window.clearTimeout(contributionTimeout);
          if (active) {
            const updatedData = { ...data, contributions };
            cachePartial = false;
            writeGithubCache(updatedData, cachePartial);
            setState(previous => ({ ...previous, ...updatedData, loading: false, contributionLoading: false, error: !activityAvailable && !contributionsAvailable }));
          }
        }
      } catch (_) {
        if (active) setState(previous => ({ ...previous, loading: false, contributionLoading: false, error: !activityAvailable && !contributionsAvailable }));
      }
    }
    load();
    return () => {
      active = false;
      requestController.abort();
      contributionController.abort();
      commitController?.abort();
      window.clearTimeout(commitTimeout);
      window.clearTimeout(contributionTimeout);
    };
  }, []);
  return state;
}

async function awaitCommitStats(pushes, headers, signal) {
  return Promise.all(pushes.slice(0, 5).map(async push => {
    if (!isCommitSha(push.sha) || !push.repo) return null;
    try {
      const response = await fetch(`https://api.github.com/repos/${push.repo}/commits/${push.sha}`, { headers, signal });
      if (!response.ok) return null;
      const commit = await response.json();
      return {
        additions: commit.stats?.additions,
        deletions: commit.stats?.deletions,
        ...(isMissingCommitMessage(push) && commit.commit?.message
          ? { message: commit.commit.message.split("\n")[0], messageResolved: true }
          : {}),
      };
    } catch (_) { return null; }
  }));
}

function hasFallbackPushes(pushes = []) {
  return pushes.some(isMissingCommitMessage);
}

function isMissingCommitMessage(push) {
  return push?.messageResolved !== true && (!push?.message || push.message === "Pushed updates" || push.message === "Commit");
}

function mergeCachedPushes(cachedPushes, freshPushes) {
  const cachedById = new Map(cachedPushes.map(push => [`${push.repo}/${push.sha}`, push]));
  return freshPushes.map(push => {
    const cached = cachedById.get(`${push.repo}/${push.sha}`);
    const cachedHasMessage = cached?.message && !isMissingCommitMessage(cached) && cached.message !== "Commit details unavailable";
    return cached ? {
      ...cached,
      ...push,
      message: isMissingCommitMessage(push) && cachedHasMessage ? cached.message : push.message,
      messageResolved: isMissingCommitMessage(push) && cachedHasMessage ? true : (push.messageResolved ?? cached.messageResolved),
      additions: push.additions ?? cached.additions,
      deletions: push.deletions ?? cached.deletions,
    } : push;
  });
}

function resolveMissingCommitMessages(pushes) {
  return pushes.map(push => isMissingCommitMessage(push) ? { ...push, message: "Commit details unavailable" } : push);
}

function isCommitSha(sha) {
  return typeof sha === "string" && /^[a-f\d]{7,40}$/i.test(sha) && !/^\d+$/.test(sha);
}

function mergeCommitStats(currentPushes, requestedPushes, stats) {
  const updates = new Map();
  requestedPushes.forEach((push, index) => {
    if (stats[index]) updates.set(`${push.repo}/${push.sha}`, stats[index]);
  });
  return currentPushes.map(push => ({ ...push, ...(updates.get(`${push.repo}/${push.sha}`) || {}) }));
}

function readGithubCache() {
  try {
    const cached = window.sessionStorage.getItem("portfolio-github-cache");
    return cached ? JSON.parse(cached) : null;
  } catch (_) { return null; }
}

function writeGithubCache(data, partial = false) {
  try { window.sessionStorage.setItem("portfolio-github-cache", JSON.stringify({ data, savedAt: Date.now(), partial })); } catch (_) { /* Storage may be disabled; the live data still renders. */ }
}

function extractPushes(events) {
  if (!Array.isArray(events)) return [];
  return events.filter(event => event.type === "PushEvent" && event.repo?.name).flatMap(event => {
    const commits = Array.isArray(event.payload?.commits) ? [...event.payload.commits].reverse() : [];
    if (!commits.length) {
      const sha = event.payload?.head || "";
      return [{ repo: event.repo.name, message: "Pushed updates", sha, date: event.created_at, url: sha ? `https://github.com/${event.repo.name}/commit/${sha}` : `https://github.com/${event.repo.name}/commits` }];
    }
    return commits.map(commit => {
      const sha = commit.sha || event.payload?.head || "";
      return { repo: event.repo.name, message: commit.message?.split("\n")[0] || "Commit", messageResolved: Boolean(commit.message), sha, date: event.created_at, url: sha ? `https://github.com/${event.repo.name}/commit/${sha}` : `https://github.com/${event.repo.name}/commits` };
    });
  }).slice(0, 5);
}

function formatActivityDate(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(date));
}

function buildContributionCalendar(contributions) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cutoff = new Date(today.getFullYear(), today.getMonth() - 6, 1);
  cutoff.setDate(Math.min(today.getDate(), new Date(cutoff.getFullYear(), cutoff.getMonth() + 1, 0).getDate()));
  const gridStart = new Date(cutoff);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());
  const counts = new Map((contributions || []).map(day => [day.date, day]));
  const cells = [];
  for (const date = new Date(gridStart); date <= today; date.setDate(date.getDate() + 1)) {
    const key = localDateKey(date);
    const contribution = counts.get(key);
    const inWindow = date >= cutoff;
    const count = inWindow ? contribution?.count || 0 : 0;
    cells.push({ date: key, count, level: contribution?.level, inWindow });
  }
  const months = [];
  const monthCursor = new Date(cutoff.getFullYear(), cutoff.getMonth(), 1);
  const finalMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  while (monthCursor <= finalMonth) {
    const labelDate = monthCursor < cutoff ? cutoff : monthCursor;
    const elapsedDays = Math.round((Date.UTC(labelDate.getFullYear(), labelDate.getMonth(), labelDate.getDate()) - Date.UTC(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate())) / 86400000);
    months.push({
      key: `${monthCursor.getFullYear()}-${String(monthCursor.getMonth() + 1).padStart(2, "0")}`,
      label: new Intl.DateTimeFormat(undefined, { month: "short" }).format(monthCursor),
      column: Math.floor(elapsedDays / 7) + 1,
    });
    monthCursor.setMonth(monthCursor.getMonth() + 1);
  }
  // The first month may cover only a few visible days, leaving its label
  // crowded against the next month. Drop that partial label when needed.
  if (months.length > 1 && months[1].column - months[0].column < 3) months.shift();
  return { cells, months, weeks: Math.ceil(cells.length / 7) };
}

function localDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatContributionDate(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function getLevel(count) { return count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4; }

function ContactBlock() {
  return <section className="contact-block"><div><span className="section-kicker">HAVE A GOOD ONE IN MIND?</span><h2>Let's build something<br /><span className="accent">useful together.</span></h2></div><div className="contact-details"><SocialLink kind="email" href="mailto:wong.james2003@gmail.com">wong.james2003@gmail.com</SocialLink><a href="tel:+16463845349">646-384-5349</a><span>New York, New York</span><div className="contact-social"><SocialLink kind="linkedin" href="https://www.linkedin.com/in/james-wong03/" target="_blank">LinkedIn</SocialLink><SocialLink kind="github" href={`https://github.com/${username}`} target="_blank">GitHub</SocialLink></div></div></section>;
}
