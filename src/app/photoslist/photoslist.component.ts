import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photoslist',
  templateUrl: './photoslist.component.html',
  styleUrls: ['./photoslist.component.css']
})
export class PhotoslistComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewphotos().subscribe(
      (data)=>{
        this.photoData=data
      }
    )
  }

  photoData:any = []

  ngOnInit(): void {
  }

}
