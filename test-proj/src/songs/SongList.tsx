import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  OpenCreateModal,
  OpenDeleteModal,
  OpenEditModal,
  SetOpenedSongId,
  StartGetSongData,
} from '../store/songsSlice';
import { useEffect } from 'react';
import { Container } from './styles/Container.styled';
export function SongList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartGetSongData());
  }, [dispatch]);

  const songs = useSelector((state: RootState) => state.songs.songs);

  return (
    <Container>
      <ul className="list-none">
        {songs.map((s) => {
          return (
            <div key={s.id}>
              <li className="border-b py-4">
                <h3 className="text-slate-900 font-bold">{s.title}</h3>
                <p className=" text-slate-900 ">{s.singer}</p>
                <p className=" text-slate-900 ">{s.genre}</p>
                <p className=" text-slate-900 ">{s.youtube_link}</p>
              </li>

              <div>
                <button
                  onClick={() => {
                    dispatch(OpenEditModal());
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(OpenDeleteModal());
                    dispatch(SetOpenedSongId(s.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            dispatch(OpenCreateModal());
          }}
        >
          Add New Song
        </button>
      </div>
    </Container>
  );
}
