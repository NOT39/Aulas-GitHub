import { describe, expect, it } from "vitest";
import { soma, subtracao } from ".";

describe("Função de soma", () => {
    it("deveria retornar a soma dos dois números", () => {
        const resultado = soma(2, 2)
    
        expect(resultado).toEqual(4)
    })
})


describe("Função de subtracao", () => {
    it("deveria retornar a subtracao dos dois números", () => {
        const resultado = subtracao(2, 2)
    
        expect(resultado).toEqual(0)
    })
})