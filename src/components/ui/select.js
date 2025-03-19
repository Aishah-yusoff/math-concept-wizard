export function Select({ children, onChange, value }) {
  return (
    <select
      className="border p-2 rounded w-full"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
