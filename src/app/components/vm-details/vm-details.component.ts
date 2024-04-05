import { Component, Input, OnInit } from '@angular/core';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';
import { ToastrService } from 'ngx-toastr';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';


@Component({
  selector: 'app-vm-details',
  templateUrl: './vm-details.component.html',
  styleUrls: ['./vm-details.component.css']
})
export class VMDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVM: VirtualMachine = {
    vmid: -1,
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

  message: string = '';
  vmid: number | undefined = -1;

  constructor(
    private vmService: VirtualMachineService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  isValidIP(ip: string): boolean {
    const ipv4Pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getVM(this.route.snapshot.params["id"]);
    }
  }

  getVM(id: string): void {
    this.vmService.get(id)
      .subscribe({
        next: (data) => {
          this.currentVM = data;
          this.currentVM.lastUpdateDate = new Date();
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateVM(): void {
    this.message = '';
    this.vmid = this.currentVM.vmid;
    if (!this.isValidIP(this.currentVM.ipAddress ?? "")) {
      this.toastr.error(`Invalid IP Address IP4 or Ip6`);
      return;
    }
    this.vmService.update(this.currentVM.vmid, this.currentVM)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('This Virtual Machine was updated successfully!');
        },
        complete: () => {
          //this.toastr.success(`The Virtual Machine was updated successfully!`);
        },
        error: (e) => {
          console.error(e);
          this.toastr.error(`An error occurred while updating the Virtual Machine.`);
        }
      });
  }

  deleteVM(): void {
    //this.confirmBox();

    this.vmService.delete(this.currentVM.vmid)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('The Virtual Machine was removed successfully!');
          this.router.navigate(['/vms']);
        },
        error: (e) => {
          console.error(e);
          this.toastr.error(`An error occurred while removing the Virtual Machine.`);
        }
      });
  }
}