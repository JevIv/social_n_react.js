import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


    return <div
        className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO2hiSp4nCSEmXcDvijRtsDcBH166buyhng&usqp=CAU" alt=""/>
        {props.message}
        <div>
            {props.likesCount}
            <span>Like</span>
        </div>
    </div>

}
export default Post;
