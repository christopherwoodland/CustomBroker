import { IVirtualMachine } from 'src/app/interfaces/ivirtual-machines.model';
export class VirtualMachine implements IVirtualMachine {

  vmid: number;
  hostname: string;
  ipAddress: string;
  powerState: string;
  checkedIn: string;
  username: string;
  avdHost: string;
  createDate: Date;
  lastUpdateDate: Date;
  description: string;

  constructor() {
    this.vmid = -1;
    this.hostname = '';
    this.ipAddress = '';
    this.powerState = '';
    this.checkedIn = '';
    this.username = '';
    this.avdHost = '';
    this.createDate = new Date();
    this.lastUpdateDate = new Date();
    this.description = '';

  }

}