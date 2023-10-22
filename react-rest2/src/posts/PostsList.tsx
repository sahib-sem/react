import { PostData } from './types';

type Prop = {
  posts: PostData[];
};
export function PostList({ posts }: Prop) {
  return (
    <ul className="list-none">
      {posts.map((p) => {
        return (
          <li key={p.id} className="border-b py-4">
            <h3 className="text-slate-900 font-bold">{p.title}</h3>
            <p className=" text-slate-900 ">{p.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
