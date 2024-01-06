import { Soma } from "../soma";

describe('Unit - libs suite', () => {
  describe("Soma suite", () => {  //!teste sugerido pelo Jest
    it("deverá retornar 4", () => {
      expect(Soma(2, 2)).toEqual(4);
    });
  });

  describe("Soma suite", () => {
    it("deverá retornar 17", () => {
      expect(Soma(10, 7)).toEqual(17);
    });
  });
});
