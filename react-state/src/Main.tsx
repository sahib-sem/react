import { useSelector } from 'react-redux';
import { Content } from './Content';
import { RootType } from './store/store';

export function Main() {
  const user = useSelector((state: RootType) => state.user.user);
  return (
    <main className="py-8">
      <h1
        className="text-3xl text-center font-bold 
 underline"
      >
        Welcome
      </h1>
      {user ? (
        <p className="mt-8 text-xl text-center"> Hello {user.name}</p>
      ) : (
        <p className="mt-8 text-xl text-center">please sign in</p>
      )}
      <Content></Content>
    </main>
  );
}
