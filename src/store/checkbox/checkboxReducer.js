import { CHANGE_CHECKBOX, CREATE_CHECKBOX } from "./checkboxActions"


const initialState = {
    checkboxList: []
}

export const checkboxReducer = (state = initialState, action) => {
    switch(action.type) {

        case CREATE_CHECKBOX: {
            return {
                checkboxList: [
                    ...state.checkboxList,
                    action.payLoad 
                    // новый массив (я не обновляю, поэтому нужно избавиться) - перенести наполнение сразу в initialState*/
                ]
            }
        }

        case CHANGE_CHECKBOX: {
            const checkboxList = [...state.checkboxList]; // копия списка
            const currentCheckboxIndex = checkboxList.findIndex((checkbox) => checkbox.id === action.payLoad.id); // поиск индекса чекбокса, который хочу изменить

            checkboxList[currentCheckboxIndex] = { 
                ...checkboxList[currentCheckboxIndex], // копия объекта по индексу
                status: !action.payLoad.status // присваиваю новый статус (! - false меняю на true/ true меняю на false) изменяемому объекту
            }

            return {
                checkboxList // возвращаю список с измененным элементов
            }
        }

        default: {
            return state
        }
    }

}