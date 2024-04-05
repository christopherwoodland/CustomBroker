import { IVirtualMachineConfiguration } from 'src/app/interfaces/ivirtual-machines-configuration.model';
export class VirtualMachineConfiguration implements IVirtualMachineConfiguration {

  configID: number;
  scaleUpTrigger: number;
  scaleDownTrigger: number;
  scaleUpPercentage: number;
  scaleDownPercentage: number;

  constructor() {
    this.configID = -1;
    this.scaleUpTrigger = -1;
    this.scaleDownTrigger = -1;
    this.scaleUpPercentage = -1;
    this.scaleDownPercentage = -1;
  }
}