import axios from 'axios'

const url ="http://localhost:5000";

export const addUser= async(userData)=>{
  return await  axios.post(`${url}/users`,userData);


}
export const getApplicant = async () => {
  return await axios.get(`${url}/`);
}

export const signinUser= async(userData)=>{
  return await  axios.post(`${url}/signup`,userData);


}

export const addApplicant= async(userData)=>{
    return await  axios.post(`${url}/registrationform`,userData);
  
  }


