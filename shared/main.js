
function isNumber(char){
  return Number.isNumber(char);
}

export function isValidCEP(cep){
  if (cep.length !== 8) {
    return false;
  }

  if (!`${cep}`.split().every(isNumber)){
    return false
  }

  return true || false
}