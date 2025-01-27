import React from "react";
import Modal from "../../../Modal";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({
    isOpen,
    onClose,
}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/images/24-resume-ux:ui-seungmi-na.pdf';
        link.download = 'resume-seungmi-na.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose} 
                title="Resume"
                maxWidth="1000px"
            >
                <div className="relative w-full mx-auto">
                    <div className="relative">
                        <div className="absolute top-4 right-4 z-10">
                            <Button
                                onClick={handleDownload}
                                variant="default"
                                className="flex items-center gap-1"
                            >
                                <DownloadIcon size={20} />
                            </Button>
                        </div>
                        <Image
                            src="/images/resume-seungmi-na.png"
                            alt="Seungmi Na Resume"
                            width={800}
                            height={1131}
                            className="w-full h-auto rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ResumeModal;