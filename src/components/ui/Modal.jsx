import { useEffect } from 'react';
import './Modal.css';

/**
 * Modal — centered dialog overlay for confirmations, forms, or details.
 *
 * @param {Object} props
 * @param {boolean} props.open - Whether the modal is visible.
 * @param {() => void} props.onClose - Called when the user closes the modal
 *   (backdrop click, close button, or Escape key).
 * @param {string} [props.title] - Heading rendered in the modal header.
 * @param {React.ReactNode} props.children - Modal body content.
 * @param {React.ReactNode} [props.footer] - Optional footer content, typically action buttons.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Modal width.
 * @param {boolean} [props.closeOnBackdrop=true] - Close the modal when the backdrop is clicked.
 * @returns {JSX.Element|null}
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm Booking">
 *   <p>Reserve this homestay for 2 nights?</p>
 * </Modal>
 */
export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="ui-modal__backdrop"
      onClick={() => closeOnBackdrop && onClose?.()}
    >
      <div
        className={`ui-modal ui-modal--${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'ui-modal-title' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ui-modal__header">
          {title && <h3 id="ui-modal-title" className="ui-modal__title">{title}</h3>}
          <button
            type="button"
            className="ui-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="ui-modal__body">{children}</div>

        {footer && <div className="ui-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
