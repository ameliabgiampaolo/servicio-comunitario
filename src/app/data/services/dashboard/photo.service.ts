import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private imagePaths: any[] = [];

  constructor() {
    for (let i = 1; i <= 5; i++) {
      this.imagePaths.push({
        itemImageSrc: `assets/img/mab/dashboard/image${i}.jpeg`,
        thumbnailImageSrc: `assets/img/mab/dashboard/image${i}.jpeg`,
        alt: `Image ${i}`,
        title: `Image ${i}`
      });
    }
  }

  getImages(): Promise<any[]> {
    return Promise.resolve(this.imagePaths);
  }
}
