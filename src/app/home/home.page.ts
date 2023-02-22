import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public info: any = {};
  public lista: number[] = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jardin-garcia-default-rtdb.firebaseio.com/maceta.json").subscribe(data => this.info = data);
    
  }

}
