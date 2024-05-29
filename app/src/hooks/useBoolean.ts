import { useMemo, useReducer, Dispatch } from 'react';

type ToggleHandlers = {
  toggle: Dispatch<any>;
  on: () => void;
  off: () => void;
};

function toggler(currentValue: any, newValue: any) {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
}

function useToggle(initialValue = false): [boolean, Dispatch<any>] {
  return useReducer(toggler, initialValue);
}

function useBoolean(initialValue = false): [boolean, ToggleHandlers] {
  const [value, toggle] = useToggle(initialValue);

  const handlers: ToggleHandlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false)
    }),
    [toggle]
  );

  return [value, handlers];
}

export default useBoolean;
