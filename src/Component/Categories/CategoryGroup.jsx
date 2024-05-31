import React from 'react'
import CategoryItem from './CategoryItem'
import { useSearchParams } from 'react-router-dom';

const CategoryGroup = ({ group }) => {
    const [_, setSearchParams] = useSearchParams();

    const onClickCate = (cate) => {

        setSearchParams({ category: cate })
    }

    return (
        <div key={group.groupName}>
            <button
                type="button"
                className={`list-group-item list-group-item-action text-uppercase ${group.categories ? "active list-group-item-dark" : ""}`}
                {...(!group.categories && { onClick: onClickCate(group.groupName) })}
            >
                {group.groupName}
            </button>
            {
                group?.categories?.map((cate) => {
                    return <CategoryItem key={cate.key} cate={cate} />
                })
            }
        </div >
    )
}

export default CategoryGroup