import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private apiService: ApiService){}
  data: any[] = [];
  selectedOption: string = '';
  inputValue: string = '';

  ngOnInit(): void{
    this.apiService.getData('0', '', '').subscribe(data => {
      this.data = data; 
    })
  } 

  onOptionChange() {
    this.endpoint('0', this.selectedOption, this.inputValue);
  }

  onInputChange() {
    this.endpoint('0', this.selectedOption, this.inputValue);
  }

  paginator(page: string) {

    this.endpoint(page, this.selectedOption, '');

    let elements = document.querySelectorAll('.page-item');
    elements.forEach(element => {
      if(element.id != page){
        element.setAttribute('class', 'page-item');
      }else{
        element.setAttribute('class', 'page-item active');
      }  
    });
  }

  endpoint(page: string, fieldFilter: string, filter:string){
    this.apiService.getData(page, fieldFilter, filter).subscribe(data => {
      this.data = data;      
    })  
  }

}