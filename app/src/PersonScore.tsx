import { Reset } from './Reset';
import { getPerson } from './getPerson';
import { Reducer, useCallback, useEffect, useReducer, useRef } from 'react';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'Initialize';
      name: string;
    }
  | {
      type: 'Increment';
    }
  | {
      type: 'Decrement';
    }
  | {
      type: 'Reset';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'Initialize':
      return { name: action.name, score: 0, loading: false };
    case 'Increment':
      return { ...state, score: state.score + 1 };
    case 'Decrement':
      return { ...state, score: state.score - 1 };
    case 'Reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export const PersonScore = () => {
  const [{ name, score, loading }, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'Initialize', name: name });
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(addButtonRef.current);

      addButtonRef.current?.focus();
    }
  }, [loading]);
  const handleClick = useCallback(() => {
    dispatch({ type: 'Reset' });
  }, []);

  if (loading) {
    return <div>Loading ......</div>;
  }

  return (
    <div>
      <h3>
        {name} , {score}
      </h3>

      <button ref={addButtonRef} onClick={() => dispatch({ type: 'Increment' })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Substract</button>
      <Reset onClick={handleClick} />
    </div>
  );
};
