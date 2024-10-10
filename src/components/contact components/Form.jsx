import FormInput from "./FormInput";

function Form() {
  return (
    <form className="contact-form">
        <FormInput label={'Your name'} placeholder={'Abc'} />
        <FormInput label={'Email address'} placeholder={'Abc@def.com'} />
        <FormInput label={'Subject'} placeholder={'This is an optional'} />
        <FormInput label={'Message'} placeholder={"Hi! I'd like to ask about"} />
        <button type="submit" className="form-submit-btn">Submit</button>
    </form>
  )
}

export default Form;