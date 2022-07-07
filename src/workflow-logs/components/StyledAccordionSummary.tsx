import { AccordionSummary, AccordionSummaryProps } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

export const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
    <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#579ad1',
    color: "white",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));