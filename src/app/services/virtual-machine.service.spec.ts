import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VirtualMachineService } from './virtual-machine.service';
import { VirtualMachine } from '../models/virtual-machines.model';

describe('VirtualMachineService', () => {
  let service: VirtualMachineService;
  let httpMock: HttpTestingController;
  let baseUrl: string = 'https://custombrokerwebapi.azurewebsites.net/virtualmachines';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VirtualMachineService]
    });
    service = TestBed.inject(VirtualMachineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all virtual machines', () => {
    const dummyVirtualMachines: VirtualMachine[] = [
      // Define dummy virtual machines here
    ];

    service.getAll().subscribe((virtualMachines) => {
      expect(virtualMachines.length).toBe(dummyVirtualMachines.length);
      expect(virtualMachines).toEqual(dummyVirtualMachines);
    });

    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVirtualMachines);
  });

  it('should retrieve a virtual machine by id', () => {
    const dummyVirtualMachine: VirtualMachine = {
      // Define dummy virtual machine here
    };

    const id = '123';

    service.get(id).subscribe((virtualMachine) => {
      expect(virtualMachine).toEqual(dummyVirtualMachine);
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVirtualMachine);
  });

  it('should create a virtual machine', () => {
    const dummyVirtualMachine: VirtualMachine = {
      // Define dummy virtual machine here
    };

    service.create(dummyVirtualMachine).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(dummyVirtualMachine);
  });

  it('should update a virtual machine', () => {
    const dummyVirtualMachine: VirtualMachine = {
      // Define dummy virtual machine here
    };

    const id = '123';

    service.update(id, dummyVirtualMachine).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyVirtualMachine);
  });

  it('should delete a virtual machine', () => {
    const id = '123';

    service.delete(id).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should find virtual machines by title', () => {
    const dummyVirtualMachines: VirtualMachine[] = [
      // Define dummy virtual machines here
    ];

    const title = 'example';

    service.findByTitle(title).subscribe((virtualMachines) => {
      expect(virtualMachines.length).toBe(dummyVirtualMachines.length);
      expect(virtualMachines).toEqual(dummyVirtualMachines);
    });

    const req = httpMock.expectOne(`${baseUrl}?title=${title}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVirtualMachines);
  });

  // Add more test cases for other methods

});
