import React, { useRef, useEffect } from 'react';
import { withBasePath } from '@/utils/paths';

interface VideoContainerProps {
    video: string;
    className?: string;
    innerClassName?: string;
    controls?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({ 
    video, 
    className, 
    innerClassName,
    controls = true,
    autoplay = false,
    loop = false,
    muted = false,
    playsInline = true,
    ...props 
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleEnded = () => {
            if (loop) {
                videoElement.currentTime = 0;
                videoElement.play();
            }
        };

        videoElement.addEventListener('ended', handleEnded);

        return () => {
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [loop]);

    return (
        <div className={`relative w-full h-full ${className || ''}`}>
            <video
                ref={videoRef}
                src={withBasePath(video)}
                controls={controls}
                autoPlay={autoplay}
                loop={loop}
                muted={muted}
                playsInline={playsInline}
                className={`w-full h-auto object-contain ${innerClassName || ''}`}
                {...props}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoContainer;

