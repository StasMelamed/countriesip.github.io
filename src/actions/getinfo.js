import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { countryUrl,allCountriesUrl } from "../constants/constants";
import { token } from "../constants/constants";

export const getAllIinfo = createAsyncThunk(

    'getAllInfo',

     async (country)=>{

        const data =  await fetch(`${countryUrl}${country}`,{

         headers:{
            'Authorization': `Bearer ${token}`
          }

        });

        if(!data.ok){

          let status = data.status;

          switch(data.status){
            case 400:status=data.status+': Request was invalid';
            break;
            case 401:status=data.status+': Bad endpoint';
            break;
            case 410:status=data.status+': No API key was found';
            break;
            case 403:status=data.status+': The API key is invalid';
            break;
            case 404:status=data.status+': No such country';
            break;
            case 405:status=data.status+': Incorrect HTTP method provided';
            break;
            case 429:status=data.status+': Client is rate limited';
            break;
            case 500:status=data.status+': Server error, please try again later or contact support';
            break;
          }

            throw new Error('Smth went wrong! '+status);
        }

         const response = await data.json(); 

         return response;   
    }

    
);

export const getAllCountries = createAsyncThunk(

  'getAllCountries',

  async()=>{

    const response = await fetch(allCountriesUrl,{

      headers:{
         'Authorization': `Bearer ${token}`
       }});

      if(!response.ok) {

        let status = data.status;

        switch(response.status){

          case 400:status=data.status+': Request was invalid';
          break;
          case 401:status=data.status+': Bad endpoint';
          break;
          case 410:status=data.status+': No API key was found';
          break;
          case 403:status=data.status+': The API key is invalid';
          break;
          case 404:status=data.status+': No such country';
          break;
          case 405:status=data.status+': Incorrect HTTP method provided';
          break;
          case 429:status=data.status+': Client is rate limited';
          break;
          case 500:status=data.status+': Server error, please try again later or contact support';
          break;

        }

        throw new Error('Error!'+status);
      }

      const data = await response.json();
      return data;
  }
);