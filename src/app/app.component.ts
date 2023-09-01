import { Component } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})


export class AppComponent {

  constructor(private apiService: ApiService){}
  data: any[] = [];
  selectedOption: string = '';
  inputValue: string = '';
  info: any[] = [];

  actualPage: string = '1'
  previusPage: string = '0'
  nextPage: string = '2'
  totalPages: string = ''
  amount: string = '10'

  ngOnInit(): void{
    this.apiService.getData(this.selectedOption, this.inputValue, this.amount, this.actualPage).subscribe(data => {

      const previusElement = document.getElementById('previus');
      const nextElement = document.getElementById('next');

      const principalPreviusElement = document.getElementById('principalPrevius');
      const principalNextElement = document.getElementById('princiapalNext'); 

      this.data = data[0];
      this.info = data[1];

      this.actualPage = data[1].actualPage.toString()
      this.nextPage = data[1].nextPage.toString()
      this.previusPage = data[1].previusPage.toString()
      
      if(data[1].previusPage.toString() === '0'){
        previusElement?.setAttribute('class', 'page-item d-none');
        principalPreviusElement?.setAttribute('class', 'page-item d-none');
      } else {
        previusElement?.setAttribute('class', 'page-item');
        principalPreviusElement?.setAttribute('class', 'page-item');
      }
  
      if(data[1].nextPage.toString() === '0'){
        nextElement?.setAttribute('class', 'page-item d-none');
        principalNextElement?.setAttribute('class', 'page-item d-none');
      }else{
        nextElement?.setAttribute('class', 'page-item');
        principalNextElement?.setAttribute('class', 'page-item');
      }
    })    
  } 

  onOptionChange() {
    this.actualPage = '1'
    this.nextPage = '2'
    this.previusPage = '0'

   this.endpoint(this.selectedOption, this.inputValue, this.amount, this.actualPage);
  }

  onInputChange() {
    this.actualPage = '1'
    this.nextPage = '2'
    this.previusPage = '0'

    this.endpoint(this.selectedOption, this.inputValue, this.amount, this.actualPage);
  }

  endpoint(fieldFilter: string, filter:string, amount: string, actualPage: string){
    this.apiService.getData(fieldFilter, filter, amount, actualPage).subscribe(data => {

      this.data = data[0];
      this.info = data[1];     

      const previusElement = document.getElementById('previus');
      const nextElement = document.getElementById('next');
  
      const principalPreviusElement = document.getElementById('principalPrevius');
      const principalNextElement = document.getElementById('principalNext'); 

      if(data[1].previusPage.toString() === '0'){
        previusElement?.setAttribute('class', 'page-item d-none');
        principalPreviusElement?.setAttribute('class', 'page-item d-none');
      } else {
        previusElement?.setAttribute('class', 'page-item');
        principalPreviusElement?.setAttribute('class', 'page-item');
      }
  
      if(data[1].nextPage.toString()=== '0'){
        nextElement?.setAttribute('class', 'page-item d-none');
        principalNextElement?.setAttribute('class', 'page-item d-none');
      }else{
        nextElement?.setAttribute('class', 'page-item');
        principalNextElement?.setAttribute('class', 'page-item');
      }

    })  
  }

  next(){   

    this.previusPage = this.actualPage.toString()
    this.actualPage = this.nextPage.toString()
    this.nextPage = (parseInt(this.nextPage) + 1).toString()

    this.endpoint(this.selectedOption, this.inputValue, this.amount, this.actualPage);    
    
  }

  previus(){

    this.nextPage = this.actualPage.toString()
    this.actualPage = this.previusPage.toString()
    this.previusPage = (parseInt(this.actualPage) - 1).toString()

    this.endpoint(this.selectedOption, this.inputValue, this.amount, this.actualPage);    
    
    
  }

}