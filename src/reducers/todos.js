const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? { id: action.id, title: action.title, completed: action.completed }
          : todo
      );
    case "REMOVE_TODO":
      return [...state].filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
