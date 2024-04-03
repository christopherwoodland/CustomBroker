export interface IVirtualMachine {
  vmid: number;
  hostname: string;
  ipAddress: string ;
  powerState: string ;
  checkedIn: string ;
  username: string ;
  avdHost: string ;
  createDate: Date ;
  lastUpdateDate: Date ;
  description: string ;
}