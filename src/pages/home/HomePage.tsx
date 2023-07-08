import React from "react";
import { constants } from "../../constants";
import { DirectoryComponent } from "../../components";


export const HomePage: React.FC = ()=> {
    return(
        <React.Fragment>
            <DirectoryComponent data={constants?.categories_directory_list}/>
            
        </React.Fragment>
    )
}