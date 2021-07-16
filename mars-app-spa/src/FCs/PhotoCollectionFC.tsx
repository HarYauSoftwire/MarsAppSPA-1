import React, { useState } from "react";
import { numPerPage } from "../constants";
import { PhotoI } from "../nasaInterfaces";
import { PhotoFC } from "./PhotoFC";
import "../Styles/PhotoCollectionFC.css";
import styled from "styled-components";

const ArrowButton = styled.button`
    font: inherit;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid slategrey;
    border-radius: 3px;
`;

export const PhotoCollection: React.FC<{ photos: PhotoI[] }> = ({ photos }) => {
    const [pagination, setPagination] = useState({ start: 0, end: numPerPage });

    if (photos.length === 0) {
        return <p>No photos available</p>;
    }
    const photoList = photos
        .map((photo: PhotoI) => {
            return <PhotoFC photo={photo} />;
        })
        .slice(pagination.start, pagination.end);

    const moveLeft = () => {
        const newStart = Math.max(pagination.start - numPerPage, 0);
        const newEnd = newStart + numPerPage;
        setPagination({ start: newStart, end: newEnd });
    };
    const moveRight = () => {
        const newStart = Math.min(
            pagination.start + numPerPage,
            photos.length - 1
        );
        const newEnd = newStart + numPerPage;
        setPagination({ start: newStart, end: newEnd });
    };

    const leftButton = <ArrowButton onClick={moveLeft}>&lt;</ArrowButton>;
    const rightButton = <ArrowButton onClick={moveRight}>&gt;</ArrowButton>;
    console.log("Pagination start: " + pagination.start);
    console.log("Pagination end: " + pagination.end);
    return (
        <>
            {leftButton}
            {rightButton}
            <div className="flexDiv">{photoList}</div>
        </>
    );
};
