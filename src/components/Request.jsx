import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

function Request() {
    const form = useRef();
    const [message , setmessage] = useState("");
    const [alert,setAlert] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wgouv8i', 'template_r7g8gkt', form.current, 'tDkvz_wKYur5AyoVB')
        .then((result) => {
            console.log(result.text);
            setmessage(result.text);
            setAlert(true);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            setAlert(true)
            setmessage(error.text);
        });
    };
  return (
    <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
    <h2>Request Form</h2>
    <label>Name <small className='text-danger'>*</small></label>
        <input type="text" required className='form-control border border-dark my-2' name="user_name" />
        <label>Email <small className='text-danger'>*</small></label>
        <input type="email" required className='form-control border border-dark my-2'  name="user_email" />
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        <label>Message <small className='text-danger'>*</small></label>
        <textarea className='form-control border border-dark my-2' required name="message" />
        <input type="submit" className=' my-2 btn btn-success' value="Send" />

{alert && <div class="alert alert-secondary" role="alert">
  {message}
</div>}
      </form>
  )
}

export default Request