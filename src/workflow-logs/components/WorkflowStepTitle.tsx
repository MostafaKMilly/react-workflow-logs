import { useMemo } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TStatus } from "../types";

export const WorkflowStepTitle = (props: TProps) => {
    const statusIcon = useMemo(() => {
        switch (props.status) {
            case "completed": {
                return <CheckIcon color="success" fontSize="small" />
            }
            case "failed": {
                return <ErrorIcon color="error" fontSize="small" />
            }
            case "init": {
                return null;
            }
            case "pending": {
                return <HourglassEmptyIcon fontSize="small" />
            }
        }
    }, [props.status])

    return (
        <Box display="flex" columnGap={1}>
            {statusIcon}
            <Typography fontSize="16px">
                {props.title}
            </Typography>
        </Box>
    )
}

type TProps = {
    /**Title of step */
    title: string;
    /**Status of step */
    status: TStatus;
}