import React from "react";
import { chatsConnect } from "../../connects/chats/chatsConnect";
import { useSimpleForm } from "../../hooks/useSimpleForm/useSimpleForm";

export const CreateChatFormRender = ({addChats}) => {
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
  // useSimpleForm - кастомный хук с логикой работы формы

  const handleSubmit = (event) => {
    event.preventDefault();
    const chat = {
      id: Date.now().toString(),
      title: getFieldValue('title')
    };
    addChats(chat); // сформировала объект, передала в addChats
    resetForm();
  }

  return (
    // что-то не то с формой (у препода форма свернута в редакторе + использует материал юай - взять из репозитория материалстили и форму)
    // СМ, РЕПОЗИТОРИЙ
    // в стейт добавляется, но без названия ( т.е. данные то уходят = связка сработала )

<form onSubmit={handleSubmit} /* className={classes.root}  */noValidate autoComplete="off">
<input
  name='title'
  value={getFieldValue('title')}
  onChange={(event) => {
    setFieldValue('title', event.target.value);
  }}
  label="Title" />
<button type="submit">Save</button>
</form>
  )
}

export const CreateChatForm = chatsConnect(CreateChatFormRender);
