export const CREATE_CHECKBOX = 'CREATE_CHECKBOX'

export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX'

export const createActionCreateCheckbox = (payLoad) => ({
    type: CREATE_CHECKBOX,
    payLoad
})

export const createActionChangeCheckbox = (id, status) => ({
    type: CHANGE_CHECKBOX,
    payLoad: { id, status }
})