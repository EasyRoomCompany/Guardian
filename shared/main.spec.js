import { assert, expect, test } from 'vitest';
import {isValidCEP} from './main'

test("CEP", () => {
    const resp1 = isValidCEP("60525712");
    const resp2 = isValidCEP("60525-712");
    
    expect(resp1).toBeTruthy();
    expect(resp2).toBeFalsy();
})


test("CEP deve ter apenas numeros", () => {
    const resp1 = isValidCEP("60525712a");
    expect(resp1).toBeFalsy();
})

test.todo("CEP deve ter apenas 8 caracteries")