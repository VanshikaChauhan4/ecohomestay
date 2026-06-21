import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Input, Modal, Loader, useToast } from '../components/ui';
import './InnerPage.css';
import './Showcase.css';

export default function Showcase() {
  const toast = useToast();

  const [modalOpen, setModalOpen]   = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState(false);

  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailError = emailTouched && email && !email.includes('@')
    ? 'Please enter a valid email address.'
    : '';

  const runLoadingDemo = () => {
    setLoadingDemo(true);
    setTimeout(() => {
      setLoadingDemo(false);
      toast.show('Your stays have finished loading!', { type: 'success' });
    }, 1800);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main inner-page">

        <section className="inner-hero inner-hero--fern">
          <div className="container">
            <p className="inner-hero__eyebrow">Developer Reference</p>
            <h1 className="inner-hero__title">UI Component Library</h1>
            <p className="inner-hero__sub">
              Live demos of every shared component in <code className="show-code">/components/ui</code> —
              Button, Input, Modal, Toast, and Loader.
            </p>
          </div>
        </section>

        {/* ── Buttons ─────────────────────────────── */}
        <section className="inner-section">
          <div className="container">
            <h2 className="show-h2">Button</h2>
            <p className="show-desc">Variants, sizes, and states.</p>

            <div className="show-card">
              <h4>Variants</h4>
              <div className="show-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>

              <h4>Sizes</h4>
              <div className="show-row">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>

              <h4>States</h4>
              <div className="show-row">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button fullWidth variant="secondary" onClick={() => toast.show("Stay booked! We'll send a confirmation shortly.", { type: 'success' })}>
                  Full Width — Click to Trigger Toast
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inputs ──────────────────────────────── */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <h2 className="show-h2">Input</h2>
            <p className="show-desc">Labeled text fields with icons, helper text, and validation.</p>

            <div className="show-card show-card--form">
              <Input
                label="Full Name"
                placeholder="Aarav Singh"
                icon="👤"
                value={name}
                onChange={(e) => setName(e.target.value)}
                helperText="As it appears on your government ID."
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                icon="✉️"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                error={emailError}
              />
              <Input
                label="Disabled Field"
                placeholder="Not editable"
                disabled
              />
            </div>
          </div>
        </section>

        {/* ── Modal ───────────────────────────────── */}
        <section className="inner-section">
          <div className="container">
            <h2 className="show-h2">Modal</h2>
            <p className="show-desc">Centered dialog overlays for details and confirmations.</p>

            <div className="show-card">
              <div className="show-row">
                <Button onClick={() => setModalOpen(true)}>Open Info Modal</Button>
                <Button variant="danger" onClick={() => setConfirmOpen(true)}>Open Confirm Modal</Button>
              </div>
            </div>

            <Modal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Nilgiri Mist Cottage"
            >
              <p>
                A cardamom estate homestay in Ooty, Tamil Nadu, run by the Krishnaswamy family
                for over four generations. Guests join early-morning spice harvesting and
                forest walks through eucalyptus groves.
              </p>
            </Modal>

            <Modal
              open={confirmOpen}
              onClose={() => setConfirmOpen(false)}
              title="Cancel this booking?"
              size="sm"
              footer={
                <>
                  <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Keep Booking</Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setConfirmOpen(false);
                      toast.show('Booking cancelled.', { type: 'error' });
                    }}
                  >
                    Yes, Cancel
                  </Button>
                </>
              }
            >
              <p>This action cannot be undone. Any advance payment will be refunded within 5–7 business days.</p>
            </Modal>
          </div>
        </section>

        {/* ── Toast ───────────────────────────────── */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <h2 className="show-h2">Toast</h2>
            <p className="show-desc">Transient notifications driven by the <code className="show-code">useToast()</code> hook.</p>

            <div className="show-card">
              <div className="show-row">
                <Button variant="primary" onClick={() => toast.show('Booking confirmed for 2 nights.', { type: 'success' })}>Success Toast</Button>
                <Button variant="danger" onClick={() => toast.show('Payment failed. Please try again.', { type: 'error' })}>Error Toast</Button>
                <Button variant="secondary" onClick={() => toast.show('Prices may rise during festival season.', { type: 'warning' })}>Warning Toast</Button>
                <Button variant="ghost" onClick={() => toast.show('New stays added in Sikkim this week.', { type: 'info' })}>Info Toast</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Loader ──────────────────────────────── */}
        <section className="inner-section">
          <div className="container">
            <h2 className="show-h2">Loader</h2>
            <p className="show-desc">Spinner and dots variants for async states.</p>

            <div className="show-card">
              <h4>Variants &amp; Sizes</h4>
              <div className="show-row show-row--center">
                <Loader variant="spinner" size="sm" />
                <Loader variant="spinner" size="md" />
                <Loader variant="spinner" size="lg" />
                <Loader variant="dots" size="md" />
                <Loader variant="spinner" size="md" label="Loading stays…" />
              </div>

              <h4>Live Demo</h4>
              <div className="show-row show-row--center">
                <Button onClick={runLoadingDemo} disabled={loadingDemo}>
                  {loadingDemo ? 'Loading…' : 'Simulate Async Load'}
                </Button>
                {loadingDemo && <Loader variant="dots" label="Fetching listings…" />}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
