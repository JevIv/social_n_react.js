import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMessageBody"}
                       placeholder={"Enter your message"}
                />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export const AddMessageFormRedux =reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);