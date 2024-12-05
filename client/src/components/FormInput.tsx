export const FormInput: React.FC<{
  label: string;
  name: string;
  type: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ label, name, type, className, onChange }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};
