import { FieldError, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from './ValidationError';
type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const fieldStyle = 'flex flex-col mb-2';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Contact>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  function onSubmit(contact: Contact) {
    console.log(contact);
    return navigate(`${contact.name}`);
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div
      className="flex flex-col py-10 max-w-md 
    mx-auto"
    >
      <h2
        className="text-3xl font-bold underline 
    mb-3"
      >
        Contact Us
      </h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'name is required' })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError error={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your Email</label>
          <input
            className={getEditorStyle(errors.email)}
            type="text"
            id="email"
            {...register('email', {
              required: 'email is required',
              pattern: {
                value: /\S+@\S+\.\S/,
                message: 'must be an email',
              },
            })}
          />
          <ValidationError error={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            className={getEditorStyle(errors.email)}
            id="reason"
            {...register('reason', { required: 'must provide reason' })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError error={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
        </div>
        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black 
 text-white"
          >
            Sumbit
          </button>
        </div>
      </form>
    </div>
  );
}
