const fieldClass =
  'peer block w-full border-0 border-b border-outline bg-transparent px-0 py-3 font-body-md text-on-surface placeholder:text-transparent focus:border-secondary focus:ring-0'

function FloatingField({ id, label, type = 'text', required = false }) {
  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows="4"
          required={required}
          placeholder={label}
          className={`${fieldClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          placeholder={label}
          className={fieldClass}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-0 top-3 font-body-md text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-label-sm"
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingField
