import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterViewChecked,
	AfterContentInit,
	AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export default class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterViewChecked,
		AfterContentInit,
		AfterViewInit,
    OnDestroy
{

  quantidade:number = 0;



  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

	ngOnInit(): void {
    console.log("ngOnInit");
  }

  constructor() {}
  ngOnDestroy(): void {
    console.log("Adeus");
  }

}
