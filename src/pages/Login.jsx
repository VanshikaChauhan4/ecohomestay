import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InnerPage.css';
import './Login.css';

export default function Login() {
  const [tab, setTab]   = useState('guest'); // 'guest' | 'host'
  const [mode, setMode] = useState('login'); // 'login' | 'signup'

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main inner-page login-main">

        <div className="login-container">
          {/* Left panel */}
          <div className="login-left">
            <div className="login-left__inner">
              <span className="login-brand">🌿 VanaMitra</span>
              <h2>Travel that<br/><em>gives back</em></h2>
              <p>Join a community of travellers and hosts building a regenerative future for rural India.</p>
              <ul className="login-perks">
                {[
                  '🏡 Access 120+ verified host families',
                  '🌾 Curated agri & eco experiences',
                  '💬 Direct host communication',
                  '🌱 Every stay funds conservation',
                ].map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="login-right">
            {/* Tab: Guest / Host */}
            <div className="login-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={tab === 'guest'}
                className={`login-tab${tab === 'guest' ? ' active' : ''}`}
                onClick={() => setTab('guest')}
              >I'm a Traveller</button>
              <button
                role="tab"
                aria-selected={tab === 'host'}
                className={`login-tab${tab === 'host' ? ' active' : ''}`}
                onClick={() => setTab('host')}
              >I'm a Host</button>
            </div>

            <h3 className="login-form-title">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h3>

            <form className="login-form" onSubmit={e => e.preventDefault()}>
              {mode === 'signup' && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Aarav Singh" autoComplete="name" />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="••••••••" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
              </div>

              {tab === 'host' && mode === 'signup' && (
                <div className="form-group">
                  <label htmlFor="state">State / Region</label>
                  <select id="state">
                    <option value="">Select your state</option>
                    {['Kerala','Tamil Nadu','Maharashtra','Assam','West Bengal','Rajasthan','Sikkim','Gujarat'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}

              {mode === 'login' && (
                <div className="form-forgot">
                  <a href="#">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="login-submit">
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </button>

              <div className="form-divider"><span>or</span></div>

              <button type="button" className="login-google">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.909-2.258c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/><path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
                Continue with Google
              </button>
            </form>

            <p className="login-switch">
              {mode === 'login' ? (
                <>Don't have an account? <button onClick={() => setMode('signup')}>Sign up</button></>
              ) : (
                <>Already have an account? <button onClick={() => setMode('login')}>Sign in</button></>
              )}
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
