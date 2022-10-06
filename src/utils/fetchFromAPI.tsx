import axios from "axios";

const base_url='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'a4429ff29emsh8316dde29fa52b6p1de2e4jsn539365277554',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromUrl= async (url:string)=>{
    const full_url=`${base_url}/${url}`;
    const {data}= await axios.get(full_url,options);
    return data;
  }