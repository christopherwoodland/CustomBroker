import { Component } from '@angular/core';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vm',
  templateUrl: './add-vm.component.html',
  styleUrls: ['./add-vm.component.css']
})
export class AddVMComponent {
  vm: VirtualMachine = {
    hostname: '',
    ipAddress: '',
    powerState: '',
    checkedIn: '',
    username: '',
    avdHost: '',
    createDate: new Date(),
    lastUpdateDate: new Date(),
    description: ''
  };
  submitted = false;

  constructor(private vmService: VirtualMachineService, private toastr: ToastrService) { }

  saveVM(): void {
    const data = {
      hostname: this.vm.hostname,
      ipAddress: this.vm.ipAddress,
      powerState: this.vm.powerState,
      checkedIn: this.vm.checkedIn,
      username: this.vm.username,
      avdHost: this.vm.avdHost,
      createDate: this.vm.createDate,
      lastUpdateDate: this.vm.lastUpdateDate,
      description: this.vm.description,
    };

    this.vmService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.toastr.success(`The Virtual Machine was added successfully!`);
        },
        error: (e) => {
          console.error(e);
          this.toastr.success(`An error occurred while adding the Virtual Machine`);
        }
      });
  }

  newVM(): void {
    this.submitted = false;
    this.vm = {
      hostname: '',
      ipAddress: '',
      powerState: '',
      checkedIn: '',
      username: '',
      avdHost: '',
      createDate: new Date(),
      lastUpdateDate: new Date(),
      description: ''
    };
  }
}