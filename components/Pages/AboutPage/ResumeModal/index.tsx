import React from "react";
import SolidButton from "../../../Buttons/SolidButton";
import Modal from "../../../Modal";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} title="Resume">
                <Button
                    onClick={() => {
                        console.log("download resume")
                    }}
                    variant="default"
                    className="flex items-center gap-1"
                >
                    <DownloadIcon size={20} />
                    Download Resume
                </Button>
            </Modal>
        </div>
    );
}

export default ResumeModal;