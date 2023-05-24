import { assert, expect, test } from 'vitest';
import {isValidCEP, isInValidName} from './main'

test("CEP e valido", () => {
    const resp1 = isValidCEP("60525712");
    const resp2 = isValidCEP("60525-712");
    
    expect(resp1).toBeTruthy();
    expect(resp2).toBeFalsy();
})


test("CEP deve ter apenas numeros", () => {
    const resp1 = isValidCEP("60225712");
    const resp2 = isValidCEP("51a4562d");

    expect(resp1).toBeTruthy();
    expect(resp2).toBeFalsy();

})

test("Deve ser um nome valido", () => {
    const resp1 = isInValidName("K#vin!")
    const resp2 = isInValidName("Diego")

    expect(resp1).toBeTruthy();
    expect(resp2).toBeFalsy();
})