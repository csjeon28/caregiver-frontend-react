// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import deleteParent from '../fetches/deleteParent'

const ParentCard = ({ parent }) => {
    // const history = useHistory()
    // const handleDelete = () => {
    //     deleteParent(parent.id)
    //     // const url = `http://localhost:3001/parents/${parent.id}`
    //     // axios.delete(url)
    //     history.push('/caregiver-dashboard')
    // }

    return (
        <section>
            <hr />
            <div>
                <h3>Parent Name: {parent.first_name} {parent.last_name}</h3>
                <p>About me: {parent.bio}</p>
                <h4>I'm from: {parent.city}, {parent.state}, {parent.country}</h4>
                <h4>Language(s) Spoken: {parent.language}</h4>
                <p>Number of Children: {parent.number_of_children}</p>
                <p>
                    Hourly Rate:
                    {' '}
                    <span>${parent.hourly_rate}</span>
                    /hour
                </p>
                <h5>Smoker: {parent.smoker}</h5>
                <h5>I have pets: {parent.has_pets}</h5>
            </div>
            <div>
                <Link to={`/${parent.id}/match-job`}>Match</Link>&nbsp;&nbsp;

            </div>
        </section>
    )
}

ParentCard.propTypes = {
    parent: PropTypes.instanceOf(Object).isRequired
}

export default ParentCard