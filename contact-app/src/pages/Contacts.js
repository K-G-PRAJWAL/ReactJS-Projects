import React, { useContext } from "react";

import { Container, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import Contact from "../components/Contact";
import { MdAdd } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { ContactContext } from "../context/Context";
import { CONTACT_TO_UPDATE } from "../context/action.types";

const Contacts = () => {
  const { state, dispatch } = useContext(ContactContext);

  const { contacts, isLoading } = state;

  const history = useHistory();

  const AddContact = () => {
    dispatch({
      type: CONTACT_TO_UPDATE,
      payload: null,
      key: null
    })
    history.push("/contact/add");
  };

  if (isLoading) {
    return (
      <div className="Center">
        <Spinner color="primary" />
        <div className="text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      {
        contacts.length === 0 && !isLoading ?
          (
            <div className="Center text-large text-primary">
              No Contacts Found.
            </div>
          )
          :
          (
            <ListGroup>
              {Object.entries(contacts).map(([key, value]) => (
                <ListGroupItem key={key}>
                  <Contact contact={value} contactKey={key} />
                </ListGroupItem>
              ))}
            </ListGroup>
          )
      }
      <MdAdd className="fab icon " onClick={AddContact} />
    </Container>
  );
};

export default Contacts;
