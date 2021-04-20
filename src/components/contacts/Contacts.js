import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  // state = {
  // contacts: [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "jdoe@gmail.com",
  //     phone: "555-555-5555",
  //   },
  //   {
  //     id: 2,
  //     name: "Karen Smith",
  //     email: "karen@gmail.com",
  //     phone: "333-333-3333",
  //   },
  //   {
  //     id: 3,
  //     name: "Henry Johnson",
  //     email: "henry@gmail.com",
  //     phone: "111-111-1111",
  //   },
  // ],
  // };

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
