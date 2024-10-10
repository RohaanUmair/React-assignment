import './forms.css';

function FormInput({label, placeholder}) {
  return (
    <div className="form-input-sec">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
