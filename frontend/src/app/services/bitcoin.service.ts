import { Injectable } from '@angular/core';
import axios from 'axios';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private storageService:StorageService) { }

async getRate(coins) {
  return axios
    .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .then((res) => {
      // handle success
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
async getMarketPrice() {
  return axios
    .get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    .then((res) => {
      // handle success
      // console.log(res.data.values);
      return res.data.values;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

}

