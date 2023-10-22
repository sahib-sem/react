import { FieldError } from 'react-hook-form';
type Prop = {
  error: FieldError | undefined;
};
export function ValidationError({ error }: Prop) {
  if (!error) {
    return null;
  }

  return (
    <div role="alert" className="text-red-500 mt-1 text-xs">
      {error.message}
    </div>
  );
}
