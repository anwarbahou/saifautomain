import React from 'react';

interface FormCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  onChange?: (checked: boolean) => void;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  error,
  className = '',
  onChange,
  checked,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        className={`
          h-4 w-4 rounded border-gray-300 text-blue-600
          focus:ring-blue-500
          ${error ? 'border-red-300' : ''}
          ${className}
        `}
        onChange={handleChange}
        {...props}
      />
      <label className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormCheckbox; 