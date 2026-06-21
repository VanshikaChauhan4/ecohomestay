import './Loader.css';

/**
 * Loader — inline loading indicator for async states.
 *
 * @param {Object} props
 * @param {'spinner'|'dots'} [props.variant='spinner'] - Visual style.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Loader size.
 * @param {string} [props.label] - Optional text rendered next to/below the loader.
 * @param {boolean} [props.fullScreen=false] - Center the loader in a full-viewport overlay.
 * @param {string} [props.color] - Override the loader color (defaults to the theme's forest green).
 * @returns {JSX.Element}
 *
 * @example
 * <Loader variant="spinner" size="lg" label="Loading your stays..." />
 */
export default function Loader({
  variant = 'spinner',
  size = 'md',
  label,
  fullScreen = false,
  color,
}) {
  const style = color ? { '--ui-loader-color': color } : undefined;

  const content = (
    <div className={`ui-loader ui-loader--${size}`} style={style} role="status" aria-live="polite">
      {variant === 'spinner' ? (
        <span className="ui-loader__spinner" aria-hidden="true" />
      ) : (
        <span className="ui-loader__dots" aria-hidden="true">
          <span /><span /><span />
        </span>
      )}
      {label && <span className="ui-loader__label">{label}</span>}
      <span className="sr-only">{label || 'Loading'}</span>
    </div>
  );

  if (fullScreen) {
    return <div className="ui-loader__overlay">{content}</div>;
  }
  return content;
}
