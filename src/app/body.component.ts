import { Component } from '@angular/core';


@Component({
  selector: 'my-body',

  templateUrl: '/body.component.html',

})
export class BodyComponent {

showLanguages = false;
showFrameworks = false;
showOthers = false;

  showLanguage(){
    if(this.showLanguages){
    this.showLanguages = false;}
    else{
    this.showLanguages = true;}
  }

  showFramework(){
    if(this.showFrameworks){
    this.showFrameworks = false;}
    else{
    this.showFrameworks = true;}
  }

  showOther(){
    if(this.showOthers){
    this.showOthers = false;}
    else{
    this.showOthers = true;}
  }
 }
