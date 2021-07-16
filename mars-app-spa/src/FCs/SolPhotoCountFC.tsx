export const SolPhotoCountFC: React.FC<{ photoCount?: number }> = ({
    photoCount,
}) => {
    return (
        <>{photoCount !== undefined && <p>Number of photos: {photoCount}</p>}</>
    );
};
