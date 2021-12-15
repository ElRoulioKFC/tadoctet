export function getREssource (text,page) {
  const url = 
  return fetch(url)
  .then((response)=>response.json())
  .catch((error)=>console.error(error))
}
