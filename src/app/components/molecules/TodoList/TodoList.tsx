'use client';

import { Colors } from '@styles/colors';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { TabController, TabPanel } from '../../atoms/Tabs';

function reducer(state: State, { type, value }: Action): State {
  switch (type) {
    case 'INITIATE': {
      return {
        ...state,
        todoItems: value.todoTitles.map(title => ({
          id: crypto.randomUUID(),
          title,
          completed: false,
        })),
      };
    }

    case 'COMPLETE': {
      return {
        ...state,
        todoItems: state.todoItems.map(item => {
          if (item.id === value) {
            return { ...item, completed: true };
          }
          return { ...item };
        }),
      };
    }

    case 'ACTIVE': {
      return {
        ...state,
        todoItems: state.todoItems.map(item => {
          if (item.id === value) {
            return { ...item, completed: false };
          }
          return { ...item };
        }),
      };
    }

    case 'FROM_STORAGE': {
      return { ...value };
    }

    default: {
      throw new Error('Invalid action type: ${action.type}');
    }
  }
}

export const TodoListSimple = ({ todoTitles }: TodoListProps) => {
  const [state, setState] = React.useState<TodoItem[]>(() => {
    return todoTitles.map(title => ({
      id: crypto.randomUUID(),
      title,
      completed: false,
    }));
  });

  const handleAddState = (title: string) => {
    setState([...state, { id: crypto.randomUUID(), title, completed: false }]);
  };

  const handleRemoveState = (id: string) => {
    setState(state.filter(item => item.id !== id));
  };

  const handleUpdateState = (id: string, todoItem: TodoItem) => {
    setState(state.map(item => (item.id === id ? todoItem : item)));
  };

  return (
    <>
      <ul>
        {state.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              value=""
              checked={item.completed}
              onClick={() => {
                handleUpdateState(item.id, {
                  ...item,
                  completed: !item.completed,
                });
              }}
            />
            {item.title}
            <button onClick={() => handleRemoveState(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleAddState(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </>
  );
};

export const TodoList = ({
  todoTitles = [],
  todoId = '123',
}: TodoListProps) => {
  const initialState: State = { todoItems: [], todoId };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const storedState = JSON.parse(
      localStorage.getItem(`todoList-${todoId}`) || `{}`,
    );
    if (storedState) {
      dispatch({ type: 'FROM_STORAGE', value: storedState });
    } else {
      dispatch({
        type: 'INITIATE',
        value: { todoTitles, todoId },
      });
    }
  }, [todoId, todoTitles]);

  // useEffect(() => {
  //   if (state.todoItems.length > 0) {
  //     localStorage.setItem(`todoList-${todoId}`, JSON.stringify(state));
  //   }
  // }, [state, todoId]);

  return (
    <section className="vh-100 gradient-custom">
      <TabController
        headers={[
          { id: 0, label: 'All' },
          { id: 1, label: 'Active' },
          { id: 2, label: 'Completed' },
        ]}
      >
        <TabPanel tabId={0}>
          <UL>
            {state?.todoItems.map((item, index) => (
              <LI
                key={index}
                onClick={() => {
                  if (item.completed) {
                    dispatch({ type: 'ACTIVE', value: item.id });
                  } else {
                    dispatch({ type: 'COMPLETE', value: item.id });
                  }
                }}
              >
                <input
                  type="checkbox"
                  value=""
                  checked={!item.completed}
                  readOnly
                />
                {item.title}
              </LI>
            ))}
          </UL>
        </TabPanel>
        <TabPanel tabId={1}>
          <UL>
            {state?.todoItems
              .filter(item => item.completed)
              .map((item, index) => (
                <LI
                  key={index}
                  onClick={() => {
                    if (item.completed) {
                      dispatch({ type: 'ACTIVE', value: item.id });
                    } else {
                      dispatch({ type: 'COMPLETE', value: item.id });
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    value=""
                    checked={!item.completed}
                    readOnly
                  />
                  {item.title}
                </LI>
              ))}
          </UL>
        </TabPanel>
        <TabPanel tabId={2}>
          <UL>
            {state?.todoItems
              .filter(item => !item.completed)
              .map((item, index) => (
                <LI
                  key={index}
                  onClick={() => {
                    if (item.completed) {
                      dispatch({ type: 'ACTIVE', value: item.id });
                    } else {
                      dispatch({ type: 'COMPLETE', value: item.id });
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    value=""
                    checked={!item.completed}
                    readOnly
                  />
                  {item.title}
                </LI>
              ))}
          </UL>
        </TabPanel>
      </TabController>
    </section>
  );
};

const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LI = styled.li`
  background-color: ${Colors.Primary};
  border-radius: 8px;
  margin-bottom: 32px;
  padding: 8px;
  cursor: pointer;
`;

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
};

type State = {
  todoItems: TodoItem[];
  todoId: string;
};

type Action =
  | { type: 'INITIATE'; value: { todoTitles: string[]; todoId: string } }
  | { type: 'FROM_STORAGE'; value: State }
  | { type: 'COMPLETE'; value: string }
  | { type: 'ACTIVE'; value: string };

type TodoListProps = {
  todoTitles: string[];
  todoId?: string;
};
