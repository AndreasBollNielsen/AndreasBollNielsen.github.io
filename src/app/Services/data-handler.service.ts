import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageModel } from '../Models/image-model';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  dataTiles$: BehaviorSubject<ImageModel[]> = new BehaviorSubject<ImageModel[]>([]);
  datalist: ImageModel[] = [];
  listUpdated: boolean = false;
  constructor() {}

  UploadImage(data: ImageModel) {
    this.datalist.push(data);
    this.dataTiles$.next(this.datalist);

  }

  UpdateTile(editedTile: ImageModel,index: number) {

   console.log("datahandler: ", editedTile);
    this.datalist[index].ImageType = editedTile.ImageType;
    this.datalist[index].ImageSize = editedTile.ImageSize;
    this.listUpdated = true;
    this.dataTiles$.next(this.datalist);
  }

  // PopulateTiles(): ImageModel[] {

  //   for (let index = 0; index < 10; index++) {
  //     const element: ImageModel =
  //     {Path: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg',
  //     Name: 'Kitty',
  //     ImageType: 'type'};

  //     this.datalist.push(element);
  //   }

  //   return this.datalist;
  // }
}
