import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachine } from '../models/virtual-machines.model';

const baseUrl = 'https://custombrokerwebapi.azurewebsites.net/virtualmachines';
const baseUrlConfig = 'https://custombrokerwebapi.azurewebsites.net/virtualmachines';
@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<VirtualMachine[]> {
    return this.http.get<VirtualMachine[]>(baseUrl);
  }

  get(id: any): Observable<VirtualMachine> {
    return this.http.get<VirtualMachine>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<VirtualMachine[]> {
    return this.http.get<VirtualMachine[]>(`${baseUrl}?title=${title}`);
  }
}