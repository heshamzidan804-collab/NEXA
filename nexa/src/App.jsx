import { useState } from 'react'

const Logo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19V5l14 14V5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
  </svg>
)

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="9" rx="2.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

const EyeIcon = ({ off }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    {off && <path d="M4 4l16 16" />}
  </svg>
)

export default function App() {
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)

  // UI-only: no authentication, just a brief visual loading state
  const handleSubmit = (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setTimeout(() => setLoading(false), 1400)
  }

  return (
    <main className="stage">
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />
      <div className="grid" aria-hidden="true" />

      <div className="wrap">
        <header className="brand">
          <span className="mark"><Logo /></span>
          <span className="brand-name">NEXA</span>
        </header>

        <section className="card" aria-labelledby="title">
          <h1 id="title">Welcome back</h1>
          <p className="sub">Sign in to continue to your workspace.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="username">Username</label>
              <div className="control">
                <span className="icon"><UserIcon /></span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter your username"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="control">
                <span className="icon"><LockIcon /></span>
                <input
                  id="password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="toggle"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  aria-pressed={showPw}
                >
                  <EyeIcon off={showPw} />
                </button>
              </div>
            </div>

            <div className="row">
              <a href="#" className="link" onClick={(e) => e.preventDefault()}>Forgot password?</a>
            </div>

            <button type="submit" className="btn" disabled={loading} aria-busy={loading}>
              {loading ? <span className="spinner" aria-hidden="true" /> : null}
              <span>{loading ? 'Signing in…' : 'Sign In'}</span>
            </button>
          </form>
        </section>

        <footer className="foot">© 2026 NEXA · Secure workspace platform</footer>
      </div>
    </main>
  )
}
