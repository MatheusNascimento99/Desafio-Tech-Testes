import * as request from "supertest";

//*TESTE INICIAL DE ROTA

describe('Int - Teste Suite', () => {

    it('##GET aluno/teste', async () => {
        const response = await request('http://localhost:8080')
            .get('/aluno/teste')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
    })
    

})