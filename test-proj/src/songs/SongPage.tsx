import { SongList } from './SongList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NewSongForm } from './modals/NewSongForm';
import { Container } from './styles/Container.styled';
import { DeleteModal } from './modals/DeleteModal';

export function SongsPage() {
  const { openCreateModal, openDeleteModal, openEditModal } = useSelector(
    (state: RootState) => state.songs,
  );

  return (
    <Container>
      <h2>Songs</h2>
      <SongList></SongList>
      {openCreateModal && <NewSongForm />}
      {openDeleteModal && <DeleteModal />}
    </Container>
  );
}
