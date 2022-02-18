import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const ProfileCard = ({ details }) => {
    return (
        <Card>
            <CardBody className='text-center'>
                <img alt="profile_pic" height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={details.picture?.large} />
                <CardTitle className='text-primary'>
                    <h1>
                        <span>{details.name?.title}. {details.name?.first} {details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText className='m-3'>
                    <span><FaMapMarkedAlt />  {details.location?.city}</span>
                </CardText>
                <CardText className='m-3'>
                    <span><FaPhone />  {details.phone}</span>
                </CardText>
                <CardText className='m-3'>
                    <span><FaEnvelope />  {details.email}</span>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default ProfileCard