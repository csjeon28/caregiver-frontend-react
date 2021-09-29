import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ParentCard from '../components/ParentCard'
import getParents from '../fetches/getParents'

const CaregiverDashboard = ({ parents, loading, error, getParents }) => {
    useEffect(() => {
        getParents()
    }, [])

    let parentCard
    if (loading) {
        parentCard = <div className='loading-container'><div className='loading' /></div>
    }
    if (parents) {
        parentCard = parents.map(p => <ParentCard key={p.name} parent={p} />)
    }
    if (error) {
        parentCard = (
            <div>
                Error!
                {error.message}
            </div>
        )
    }

    return (
        <div>
            {parentCard}
        </div>
    )
}

const mapStateToProps = state => ({
    parents: state.parentData.parents,
    loading: state.parentData.loading,
    error: state.parentData.error,
})

const mapDispatchToProps = {
    getParents,
}

CaregiverDashboard.propTypes = {
    parents: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    getParents: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverDashboard)