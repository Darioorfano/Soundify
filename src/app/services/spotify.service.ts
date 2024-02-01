import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  searchMusic(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      'Authorization': 'BQDnZvtFfqEJH3XIU3Nh2CMBp0Oljo3IhbnMNbzBOgj1iYl2ziykLYHYMyrW7jimubB5mZpBYWBRx6bNE_K-ATWsvnfUfEZMo8y7LcNE2FzbhxcAZuk',
    });

    return this.http.get(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud a Spotify:', error);
        return throwError(error);
      })
    );
  }
  

}
