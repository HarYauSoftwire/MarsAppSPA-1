import React from 'react';
import '../Styles/TitleParagraphsImage.css'
export const TitleParagraphsImageFC : React.FC <TitleParagraphsImageProps> = 
    ({title,paragraph1,paragraph2,image})=>{
        return (
            <>
                <h1>{title}</h1>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <img src={image} className="image" alt="textImage" />
            </>
        );
    };

type TitleParagraphsImageProps = {
    title:string;
    paragraph1:string;
    paragraph2:string;
    image:string;
}