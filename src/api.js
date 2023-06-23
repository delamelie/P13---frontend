import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const LOGIN_URL = "/user/login";
export const PROFILE_URL = "/user/profile";

// function handleGetTokenClick() {
//   axios.post("http://localhost:3001/api/v1/user/login").then((res) => {
//     console.log(res);
//   });
// }

// handleGetTokenClick();

// const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));

// const { accessToken } = res.data;
// sessionStorage.setItem('accessToken', accessToken);
// setAccessToken(accessToken);

// const [response, setResponse] = useState('')

// axios.get(HOST_NAME + '/profile', {
//   headers: {
//       Authorization: 'Bearer ' + accessToken
//   }
// }).then(res => {
//   setResponse(res.data)
// }).catch(err => {
//   setResponse(err.response.data)
// })

/////////////////////////////
///////////////////////////////

// async function userConnect(email, password) {
//   const response = await fetch("http://localhost:3001/api/v1/user/login", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     const requestData = await response.json();
//     return requestData;
//   } else {
//     throw new Error("Failed to connect");
//   }
// }

// async function tokenRetrieve(email, password) {
//   const requestData = await userConnect(email, password);
//   console.log(requestData);
//   localStorage.setItem("token", JSON.stringify(requestData.body.token));
//   let token = localStorage.getItem("token");
//   if (!token) {
//     console.log("erreur");
//   }
//   token = JSON.parse(token);
//   return token;
// }

// export default async function displayProfile(email, password) {
//   const token = await tokenRetrieve(email, password);
//   console.log(token);
//   const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
//     method: "POST",
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   const profileData = await response.json();
//   console.log(profileData);
// }

// displayProfile("steve@rogers.com", "password456");
