import { Component, Input, OnInit } from '@angular/core';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';

@Component({
  selector: 'app-vm-details',
  templateUrl: './vm-details.component.html',
  styleUrls: ['./vm-details.component.css']
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

  message = '';

  constructor(
    private vmService: VirtualMachineService,
    private route: ActivatedRoute,
    private router: Router) { }

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
    this.vmService.update(this.currentVM.vmid, this.currentVM)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This vm was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteVM(): void {
    this.vmService.delete(this.currentVM.vmid)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/vms']);
        },
        error: (e) => console.error(e)
      });
  }
}