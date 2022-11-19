import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageModel } from 'src/app/Models/image-model';
import { DataHandlerService } from 'src/app/Services/data-handler.service';
import { ImageDetailsComponent } from '../image-details/image-details.component';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  imageTiles: ImageModel[] = [];
  constructor(
    private datahandler: DataHandlerService,
    public dialog: MatDialog
  ) {
    datahandler.dataTiles$.subscribe((imagedata) => {
      next: if (
        imagedata.length != this.imageTiles.length ||
        datahandler.listUpdated === true
      ) {
        this.imageTiles = imagedata;
        datahandler.listUpdated = false;
        console.log('updating: ', this.imageTiles[0]);
      }
    });
  }

  ngOnInit(): void {}

  RowDetails(rowElement: ImageModel, itemindex: number) {
    console.log(rowElement);
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '110vh';
    config.height = '90vh';
    config.data = rowElement;

    const MatDialogRef = this.dialog.open(ModalUploadComponent, config);
    MatDialogRef.afterClosed().subscribe((data) => {
    //  console.log('after edit: ', data);
      if (data != undefined) {
        this.datahandler.UpdateTile(data, itemindex);
      }
    });
  }

  OpenImageInfo(index: number) {}
}
