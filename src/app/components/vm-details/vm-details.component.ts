import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vm-details',
  templateUrl: './vm-details.component.html',
  styleUrls: ['./vm-details.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class VMDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVM: VirtualMachine = {
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
    this.vmService.update(this.currentVM.vmid, this.currentVM)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('This Virtual Machine was updated successfully!');
        },
        complete: () => {
          this.toastr.success(`The Virtual Machine was updated successfully!`);
        },
        error: (e) => {
          console.error(e);
          this.toastr.success(`An error occurred while updating the Virtual Machine.`);
        }
      });
  }

  deleteVM(): void {
    this.vmService.delete(this.currentVM.vmid)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('The Virtual Machine was removed successfully!');
          this.router.navigate(['/vms']);
        },
        error: (e) => {
          console.error(e);
          this.toastr.success(`An error occurred while removing the Virtual Machine.`);
        }
      });
  }
}