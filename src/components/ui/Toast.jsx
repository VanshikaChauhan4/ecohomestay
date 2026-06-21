import { createContext, useCallback, useContext, useState } from 'react';
import './Toast.css';

/**
 * @typedef {Object} ToastItem
 * @property {string} id - Unique identifier (auto-generated).
 * @property {string} message - Message text shown to the user.
 * @property {'success'|'error'|'info'|'warning'} [type='info'] - Visual style/icon.
 * @property {number} [duration=3500] - Milliseconds before auto-dismiss.
 */

const ToastContext = createContext(null);

const ICONS = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

/**
 * ToastProvider — wrap your app (or a section of it) to enable the `useToast()` hook.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 *
 * @example
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState(/** @type {ToastItem[]} */ ([]));

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((message, options = {}) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const { type = 'info', duration = 3500 } = options;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    if (duration > 0) {
      setTimeout(() => dismiss(id), duration);
    }
    return id;
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      {children}
      <div className="ui-toast__viewport" aria-live="polite" aria-atomic="false">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/**
 * useToast — access the toast API from any component inside a ToastProvider.
 *
 * @returns {{ show: (message: string, options?: { type?: 'success'|'error'|'info'|'warning', duration?: number }) => string, dismiss: (id: string) => void }}
 *
 * @example
 * const toast = useToast();
 * toast.show('Booking confirmed!', { type: 'success' });
 */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return ctx;
}

/**
 * Toast — a single visual toast notification. Normally rendered automatically
 * by ToastProvider; exported standalone for showcase/demo purposes.
 *
 * @param {Object} props
 * @param {string} props.message - Message text.
 * @param {'success'|'error'|'info'|'warning'} [props.type='info'] - Visual style/icon.
 * @param {() => void} [props.onDismiss] - Called when the close button is clicked.
 * @returns {JSX.Element}
 */
export function Toast({ message, type = 'info', onDismiss }) {
  return (
    <div className={`ui-toast ui-toast--${type}`} role="status">
      <span className="ui-toast__icon" aria-hidden="true">{ICONS[type]}</span>
      <span className="ui-toast__message">{message}</span>
      <button
        type="button"
        className="ui-toast__close"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
