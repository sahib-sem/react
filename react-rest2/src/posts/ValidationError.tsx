import { FieldError } from 'react-hook-form';
type Prop = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: Prop) {
  if (fieldError === undefined) {
    return null;
  }
  return (
    <div
      role="alert"
      className="text-red-500 text-xs 
    mt-1"
    >
      {fieldError.message}
    </div>
  );
}
