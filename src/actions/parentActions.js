export const getParentsLoading = () => ({
    type: 'GET_PARENTS_LOADING',
})

export const getParents = data => ({
    type: 'GET_PARENTS',
    payload: data,
})

export const getParentsFail = error => ({
    type: 'GET_PARENTS_FAIL',
    payload: error,
})