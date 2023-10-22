import { useSelector } from 'react-redux';
import { RootType } from './store/store';

export function Content() {
  const permissions = useSelector((state: RootType) => state.user.permissions);
  if (permissions === undefined) {
    return null;
  }

  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">stuff only admins can do</p>
  ) : (
    <p className="mt-4 text-l text-center">insufficient permission</p>
  );
}
