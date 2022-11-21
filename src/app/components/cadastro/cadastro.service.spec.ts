import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CadastroService } from './cadastro.service';

describe('CadastroService', () => {
  let service: CadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
