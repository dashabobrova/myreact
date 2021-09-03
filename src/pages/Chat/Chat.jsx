import { Redirect, useParams } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";

import { CreateMessageFormHOC } from "../../containers/CreateMessageFormHOC/CreateMessageFormHOC";

export const Chat = (props) => {
    const {chatId} = useParams(); // id из url

    if(!{chatId}){ // корректное поведение при отсутствии искомого чата
        return <Redirect to='/chatpage'/>
    }

    return (
        <div>
            <CreateMessageFormHOC chatId={chatId}/> 
            <MessageList chatId={chatId}/>
        </div>
    )
}
