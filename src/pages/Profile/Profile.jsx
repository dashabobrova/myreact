import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import {
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
  } from "@material-ui/core";
import { createActionChangeCheckbox } from "../../store/checkbox/checkboxActions";
import s from './Profile.module.scss'

export const Profile = () => {

    const checkboxList = useSelector((state) => state.checkboxList);
        // useSelector() имеет доступ к редаксу через контекст, и через переданную функцию вытаскиваю список checkboxList и сохраняю в переменную
    const dispatch = useDispatch();
        // useDispatch предоставляет функцию для выполнения экшенов

    return (
        <div className={s.checkbox_wrapper}>
            <List>
                {
                    checkboxList.map(({text, status, id}) => 
                        <ListItem key={id}>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <Checkbox
                                    checked={status}
                                    onChange={() => {
                                        dispatch(createActionChangeCheckbox(id, status))
                                    }}
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                    />
                                    
                                    <ListItemText
                                        primary={text}
                                    />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}