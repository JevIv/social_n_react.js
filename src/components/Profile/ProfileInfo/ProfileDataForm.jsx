import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import style from "../../Common/FormsControl/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) =>{
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full Name</b>:
                { createField("Full name", "fllname", [], Input) }
            </div>
            <div>
                <b>Loking for a job</b>:
                { createField("", "lookingForAJob", [], Input, {type: "checkbox"}) }
            </div>
            <div>
                <b>My professional skills</b>:
                { createField("My professional skills", "lookingForAJobDescription", [], Textarea) }
            </div>
            <div>
                <b>About me</b>:
                { createField("About me", "aboutMe", [], Textarea) }
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: { createField(key, "contacts." + key, [], Input) }</b>
                    </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm