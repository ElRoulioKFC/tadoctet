const ADRESSE = "http://192.168.1.25:3000/"


export async function getRessource (param)  {
  const url = ADRESSE + 'getBaseRessources'
  var result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
          "partieId" : param.idPartie,
        }),
  })
  .then(response => response.json())
  .catch(e => { throw e; });
  return result;
}

export async function getBatiments (param)  {
  const url = ADRESSE + 'getBaseBatiments'
  var result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
          "partieId" : param.idPartie,
        }),
  })
  .then(response => response.json())
  .catch(e => { throw e; });
  return result;
}
