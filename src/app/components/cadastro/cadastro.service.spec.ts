import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CadastroService } from './cadastro.service';
import { Cadastro } from './cadastro.model'

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

  //read
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

  //create
  it('should create a Cadastro', () => {
    const cadastroRequest: Cadastro ={
      usuario: 'teste',
      senha: 'senha'
    };

    const cadastroResponse: Cadastro = {
      id: 1,
      usuario: 'teste',
      senha: 'senha'
    }

    service.create(cadastroRequest).subscribe(cadastro =>{
      expect(cadastro.usuario).toBe(cadastroRequest.usuario);
      expect(cadastro.senha).toBe(cadastroRequest.senha);
      expect(cadastro.id).toEqual(1);
    })

    const req = httpServiceMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(cadastroResponse);
  });

  //delete
  it('should delete a Cadastro', ()=>{    
    const request: Cadastro = {
    id: 1,
    usuario:'teste2',
    senha:'senha2'
    };

    const cadastroResponse: Cadastro ={
    id: 1,
    usuario: 'teste2',
    senha: 'senha2'
    }

    service.delete(1).subscribe(cadastro => {
      expect(cadastro.id).toBeFalse
      expect(cadastro.usuario).toBeFalse
      expect(cadastro.senha).toBeFalse
      
    })

    const req = httpServiceMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('DELETE');
    req.flush(cadastroResponse);
  });

  // update
   it('should update a Cadastro', ()=>{
    const cadastroupdate: Cadastro = {
    usuario:'teste1',
    senha:'senha1'
    };

    const cadastroResponse: Cadastro ={
    id: 1,
    usuario: 'teste',
    senha: 'senha'
    }    

    service.update(1, cadastroupdate).subscribe(cadastro => {
      expect(cadastro.usuario).toEqual(cadastroupdate.usuario);
      expect(cadastro.senha).toEqual(cadastroupdate.senha);
      
    })
    const req = httpServiceMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('PUT');
    req.flush(cadastroResponse);
  });


});
