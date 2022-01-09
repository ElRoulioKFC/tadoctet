const ADRESSE = 'http://127.0.0.1:4000/';

function mkReq( body ) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( body ),
  };
}

export async function getRessource (param)  {
  const url = ADRESSE + 'getBaseRessources'

  let req = mkReq({ "partieId" : param.idPartie, });

  let result = await fetch(url, req)
    .then(response => response.json())
    .catch(e => { throw e; });

  return result;
}

export async function getBatiments (param)  {
  const url = ADRESSE + 'getBaseBatiments'

  let req = mkReq({ "partieId" : param.idPartie, });

  let result = await fetch(url, req)
    .then(response => response.json())
    .catch(e => { throw e; });

  return result;
}

export async function join (param)  {
  const url = ADRESSE + 'join'

  let req = mkReq({ "partieId" : param.idPartie, });

  let result = await fetch(url, req)
    .then(response => response.json())
    .catch(e => { throw e; });

  return result;
}


export async function getGrille( param ) {
  const url = ADRESSE + 'getGrille'

  let req = mkReq( param );
  console.log(url)

  let result = await fetch(url, req)
    .then(response => response.json())
    .catch(e => { throw e; });

  return result;
}
