import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  searchForm = this.fb.group({
    music: [''],
  });

  canciones: any[] = [];

  constructor(private fb: FormBuilder, private spotifyService: SpotifyService) {}

  buscarMusica() {
    const inputValue = this.searchForm.get('music')?.value ?? null;
    console.log(inputValue)
    if (inputValue !== null) {

      this.spotifyService.searchMusic(inputValue)
        .subscribe((data: any) => {
          console.log(this.canciones)
          this.canciones = data.tracks.items;
        });
    } else {
      console.error('this.inputValue es null');
    }
  }
  ngOnInit(): void {
   this.buscarMusica()
  }
}
