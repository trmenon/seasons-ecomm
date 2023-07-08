import React from "react";
import { CategoriesDirectoryItemProps } from "../../../../types";
import './CategoryItem.styles.scss';

export const CategoryItem: React.FC<CategoriesDirectoryItemProps> = ({
    id,
    imageUrl,
    title
})=> {
    return(
        <React.Fragment>
            <div 
                key={`category-item-key-${id}`} 
                className="category-container"
            >
                <div 
                    className="background-image" 
                    style={{backgroundImage: `url(${imageUrl})`}}
                ></div>
                <div className="category-body-container">
                  <h2>{title}</h2>
                  <p>Shop Now</p>
                </div>
            </div>
        </React.Fragment>
    )
}