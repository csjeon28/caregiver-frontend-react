import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ParentCard = ({ parent }) => (
    <section>
        <div>
            <img src={parent.profile_image ? parent.profile_image : defaultImg} alt={parent.first_name && parent.last_name} />
        </div>
        <div>
            <h3>Name: {parent.first_name}{parent.last_name}</h3>
            <p>Bio: {parent.bio}</p>
            <h4>I'm from: {parent.city}, {parent.state}, {parent.country}</h4>
            <h4>Language(s) Spoken: {parent.language}</h4>
            <p>
                Number of Children:
                {' '}
                <span>{parent.number_of_children}</span>
            </p>
            <p>
                Hourly Rate:
                {' '}
                <span>${parent.hourly_rate}</span>
                /hour
            </p>
        </div>
        <div>
            <Link to={`/${parent.id}/book-job`}>Book Job</Link>
        </div>
    </section>
)

ParentCard.propTypes = {
    parent: PropTypes.instanceOf(Object).isRequired,
}

export default ParentCard