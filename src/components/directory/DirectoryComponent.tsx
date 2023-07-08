import React from "react";
import { CategoriesDirectoryItemProps, DirectoryComponentProps } from "../../types";
import { CategoryItem } from "./components/category-item/CategoryItem";
import './DirectoryComponent.styles.scss';

export const DirectoryComponent: React.FC<DirectoryComponentProps> = ({data})=> {
    return(
        <React.Fragment>
            <div className='categories-container'>
                {
                    data.map((element: CategoriesDirectoryItemProps)=> {
                        return(
                            <CategoryItem
                                key={element?.id}
                                id={element?.id}
                                title={element?.title}
                                imageUrl={element?.imageUrl}
                            />
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}