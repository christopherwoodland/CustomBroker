export interface IVirtualMachine {
  vmid?: number;
  hostname?: string;
  ipAddress?: string | null;
  powerState?: string | null;
  checkedIn?: string | null;
  username?: string | null;
  avdHost?: string | null;
  createDate?: Date | null;
  lastUpdateDate?: Date | null;
  description?: string | null;
}