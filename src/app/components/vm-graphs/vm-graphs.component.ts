import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { IVirtualMachine } from '../../interfaces/ivirtual-machines.model';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vm-graphs',
  templateUrl: './vm-graphs.component.html',
  styleUrls: ['./vm-graphs.component.css']
})
export class VMGraphComponent implements OnInit, AfterViewInit {
  title = '';
  REFRESH_INTERVAL: number = 10000;
  virtualMachines: IVirtualMachine[];
  powerOn: number = 0;
  powerOff: number = 0;
  chkYes: number = 0;
  chkNo: number = 0;

  // Pie Chart
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    animation: true
  };
  pieChartLabels = [['Power State On'], ['Power State Off']];
  pieChartDatasets = [{
    data: [this.powerOn, this.powerOff]
  }];
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartOptionsCheckedIn: ChartOptions<'pie'> = {
    responsive: true,
    animation: true
  };
  pieChartLabelsCheckedIn = [['Checked In State Yes'], ['Checked In State No']];
  pieChartDatasetsCheckedIn = [{
    data: [this.chkYes, this.chkNo]
  }];
  pieChartLegendCheckedIn = true;
  pieChartPluginsCheckedIn = [];

  constructor(private virtualMachineService: VirtualMachineService) {
    this.virtualMachines = [];
  }


  initPieCharts(): void {
    this.powerOn = this.virtualMachines.filter(vm => vm.powerState.toLocaleLowerCase() == "on").length || 0;
    this.powerOff = this.virtualMachines.filter(vm => vm.powerState.toLocaleLowerCase() == "off").length || 0;
    this.chkYes = this.virtualMachines.filter(vm => vm.checkedIn.toLocaleLowerCase() == "yes").length || 0;
    this.chkNo = this.virtualMachines.filter(vm => vm.checkedIn.toLocaleLowerCase() == "no").length || 0;
    this.pieChartDatasets = [{
      data: [this.powerOn, this.powerOff]
    }];
    this.pieChartDatasetsCheckedIn = [{
      data: [this.chkYes, this.chkNo]
    }];

  }
  ngOnInit(): void {
    //DO SOMETHING
  }
  ngAfterViewInit() {
    this.retrieveVms();
    this.refreshCharts();
  }

  refreshCharts(): void {
    setInterval(() => {
      this.retrieveVms();
    }, this.REFRESH_INTERVAL);
  }
  retrieveVms(): void {
    this.virtualMachineService.getAll()
      .subscribe({
        next: (data) => {
          this.virtualMachines = data;
          console.log(this.virtualMachines);
          this.initPieCharts();
        },
        error: (e) => console.error(e)
      });
  }
}