import { Component, OnInit } from '@angular/core';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.css']
})
export class VmListComponent implements OnInit {

  virtualMachines?: VirtualMachine[];
  currentVm: VirtualMachine = {};
  currentIndex = -1;
  title = '';

  constructor(private virtualMachineService: VirtualMachineService) { }

  ngOnInit(): void {
    this.retrieveVms();
  }

  retrieveVms(): void {
    this.virtualMachineService.getAll()
      .subscribe({
        next: (data) => {
          this.virtualMachines = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVms();
    this.currentVm = {};
    this.currentIndex = -1;
  }

  setActiveVM(vm: VirtualMachine, index: number): void {
    this.currentVm = vm;
    this.currentIndex = index;
  }

  // removeAllTutorials(): void {
  //   this.virtualMachineService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  searchTitle(): void {
    this.currentVm = {};
    this.currentIndex = -1;

    this.virtualMachineService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.virtualMachines = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}