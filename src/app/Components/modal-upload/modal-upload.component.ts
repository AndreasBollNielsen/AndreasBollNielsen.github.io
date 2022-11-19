import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { ImageModel } from 'src/app/Models/image-model';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ImageDetailsComponent } from '../image-details/image-details.component';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css'],
})
export class ModalUploadComponent implements OnInit {
  form: FormGroup;
  ImageTypes: string[] = ['JPG', 'PNG', 'BMP'];
  ImageSizes: string[] = ['128 x 128', '256 x 256', '512 x 512'];
  imagePath: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ImageModel,
    private formbuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalUploadComponent>,
    public dialog: MatDialog
  ) {
    this.form = this.formbuilder.group({
      ImagePath: '',
      Name: '',
      ImageType: '',
      ImageSize: '',
    });

    this.imagePath = data.Path;
  }

  ngOnInit(): void {}
  onSubmit(formgroup: FormGroup) {
    this.dialogRef.close(formgroup.value);
    console.log(formgroup.value);
  }

  ClickImage(image: string) {
    console.log('image: ', image);
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.maxWidth = '95vw';
    config.maxHeight = '95vw';
    config.height = '95%';
    config.width = '95%';
    config.data = image;

    this.dialog.open(ImageDetailsComponent, config);
  }
}
