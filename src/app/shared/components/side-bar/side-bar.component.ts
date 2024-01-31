import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
mainMenu : {
  defaultOptions : Array<any>,
  accessLink : Array<any>} = {defaultOptions: [] , accessLink: []}

  customOptions : Array<any> = []


ngOnInit(): void {
this.mainMenu.defaultOptions  = [
{
  name: 'Home',
  icon:'uil-estate',
  router: ['/']
},
{
  name: 'Buscar',
  icon:'uil-search',
  router: ['/','history']
},
{
  name: 'Tu biblioteca',
  icon:'uil-chart',
  router: ['/','favorites']
}
]

this.mainMenu.accessLink = [
  {
    name: 'Crear lista',
    icon:'uil-plus-square '
  },
  {
    name: 'Canciones que te gustan',
    icon:'uil-heart',
  }
]
this.customOptions = [
  {
    name:'Mi lista °1',
    router: ['/']
  },
  {
    name:'Mi lista °2',
    router: ['/']
  },
  {
    name:'Mi lista °3',
    router: ['/']
  },
  {
    name:'Mi lista °4',
    router: ['/']
  },
]
}
}
