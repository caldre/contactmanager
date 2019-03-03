import React, { useReducer } from "react";

const Context = React.createContext();

let initialState = {
  contacts: [
    {
      id: 1,
      name: "Jyrki R",
      email: "jyrki@gmail.com",
      phone: "666-1234"
    },
    {
      id: 2,
      name: "Niina K",
      email: "niina@gmail.com",
      phone: "666-4321"
    },
    {
      id: 3,
      name: "Isla R",
      email: "isla@gmail.com",
      phone: "666-666-6666"
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

const Provider = props => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export { Provider, Context, Consumer };
