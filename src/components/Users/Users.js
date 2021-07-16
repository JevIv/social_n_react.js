import React from "react";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize} />

        {
            users.map(u => <User user={u}
                                 key={u.id}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}/>)
        }
    </div>
}

export default Users;