import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // { id: 1,
      //   name: 'John Doe',
      //   email: 'jdoe@gmail.com',
      //   phone: '555-555-5555'
      // },
      // { id: 2,
      //   name: 'Karen Smith',
      //   email: 'karen@gmail.com',
      //   phone: '333-333-3333'
      // },
      // { id: 3,
      //   name: 'Henry Johnson',
      //   email: 'henry@gmail.com',
      //   phone: '111-111-1111'
      // },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((data) =>
    //     this.setState({
    //       title: data.title,
    //       body: data.body,
    //     })
    //   );

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // w/o async/await
    // .then((res) =>
    //   this.setState({
    //     contacts: res.data,
    //   })
    // );
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
