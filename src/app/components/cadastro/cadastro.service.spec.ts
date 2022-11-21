import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CadastroService } from './cadastro.service';

describe('CadastroService', () => {
  let service: CadastroService;
  let httpServiceMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CadastroService);
    httpServiceMock = TestBed.inject(HttpTestingController); //Irá fazer o HttpClient seja preenchido, corrigindo o erro
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
