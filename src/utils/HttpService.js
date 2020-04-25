const fetchData = url => {
  const data = fetch(url,
  {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      credentials: 'include',
    },
  })
  .then(response => response.json())
  .catch(err => { console.error('Failed retrieving information', err)})


  return data
}

const get = url => fetchData(url)

export default { get }