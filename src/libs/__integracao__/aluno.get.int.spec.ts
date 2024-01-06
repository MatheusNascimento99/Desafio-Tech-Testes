import * as request from "supertest";

describe("Int - Aluno Suite", () => {
  it("##GET /aluno", async () => {
    const response = await request("http://localhost:8080").get("/aluno");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.data).toHaveLength(20);
    expect(response.body.length).toBeGreaterThan(0); //*Verificando se pelo menos um aluno está presente na resposta
  });
});
