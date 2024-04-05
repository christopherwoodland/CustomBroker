import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachineConfiguration } from '../models/virtual-machines-configuration.model';

const baseUrlConfig = 'https://custombrokerwebapi.azurewebsites.net/configuration';
@Injectable({
  providedIn: 'root'
})
export class VirtualMachineConfigurationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<VirtualMachineConfiguration[]> {
    return this.http.get<VirtualMachineConfiguration[]>(baseUrlConfig);
  }

  get(id: any): Observable<VirtualMachineConfiguration> {
    return this.http.get<VirtualMachineConfiguration>(`${baseUrlConfig}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrlConfig, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrlConfig}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrlConfig}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrlConfig);
  // }

  findByTitle(title: any): Observable<VirtualMachineConfiguration[]> {
    return this.http.get<VirtualMachineConfiguration[]>(`${baseUrlConfig}?title=${title}`);
  }
}