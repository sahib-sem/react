import { Form, NavLink, useSearchParams } from 'react-router-dom';

export function Header() {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex items-center justify-center">
      <nav>
        <ul className="flex-2">
          <NavLink
            to="/"
            className={(isActive) =>
              `${
                isActive ? 'border-slate-300' : 'border-transparent'
              } text-blue no-underline p-1 pb-0.5 border-solid `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="posts"
            className={(isActive) =>
              `${
                isActive ? 'border-slate-300' : 'border-transparent'
              } text-blue no-underline p-1 pb-0.5 border-solid `
            }
          >
            Posts
          </NavLink>
        </ul>
        <Form className="relative text-right" action="/posts">
          <input
            type="search"
            name="title_like"
            defaultValue={searchParams.get('title_like') ?? ''}
            className="absolute right-100 top-100 rounded py-2 px-3 
 text-gray-700"
          />
        </Form>
      </nav>
    </div>
  );
}
