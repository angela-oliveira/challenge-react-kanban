const FETCH_LOGIN = "http://0.0.0.0:5000/login"
const FETCH_CARD = "http://0.0.0.0:5000/cards"
const HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'}
function Api(){
  async function autentication() {
    return await fetch(FETCH_LOGIN, {
      method: 'POST',
      mode: 'cors', 
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization' : 'Bearer' + generateKey(token)
      }),
      body: JSON.stringify({ login:"letscode", senha:"lets@123"})
    })
    .then(res => res.json())
    .then(res => `Bearer ${res}`)
    .then(res => ({Authorization: res}))
    .catch((error) => {
      console.error(error);
    })
  }

  let token 
  async function getToken(){
    token = await autentication()
  }

  async function get() {
    if (!token) await getToken()
    return await fetch(FETCH_CARD, {headers: token})
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else if (res.status === 401) {
          getToken()
        } else {
          throw new Error()
        }
        return get()
      })
      .catch((error) => console.log(error));
  }
  async function add(data) {
    if (!token) await getToken();
    return await fetch(FETCH_CARD, {
      headers: {...token, ...HEADER},
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 201) {
          return res.json()
        } else if (res.status === 401) {
          getToken()
        } else {
          throw new Error()
        }
        return update(data)
      })
      .catch((error) => console.log(error));

  }
  async function update(data) {
    if (!token) await getToken();
    return await fetch(`${FETCH_CARD}/${data.id}`, {
      headers: {...token, ...HEADER},
      method: 'PUT',
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else if (res.status === 401) {
          getToken()
        } else {
          throw new Error()
        }
        return update(data)
      })
      .catch((error) => console.log(error));
    
  }
  async function remove(id) {
    if (!token) await getToken();
    return await fetch(`${FETCH_CARD}/${id}`, {
      headers: token,
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else if (res.status === 401) {
          getToken()
        } else {
          throw new Error()
        }
        return remove(id)
      })
      .catch((error) => console.log(error));
    
  }
  return { get, add, update, remove }
}
export default Api