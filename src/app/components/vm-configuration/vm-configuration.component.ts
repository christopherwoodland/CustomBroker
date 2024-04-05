import { Component, Input, OnInit } from '@angular/core';
import { VirtualMachineConfigurationService } from 'src/app/services/virtual-machine-configuration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IVirtualMachineConfiguration } from 'src/app/interfaces/ivirtual-machines-configuration.model';

@Component({
  selector: 'app-vm-configuration',
  templateUrl: './vm-configuration.component.html',
  styleUrls: ['./vm-configuration.component.css']
})
export class VMConfigurationComponent implements OnInit {

  @Input() viewMode = false;
  @Input() config: IVirtualMachineConfiguration = {
    configID: -1,
    scaleUpTrigger: -1,
    scaleDownTrigger: -1,
    scaleUpPercentage: -1,
    scaleDownPercentage: -1
  };
  configID: number | undefined = -1;
  constructor(
    private vmService: VirtualMachineConfigurationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getConfiguration();
    }
  }

  getConfiguration(): void {
    this.vmService.getAll()
      .subscribe({
        next: (data) => {
          this.config = data[0];
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateConfiguration(): void {
    this.configID = this.config.configID;
    this.vmService.update(this.config.configID, this.config)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('Configuration was updated successfully!');
        },
        complete: () => {
          //this.toastr.success(`The Virtual Machine was updated successfully!`);
        },
        error: (e) => {
          console.error(e);
          this.toastr.error(`An error occurred while updating the Configuration.`);
        }
      });
  }

  deleteConfiguration(): void {
    //TODO Confirmation Box
    this.vmService.delete(this.config.configID)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('The Configuration was removed successfully!');
          this.router.navigate(['/vms']);
        },
        error: (e) => {
          console.error(e);
          this.toastr.error(`An error occurred while removing the Configuration.`);
        }
      });
  }
}