import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggingService
{
  logStatusChange(msg:string)
  {
    console.log('new log: ' + msg);
  }
}
