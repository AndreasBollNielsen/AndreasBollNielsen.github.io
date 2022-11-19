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

  //update list of images
  UploadImage(data: ImageModel) {
    this.datalist.push(data);
    this.dataTiles$.next(this.datalist);

  }

  //update selected image
  UpdateTile(editedTile: ImageModel,index: number) {

    this.datalist[index].ImageType = editedTile.ImageType;
    this.datalist[index].ImageSize = editedTile.ImageSize;
    this.listUpdated = true;
    this.dataTiles$.next(this.datalist);
  }
}
