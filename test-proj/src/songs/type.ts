export type SongData = {
  id: number;
  title: string;
  singer: string;
  genre: string;
  youtube_link: string;
};
export type NewSongData = {
  title: string;
  singer: string;
  genre: string;
  youtube_link: string;
};
export type SavedSongResponse = {
  id: number;
};
export type DeletedSongResponse = {
  id: number;
};
