import { Soma } from "../soma";

describe("Unit - libs suite", () => {
  describe("Soma suite", () => {
    //!teste sugerido pela documentação do Jest
    it("deverá retornar 4", () => {
      expect(Soma(2, 2)).toEqual(4);
    });
  });

  it("deverá retornar 17", () => {
    expect(Soma(10, 7)).toEqual(17);
  });
});
