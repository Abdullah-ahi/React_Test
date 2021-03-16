const API = 'https://graphqlzero.almansi.me/api';
let id = Math.floor(Math.random() * 10);
id == 0 ? id = 1: id;
const query = `
  {
    user(id: ${id}) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }
 `
export const fetchData = async () => {
  try{
    const response = await fetch(API, {
      method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    })
    const data = await response.json();
    return data
  }catch(e){
    console.log(e);
  }
}