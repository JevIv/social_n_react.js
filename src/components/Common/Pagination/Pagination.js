import React, {useState} from "react";
import styles from "./Pagination.module.css";
import cn from 'classnames';


let Pagination = ({currentPage, totalUsersCount, pageSize, onPageChanged, portionSize=10, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
/*

    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
*/
    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortinNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pagination}>
            { portionNumber > 1 &&
            <button onClick={() => setPortinNumber(portionNumber - 1)}>Previous</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <button className={ cn ({
                    [styles.selectedPage] : currentPage === p},
                    styles.selectedPage) }
                               key={p}
                               onClick={() => {
                                   onPageChanged(p);
                               }}>{p}</button>
            })}
            { portionCount > portionNumber &&
            <button onClick={() => {setPortinNumber(portionNumber + 1)}}>Next</button>}
        </div>)

}

export default Pagination;