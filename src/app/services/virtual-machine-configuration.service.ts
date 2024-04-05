import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachineConfiguration } from '../models/virtual-machines-configuration.model';

const baseUrl = 'https://custombrokerwebapi.azurewebsites.net/configuration';
@Injectable({
  providedIn: 'root'
})
export class VirtualMachineConfigurationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<VirtualMachineConfiguration[]> {
    return this.http.get<VirtualMachineConfiguration[]>(baseUrl);
  }

  get(id: any): Observable<VirtualMachineConfiguration> {
    return this.http.get<VirtualMachineConfiguration>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  findByTitle(title: any): Observable<VirtualMachineConfiguration[]> {
    return this.http.get<VirtualMachineConfiguration[]>(`${baseUrl}?title=${title}`);
  }
}