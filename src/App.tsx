import React, { useEffect, useState } from 'react';
import { PACKETS, STEPS } from './workflow-logs/constants';
import { WorkflowLogs } from './workflow-logs/containers/WorkflowLogs';
import { TPacket } from './workflow-logs/types';


function App() {
  const [packet, setPacket] = useState<TPacket>()

  useEffect(() => {
    PACKETS.forEach((packet, index) => {
      setTimeout(() => {
        setPacket(packet)
      }, 1000 * index)
    })
  }, [])

  return (
    <WorkflowLogs steps={STEPS} packet={packet as TPacket} />
  );
}

export default App;
