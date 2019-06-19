import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Widget} from './widget';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/v1/widgets';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(apiUrl)
      .pipe(
        tap(widgets => console.log('retrieved widgets')),
        catchError(this.handleError('getWidgets', []))
      );
  }

  getWidget(id: number): Observable<Widget> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Widget>(url).pipe(
      tap(_ => console.log(`retrieved widget id is ${id}'`)),
      catchError(this.handleError<Widget>(`getWidget id=${id}`))
    );
  }

  addWidget(widget): Observable<Widget> {
    return this.http.post<Widget>(apiUrl, widget, httpOptions).pipe(
      tap((widget: Widget) => console.log(`added widget w/ id=${widget.id}`)),
      catchError(this.handleError<Widget>('addWidget'))
    );
  }

  updateWidget(id, widget): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Widget, httpOptions).pipe(
      tap(_ => console.log(`updated Widget id=${id}`)),
      catchError(this.handleError<any>('updateWidget'))
    );
  }

  deleteWidget(id): Observable<Widget> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Widget>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted widget id=${id}`)),
      catchError(this.handleError<Widget>('deleteWidget'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

}

