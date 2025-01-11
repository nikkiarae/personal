import React from "react";
import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from '@assets/Resume_Nikki_Rae_2025.pdf'

interface ResumeButtonProps {}

const ResumeButton: React.FC<ResumeButtonProps> = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Nikki_Rae_Resume_2025.pdf";
    link.click();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
    >
        <Typography variant={'body1'}>
            Download Resume
        </Typography>
      
    </Button>
  );
};

export default ResumeButton;