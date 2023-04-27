const Input = ({
  title,
  type,
  autoComplete,
  onChange,
  value,
  name,
  maxLength,
  placeholder,
  width,
  min,
  max,
  className,
  styles,
}) => {
  return (
    <fieldset
      className={`border-gray-500 dark:border-gray-300  w-[${width}] rounded-md border p-2 ${className}`}
    >
      <legend className={`${className}`}>{title}</legend>
      <input
        type={type}
        aria-hidden="true"
        placeholder={placeholder}
        name={name}
        value={value}
        autoComplete={autoComplete}
        spellCheck="false"
        tabIndex={0}
        required
        min={min}
        max={max}
        maxLength={maxLength}
        autoCapitalize="none"
        onChange={onChange}
        className={`w-full bg-transparent pb-2 indent-2 outline-none ${styles}`}
      />
    </fieldset>
  );
};

export default Input;
