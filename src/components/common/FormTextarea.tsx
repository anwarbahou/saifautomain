import React from 'react';

interface FormTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string;
  error?: string;
  onChange?: (value: string) => void;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  error,
  className = '',
  onChange,
  value,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        value={value}
        className={`
          appearance-none rounded-lg relative block w-full px-3 py-2
          border border-gray-300 placeholder-gray-500 text-gray-900
          focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm
          ${error ? 'border-red-300' : ''}
          ${className}
        `}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormTextarea; 