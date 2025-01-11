import { Stack } from '@mui/material';
import React from 'react';
import { Heading, SubHeading } from '@components/typography';

interface PageHeaderProps {
    heading: string
    subHeading?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subHeading }) => {
  return (
    <Stack spacing={2} sx={{ marginBottom: 4 }}>
        <Heading text={heading} />
        { subHeading && 
            <SubHeading text={ subHeading } />  
        }    
    </Stack>
  )
};

export default PageHeader;