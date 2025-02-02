import React from 'react';

interface ImageContainerProps {
    image: string;
    alt: string;
    className?: string;
    innerClassName?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image, alt, className, innerClassName, ...props }) => {
    return (
        <div className={`relative w-full h-full ${className || ''}`}>
            <img
                src={image}
                alt={alt}
                className={`w-full h-auto object-contain ${innerClassName || ''}`}
                {...props}
            />
        </div>
    );
};

export default ImageContainer;