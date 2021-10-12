import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CaregiverCard = ({ caregiver }) => {

    return (
        <section>
            <hr />
            <div>
                <h3>Caregiver Name: {caregiver.first_name} {caregiver.last_name}</h3>
                <p>About me: {caregiver.bio}</p>
                <h4>I'm from: {caregiver.city}, {caregiver.state}</h4>
                <h4>Date of Birth: {caregiver.date_of_birth}</h4>
                <h4>Language(s) Spoken: {caregiver.language}</h4>
                <p>
                    Hourly Rate:
                    {' '}
                    <span>${caregiver.hourly_rate}</span>
                    /hour
                </p>
                <h5>Smoker: {caregiver.smoker}</h5>
                <h5>I can drive: {caregiver.ability_to_drive}</h5>
                <h5>Certified: {caregiver.first_aid_cert}{caregiver.CPR_cert}</h5>
            </div>
            <div>
                <Link to={`/${caregiver.id}/match-job`}>Match</Link>&nbsp;&nbsp;

            </div>
        </section>
    )
}

CaregiverCard.propTypes = {
    caregiver: PropTypes.instanceOf(Object).isRequired
}

export default CaregiverCard