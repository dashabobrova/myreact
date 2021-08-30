import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { createActionChangeCheckbox } from "../../store/checkbox/checkboxActions";
import s from './Profile.module.scss'

export const Profile = () => {

    const stateStatus = useSelector((state) => state);
    const dispatch = useDispatch();
    
    return (
        <div className={s.checkbox_wrapper}>
                <Checkbox
                    checked={stateStatus}
                    onChange={() => {
                        dispatch(createActionChangeCheckbox(stateStatus))
                    }}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
        </div>
    )
}