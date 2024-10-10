import './mainSection.css';

function FormInput({ label, placeholder, width }) {
  return (
    <div className='chechout-form-section'>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        style={{width}}
      />
    </div>
  );
}

export default FormInput;
