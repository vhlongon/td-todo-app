import React, { useCallback, useReducer, useRef } from 'react';
import Box from './Box';
import Heading from './Heading';
import List from './List';

export type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type State = Todo[];
type Action = { type: 'add'; text: string } | { type: 'remove'; id: number };

const Todos = () => {
  const [todos, dispatch] = useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'add': {
        return [...state, { id: state.length, text: action.text, done: false }];
      }
      case 'remove': {
        return state.filter(({ id }) => id !== action.id);
      }
      default: {
        throw new Error('not valid action type');
      }
    }
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (inputRef.current) {
      dispatch({ type: 'add', text: inputRef.current?.value });
      inputRef.current.value = '';
    }
  }, []);

  return (
    <div>
      <Heading text="TODOS"></Heading>

      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <Box>
              {text}
              <button
                onClick={() => {
                  dispatch({ type: 'remove', id });
                }}
              >
                Remove
              </button>
            </Box>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Todos;
