import { useDispatch, useSelector } from 'react-redux';
import { CloseDeleteModal, StartDeleteSongData } from '../../store/songsSlice';
import { RootState } from '../../store/store';

export function DeleteModal() {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.songs.openedSongId);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(CloseDeleteModal());
        }}
      >
        X
      </button>

      <div>
        <p>Are you sure you want to delete this song?</p>
      </div>

      <div>
        <button
          onClick={() => {
            dispatch(StartDeleteSongData({ id: id! }));
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            dispatch(CloseDeleteModal());
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
