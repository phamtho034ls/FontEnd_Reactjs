import React from 'react';
import CategoryGroup from './CategoryGroup';

const CATEGORY_GROUPS = [
    { groupName: "All" },
    {
        groupName: "Iphone & Mac",
        categories: [
            { key: "iphone", label: "Iphone" },
            { key: "ipad", label: "Ipad" },
            { key: "macbook", label: "Macbook" }
        ]
    },
    {
        groupName: "Wireless",
        categories: [
            { key: "airpod", label: "Airpod" },
            { key: "watch", label: "Watch" }
        ]
    },
    {
        groupName: "Other",
        categories: [
            { key: "mouse", label: "Mouse" },
            { key: "keyboard", label: "Keyboard" },
            { key: "orther", label: "Other" }
        ]
    },
]


const Categories = () => {


    const renderCategories = () => {
        return CATEGORY_GROUPS.map((group) => {
            return <CategoryGroup key={group.groupName} group={group} />
        })
    }

    return (
        <div>{renderCategories()}</div>
    )
}

export default Categories