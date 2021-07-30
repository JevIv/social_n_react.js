import React, {useEffect, useState} from 'react';



const ProfileStatusWithHooks = (props) => {
/*  let stateWithSetState = useState(false); //vozvra6aet massiv iz dvuh elementov
    let editMode = stateWithSetState[0];
    let SetEditMode = stateWithSetState[1];
    */

    let [editMode, setEditMode] = useState(false); // [zna4enie, func, kotoroij mozem menjatj eto zna4enie]
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { ! editMode &&
                <div>
                    <b></b><span onDoubleClick={activateEditMode}>{ props.status || "---NO-STATUS---"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
