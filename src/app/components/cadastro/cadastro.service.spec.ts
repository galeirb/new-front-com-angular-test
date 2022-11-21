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

  it('should return a Cadastro list', () => {
    const cadastroExemplo = [
      {
        id: 1,
        usuario: 'teste 1',
        senha: 'senha 1'
      },
      {
        id: 2,
        usuario: 'teste 2',
        senha: 'senha 2'
      }
    ];

    service.read().subscribe(cadastros => {
      expect(cadastros.length).toBe(2);
      expect(cadastros).toEqual(cadastroExemplo);
    })

    const req = httpServiceMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(cadastroExemplo);
  });

});
