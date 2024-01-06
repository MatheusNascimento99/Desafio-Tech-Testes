import * as request from "supertest";

describe('Int - Aluno Suite', () => {
    it('##POST /aluno', async () =>{
        const response = await request('http://localhost:8080')
            .post('/aluno')
            .send({
                nome:"José",
            })
            expect(response.status).toBe(400)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.msg).toEqual(' Necessário informar Nome e Cpf !')
    })
})