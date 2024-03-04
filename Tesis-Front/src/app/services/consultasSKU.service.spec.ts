/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultasSKUService } from './consultasSKU.service';

describe('Service: ConsultasSKU', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultasSKUService]
    });
  });

  it('should ...', inject([ConsultasSKUService], (service: ConsultasSKUService) => {
    expect(service).toBeTruthy();
  }));
});
