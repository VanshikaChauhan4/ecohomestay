import { useId } from 'react';
import './Input.css';

/**
 * Input — labeled text field with optional helper/error text and icon.
 *
 * @param {Object} props
 * @param {string} [props.label] - Field label rendered above the input.
 * @param {string} [props.id] - HTML id; auto-generated if omitted (also used to link the label).
 * @param {'text'|'email'|'password'|'number'|'tel'|'search'} [props.type='text'] - Input type.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.value] - Controlled value.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler.
 * @param {string} [props.error] - Error message; renders the field in an error state when present.
 * @param {string} [props.helperText] - Helper text shown below the field when there is no error.
 * @param {React.ReactNode} [props.icon] - Optional icon/emoji rendered inside the field, left side.
 * @param {boolean} [props.disabled=false] - Disable the field.
 * @param {boolean} [props.required=false] - Mark the field as required (adds an asterisk to the label).
 * @param {string} [props.autoComplete] - Native autocomplete hint.
 * @returns {JSX.Element}
 *
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={emailError}
 * />
 */
export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  icon,
  disabled = false,
  required = false,
  autoComplete,
  ...rest
}) {
  const autoId = useId();
  const inputId = id || autoId;
  const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;

  return (
    <div className={`ui-input${error ? ' ui-input--error' : ''}${disabled ? ' ui-input--disabled' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="ui-input__label">
          {label}
          {required && <span className="ui-input__required" aria-hidden="true"> *</span>}
        </label>
      )}

      <div className="ui-input__field">
        {icon && <span className="ui-input__icon" aria-hidden="true">{icon}</span>}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`ui-input__control${icon ? ' ui-input__control--icon' : ''}`}
          {...rest}
        />
      </div>

      {error && (
        <p id={`${inputId}-error`} className="ui-input__error" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="ui-input__helper">
          {helperText}
        </p>
      )}
    </div>
  );
}
