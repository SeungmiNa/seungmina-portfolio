import Image from 'next/image';
import React from 'react';

interface ImageContainerProps {
    image: string;
    alt: string;
    className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image, alt, className, ...props }) => {
    return (
        <div className={`relative w-full h-full ${className || ''}`}>
            <Image
                src={image}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                priority
                {...props}
            />
        </div>
    );
};

export default ImageContainer;