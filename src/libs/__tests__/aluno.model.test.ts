import { Aluno } from "../../module/aluno/aluno.model";
import { KnexService } from "../../service/knex";

describe("Unit - Aluno model Suite", () => {
  it("Deverá ser verdadedeiro", () => {
    expect(true).toBe(true);
  });

  it("Deverá retornar valores do modelo", () => {
    const aluno = new Aluno(new KnexService());
    expect(aluno.getAll).toBeTruthy();
  });

  it("Deverá salval um aluno no modelo", async () => {
    const aluno = new Aluno(new KnexService());
    const response = await aluno.store({
      nome: "Miguel",
      cpf: 963852741,
    });
    expect(response).toBeTruthy();
  });
});
