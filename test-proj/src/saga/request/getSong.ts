import { SongData } from '../../songs/type';

const url = 'http://localhost:5000/songs';

export async function getSongs() {
  const data = await fetch(url);
  const songs = await data.json();
  console.log(songs, 'getSongs');
  assertIsSongs(songs);

  return songs;
}

export function assertIsSongs(songData: unknown): asserts songData is SongData[] {
  if (!Array.isArray(songData)) {
    throw new Error('songData is not an array');
  }
  if (songData.length === 0) {
    return;
  }
  songData.forEach((song) => {
    if (!('id' in song)) {
      throw new Error("song doesn't have an id");
    }
    if (typeof song.id != 'number') {
      throw new Error("id isn't a number");
    }
    if (!('title' in song)) {
      throw new Error("song doesn't have a title");
    }
    if (typeof song.title != 'string') {
      throw new Error("title isn't a string");
    }
    if (!('genre' in song)) {
      throw new Error("song doesn't have a genre");
    }
    if (typeof song.genre != 'string') {
      throw new Error("genre isn't a string");
    }
    if (!('singer' in song)) {
      throw new Error("song doesn't have a singer");
    }
    if (typeof song.singer != 'string') {
      throw new Error("singer isn't a string");
    }
    if (!('youtube_link' in song)) {
      throw new Error('song is does not have a youtube link');
    }
    if (typeof song.youtube_link != 'string') {
      throw new Error("song doesn't have a youtube link");
    }
  });
}
