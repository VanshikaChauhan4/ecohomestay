import './Button.css';

/**
 * Button — primary interactive trigger used across the app.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label / content.
 * @param {'primary'|'secondary'|'ghost'|'danger'} [props.variant='primary'] - Visual style.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size.
 * @param {boolean} [props.fullWidth=false] - Stretch to 100% of parent width.
 * @param {boolean} [props.disabled=false] - Disable interaction.
 * @param {boolean} [props.loading=false] - Show inline spinner and disable interaction.
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Native button type.
 * @param {() => void} [props.onClick] - Click handler.
 * @returns {JSX.Element}
 *
 * @example
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Book Now
 * </Button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const classes = [
    'ui-btn',
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    fullWidth ? 'ui-btn--full' : '',
    loading ? 'ui-btn--loading' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className="ui-btn__spinner" aria-hidden="true" />}
      <span className="ui-btn__label">{children}</span>
    </button>
  );
}
