// React
import React, { useContext } from "react";

// Reactstrap
import { Row, Col } from "reactstrap";

// React icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

// Firebase
import firebase from 'firebase/app'

// Context
import { ContactContext } from '../context/Context'
import { CONTACT_TO_UPDATE, SET_SINGLE_CONTACT } from '../context/action.types'

// React router
import { useHistory } from "react-router-dom";

// React toast
import { toast } from "react-toastify";

const Contact = ({ contact, contactKey }) => {
  const { dispatch } = useContext(ContactContext)
  const history = useHistory();

  const deleteContact = () => {
    firebase
      .database()
      .ref(`/contacts/${contactKey}`)
      .remove()
      .then(() => {
        toast("Deleted Successfully.", { type: 'success' })
      })
      .catch(err => console.log(err))
  };

  const updateImpContact = () => {
    firebase
      .database()
      .ref(`/contacts/${contactKey}`)
      .update(
        {
          star: !contact.star
        },
        err => {
          console.log(err)
        }
      )
      .then(() => {
        toast("Contact Updated", { type: "info" })
      })
      .catch(err => console.log(err))
  };

  const updateContact = () => {
    dispatch({
      type: CONTACT_TO_UPDATE,
      payload: contact,
      key: contactKey
    })

    history.push("/contact/add");
  };

  const viewSingleContact = contact => {
    dispatch({
      type: SET_SINGLE_CONTACT,
      payload: contact
    })

    history.push("/contact/view");
  };

  return (
    <>
      <Row>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="icon" onClick={() => updateImpContact()}>
            {contact.star ? (
              <FaStar className=" text-primary" />
            ) : (
              <FaRegStar className=" text-info" />
            )}
          </div>
        </Col>
        <Col
          md="2"
          className="d-flex justify-content-center align-items-center"
        >
          <img src={contact.picture} alt="" className="img-circle profile" />
        </Col>
        <Col md="8" onClick={() => viewSingleContact(contact)}>
          <div className="text-primary">{contact.name}</div>

          <div className="text-secondary">{contact.phoneNumber}</div>
          <div className="text-secondary">{contact.email} </div>

          <div className="text-info">{contact.address}</div>
        </Col>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
          <MdDelete
            onClick={() => deleteContact()}
            color="danger"
            className="text-danger icon"
          />
          <MdEdit
            className="icon text-info ml-2"
            onClick={() => updateContact()}
          />
        </Col>
      </Row>
    </>
  );
};

export default Contact;
