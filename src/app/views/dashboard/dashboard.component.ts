import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../app/data/services/dashboard/photo.service';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  images: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => {
      this.images = images;
  });
  }
}
