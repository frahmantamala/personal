import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  isInBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isInServer(): boolean {
    return isPlatformServer(this.platformId);
  }

}
