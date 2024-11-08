import {memo} from "react";

export const TitleTextComponent = memo(function TitleTextComponent ({title}){
    return(
        <div className={'container mt-5'}>
            <h1 className='text-light'>{title}</h1>
        </div>
    )
})