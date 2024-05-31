import React from 'react'
import { useSearchParams } from 'react-router-dom';

const CategoryItem = ({ cate }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onClickCate = (cate) => {
        searchParams.set("category", cate);
        setSearchParams(searchParams, { replace: true });
    }
    return (
        <button
            key={cate?.key}
            type="button"
            className="list-group-item list-group-item-action text-capitalize "
            onClick={() => onClickCate(cate.key)}
        >
            {cate?.label}
        </button>
    )
}

export default CategoryItem