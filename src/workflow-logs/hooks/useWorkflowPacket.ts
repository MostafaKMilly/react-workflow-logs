import { useCallback, useState } from "react";
import { TPacket, TStatus } from "../types";
import _ from "lodash";

const initState = (steps: string[]): TWorkflowState => {
  const obj: TWorkflowState = {};
  steps.forEach((step) => {
    obj[step] = {
      packets: [],
      status: "init",
    };
  });
  return obj;
};

export const useWorkflowPacket = (steps: string[]) => {
  const [state, setState] = useState<TWorkflowState>(() => initState(steps));

  const receivePacket = useCallback(
    (packet: TPacket) => {
      const stateClone = _.cloneDeep(state);
      stateClone[packet.step].packets.push(packet);
      stateClone[packet.step].status = packet.status;
      setState(stateClone);
    },
    [state]
  );

  return { state, receivePacket };
};

type TWorkflowState = {
  [x: string]: {
    packets: TPacket[];
    status: TStatus;
  };
};
