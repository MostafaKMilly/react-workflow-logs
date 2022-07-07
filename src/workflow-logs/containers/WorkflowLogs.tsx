import { Accordion, AccordionDetails, Box } from "@mui/material"
import { useEffect } from "react"
import { WorkflowStepTitle, StyledAccordionSummary, WorkflowStepContent } from "../components"
import { useWorkflowPacket } from "../hooks"
import { TPacket } from "../types"


export const WorkflowLogs = (props: TProps) => {
    const { state: workflowState, receivePacket } = useWorkflowPacket(props.steps)

    useEffect(() => {
        if (props.packet) {
            receivePacket(props.packet)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.packet])

    return (
        <Box>
            {props.steps.map((step) => (
                <Accordion disableGutters elevation={0} square TransitionProps={{ unmountOnExit: true }}>
                    <StyledAccordionSummary>
                        <WorkflowStepTitle title={step} status={workflowState[step].status} />
                    </StyledAccordionSummary>
                    <AccordionDetails sx={{ background: "#f6fbff" }}>
                        {workflowState[step].packets.map((packet: TPacket) => (
                            <WorkflowStepContent content={packet.content} status={packet.status} />
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}

        </Box>
    )
}

type TProps = {
    /**Steps of workflow */
    steps: string[];
    /**Packets data from backend  */
    packet: TPacket
}