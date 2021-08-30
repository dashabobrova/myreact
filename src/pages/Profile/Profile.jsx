import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { createActionChangeCheckbox } from "../../store/checkbox/checkboxActions";
import s from './Profile.module.scss'

export const Profile = () => {

    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();
    
    return (
        <div className={s.checkbox_wrapper}>
                <Checkbox
                    checked={status}
                    onChange={() => {
                        dispatch(createActionChangeCheckbox(status))
                    }}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
        </div>
    )
}