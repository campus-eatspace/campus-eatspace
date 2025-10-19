import '../style/profile.css';

// ============= Form Input Component =============
interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;