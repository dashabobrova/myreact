export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX'

export const createActionChangeCheckbox = (id, status) => ({
    type: CHANGE_CHECKBOX,
    payLoad: { id, status }
})