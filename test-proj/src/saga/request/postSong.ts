import { NewSongData, SavedSongResponse } from '../../songs/type';

const url = 'http://localhost:5000/songs';

export async function saveSong(newSongData: NewSongData) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newSongData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const body = (await response.json()) as unknown;
  assertIsSavedSongResponse(body);
  return { ...newSongData, ...body };
}

function assertIsSavedSongResponse(
  savedSongResponse: any,
): asserts savedSongResponse is SavedSongResponse {
  if (!('id' in savedSongResponse)) {
    throw new Error('savedSongResponse does not have an id');
  }
  if (typeof savedSongResponse.id !== 'number') {
    throw new Error('id is not a number');
  }
}
