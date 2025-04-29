import React from 'react';

interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  className = '',
  onChange,
  value,
  type = 'text',
  icon,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <input
          type={type}
          value={value}
          className={`
            appearance-none rounded-lg relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-300' : ''}
            ${type === 'date' || type === 'time' ? '[&::-webkit-calendar-picker-indicator]:hidden' : ''}
            ${className}
          `}
          onChange={handleChange}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormInput; 