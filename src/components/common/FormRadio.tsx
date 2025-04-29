import React from 'react';

interface FormRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  onChange?: (value: string) => void;
}

const FormRadio: React.FC<FormRadioProps> = ({
  label,
  error,
  className = '',
  onChange,
  value,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="radio"
          value={value}
          className={`
            h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300
            ${error ? 'border-red-300' : ''}
            ${className}
          `}
          onChange={handleChange}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="font-medium text-gray-700">{label}</label>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
};

export default FormRadio; 