export const Button: React.FC<{
  type: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}> = ({ type, className, children }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
