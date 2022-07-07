export type TStatus = "init" | "pending" | "completed" | "failed";

export type TPacket = {
  step: string;
  status: TStatus;
  content: string;
};
