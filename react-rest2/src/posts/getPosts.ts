import { PostData } from './types';

export async function getPosts() {
  const response = await fetch(process.env.REACT_APP_API_URL!);
  const body = await response.json();
  assertIsPosts(body);
  return body;
}

export function assertIsPosts(postData: unknown): asserts postData is PostData[] {
  if (!Array.isArray(postData)) {
    throw new Error('posts is not an array');
  }
  if (postData.length === 0) {
    return;
  }
  postData.forEach((post) => {
    if (!('id' in post)) {
      throw new Error("post doesn't have an id");
    }
    if (typeof post.id != 'number') {
      throw new Error("id isn't a number");
    }
    if (!('title' in post)) {
      throw new Error("post doesn't have a title");
    }
    if (typeof post.title != 'string') {
      throw new Error("title isn't a string");
    }
    if (!('description' in post)) {
      throw new Error("post doesn't have an id");
    }
    if (typeof post.description != 'string') {
      throw new Error("description isn't a string");
    }
  });
}
