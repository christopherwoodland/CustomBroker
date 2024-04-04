import { Component, OnInit } from '@angular/core';
import { VirtualMachine } from 'src/app/models/virtual-machines.model';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { IVirtualMachine } from '../../interfaces/ivirtual-machines.model';

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.css']
})
export class VmListComponent implements OnInit, AfterViewInit {
  virtualMachines: IVirtualMachine[];
  currentVm: IVirtualMachine;
  currentIndex: number = -1;
  title: string = '';
  displayedColumns: string[] = ['hostname', 'checkedIn', 'username', 'powerState'];
  globalFilter: string = '';
  dataSource!: MatTableDataSource<VirtualMachine>;
  @ViewChild(MatPaginator) paginator!: MatPaginator | null;
  @ViewChild(MatSort) sort!: MatSort;
  filteredValues: any = {
    "vmid": 0,
    "hostname": "",
    "ipAddress": "",
    "powerState": "",
    "checkedIn": "",
    "username": "",
    "avdHost": "",
    "createDate": "",
    "lastUpdateDate": "",
    "description": ""
  };


  constructor(private virtualMachineService: VirtualMachineService,
    private liveAnnouncer: LiveAnnouncer, private router: Router) {
    this.virtualMachines = [];
    this.currentVm = {
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
  }

  ngOnInit(): void {
    //this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  ngAfterViewInit() {
    this.retrieveVms();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction}ending`);
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      console.log(`Sorting cleared`);
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
  retrieveVms(): void {
    this.virtualMachineService.getAll()
      .subscribe({
        next: (data) => {
          this.virtualMachines = data;
          this.dataSource = new MatTableDataSource<VirtualMachine>(this.virtualMachines);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVms();
    this.currentVm = {
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
    this.currentIndex = -1;
  }

  setActiveVM(vm: VirtualMachine, index: number): void {
    this.currentVm = vm;
    this.currentIndex = index;
    let route = `/vms/${this.currentVm.vmid}`;
    this.router.navigate([route]);
  }

  searchTitle(): void {
    this.currentVm = {
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
