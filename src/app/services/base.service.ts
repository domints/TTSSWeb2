import { isDevMode } from '@angular/core';

export class BaseService {

    constructor() { }
    
    get baseUrl(): string {
        if(isDevMode())
            return "http://localhost:8301";
        else
            return "https://ttssapi.dszymanski.pl"
    }
  }