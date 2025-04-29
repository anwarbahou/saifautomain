import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label: string;
  options: Option[];
  error?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  error,
  className = '',
  onChange,
  value,
  icon,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
            {icon}
          </div>
        )}
        <select
          value={value}
          className={`
            appearance-none rounded-lg relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-300' : ''}
            [&::-ms-expand]:hidden
            [-webkit-appearance:none]
            [-moz-appearance:none]
            ${className}
          `}
          onChange={handleChange}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormSelect; 