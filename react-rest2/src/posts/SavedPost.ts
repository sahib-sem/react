import { NewPostData, SavedPostData } from './types';

export async function savePost(newPostData: NewPostData) {
  const response = await fetch(process.env.REACT_APP_API_URL!, {
    method: 'POST',
    body: JSON.stringify(newPostData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const body = (await response.json()) as unknown;
  assertIsSavedPost(body);
  return { ...newPostData, ...body };
}

export function assertIsSavedPost(savePostData: any): asserts savePostData is SavedPostData {
  if (!('id' in savePostData)) {
    throw new Error("savePostData doesn't have an id");
  }
  if (typeof savePostData.id !== 'number') {
    throw new Error('id is not a number');
  }
}
