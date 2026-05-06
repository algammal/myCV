import Link from 'next/link';

export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-inner">
        <div className="landing-card">
          <header className="landing-nav">
            <div className="landing-brand"><img width="40" height="40" src="/logo.png" alt="Logo" /></div>
          </header>

          <section className="landing-hero">
            <div className="landing-eyebrow">Ahmed Algammal</div>
            <h1 className="landing-title">A modern introduction to my work, skills, and story.</h1>
            <p className="landing-copy">
              Discover the same polished CV experience as the web version. Click below to enter the full resume page and explore the portfolio.
            </p>

            <div className="landing-actions">
              <Link href="/cv" className="landing-button landing-secondary">
                Open Resume
              </Link>
            </div>
          </section>

          <footer className="landing-footer">
            <span>Designed for clean presentation and easy access.</span>
            <span>Click “View CV” to continue.</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
