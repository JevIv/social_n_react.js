import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) { //esli netu profile to->
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src="https://www.custom-wallpaper-printing.co.uk/custom/catalog/Howell/Tony-Howell-Z539-5016-8-Clifton-Suspension-Bridge-room.jpg" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                {/*<img src={profile.photos.large} alt=""/>*/}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
