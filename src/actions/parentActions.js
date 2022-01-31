export const getParents = data => ({
    type: 'GET_PARENTS',
    payload: data,
})

export const getParentsFail = error => ({
    type: 'GET_PARENTS_FAIL',
    payload: error,
})

export const deleteParent = id => ({
    type: 'DELETE_PARENT',
    payload: id,
})