import { DeletedSongResponse } from '../../songs/type';

const url = 'http://localhost:5000/songs';

export async function deleteSong(id: number) {
  const response = await fetch(url + '/' + id, {
    method: 'DELETE',
  });
  const body = await response.json();
  assertIsDeletedSongResponse(body);
  return body;
}
function assertIsDeletedSongResponse(
  deletedSongResponse: any,
): asserts deletedSongResponse is DeletedSongResponse {
  if (!('id' in deletedSongResponse)) {
    throw new Error('deletedSongResponse does not have an id');
  }
  if (typeof deletedSongResponse.id !== 'number') {
    throw new Error('id is not a number');
  }
}
