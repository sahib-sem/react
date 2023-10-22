import { useEffect, useState } from 'react';

export function TextVanish({ text }: Props) {
  const [textToRender, setTextToRender] = useState(text);
  useEffect(() => {
    setTimeout(() => setTextToRender(''), 5000);
  }, []);
  return <span>{textToRender}</span>;
}

type Props = {
  text: string;
};
