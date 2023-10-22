import { autheticate } from './api/autheticate';
import { authorize } from './api/authorize';
import { RootType } from './store/store';
import {
  authorizeUser,
  autheticateUser,
  authorizedUser,
  autheticatedUser,
} from './store/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Header() {
  const user = useSelector((state: RootType) => state.user.user);
  const loading = useSelector((state: RootType) => state.user.loading);
  const dispatch = useDispatch();

  async function onSignIn() {
    dispatch(autheticateUser());
    const user = await autheticate();

    dispatch(autheticatedUser(user));
    if (user !== undefined) {
      dispatch(authorizeUser);
      const permissions = await authorize(user.id);
      dispatch(authorizedUser(permissions));
    }
  }
  return (
    <header
      className="flex justify-between items-center 
    border-b-2 border-gray-100 py-6"
    >
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          className="whitespace-nowrap inline-flex items-center justify-center ml-auto px-4 py-2 w-36 
            border border-transparent rounded-md 
            shadow-sm text-base font-medium text-white 
            bg-indigo-600 hover:bg-indigo-700"
          onClick={onSignIn}
          disabled={loading}
        >
          {loading ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
