import React from 'react';
import { Typography } from '@mui/material';
import { TStatus } from '../types';

export const WorkflowStepContent = (props: TProps) => {
    return (
        <Typography sx={{
            fontSize: "14px", whiteSpace: "pre-line", my: 1, fontWeight: 500, color:
                props.status === "completed" ? "#66bb6a"
                    : props.status === "failed" ? "#f44336"
                        : "inherit"
        }}>
            {'- ' + props.content}
        </Typography>
    );
}


type TProps = {
    content: string;
    status: TStatus;
} 