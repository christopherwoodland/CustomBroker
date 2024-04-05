export interface IVirtualMachineConfiguration {
  configID: number;
  scaleUpTrigger: number;
  scaleDownTrigger: number;
  scaleUpPercentage: number;
  scaleDownPercentage: number;
}

