

// Text Field Component
interface TextFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label text-white small">{label}</label>
      <input
        type={type}
        className="form-control bg-transparent border-secondary text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          borderRadius: "0",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          borderBottom: "1px solid #6c757d",
          backgroundColor: "transparent !important",
          boxShadow: "none",
        }}
      />
    </div>
  );
};

export default TextField;