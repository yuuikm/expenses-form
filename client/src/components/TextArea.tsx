export const TextArea: React.FC<{
  label: string;
  name: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}> = ({ label, name, className, onChange }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        rows={4}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      ></textarea>
    </div>
  );
};
