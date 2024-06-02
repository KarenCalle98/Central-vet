import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Veter-Flucina', price: 19.00, salePrice: 29.00, imageSrc: '../assets/img/1.PNG' },
    { name: 'Dexapen', price: 5.00, salePrice: null, imageSrc: '../assets/img/2.PNG' },
    { name: 'Florfenicol', price: 3.50, salePrice: null, imageSrc: '../assets/img/3.PNG' },
    { name: 'Vetadicrysticina', price: 3.50, salePrice: null, imageSrc: '../assets/img/4.PNG' },
    { name: 'Vetapen', price: 3.50, salePrice: null, imageSrc: '../assets/img/5.PNG' },
    { name: 'Nugold', price: 3.50, salePrice: null, imageSrc: '../assets/img/6.PNG' },
    { name: 'Peniben', price: 3.50, salePrice: null, imageSrc: '../assets/img/7.PNG' },
    { name: 'Overpen', price: 3.50, salePrice: null, imageSrc: '../assets/img/8.PNG' },
    { name: 'Hemopar B12', price: 3.50, salePrice: null, imageSrc: '../assets/img/9.PNG' },
    { name: 'Over Plus', price: 3.50, salePrice: null, imageSrc: '../assets/img/10.PNG' },
    { name: 'Antripan', price: 3.50, salePrice: null, imageSrc: '../assets/img/11.PNG' },
    { name: 'Berenil', price: 3.50, salePrice: null, imageSrc: '../assets/img/12.PNG' },
    { name: 'Imizol', price: 3.50, salePrice: null, imageSrc: '../assets/img/13.PNG' },
    { name: 'Imicar', price: 3.50, salePrice: null, imageSrc: '../assets/img/14.PNG' },
    { name: 'Diprocar', price: 3.50, salePrice: null, imageSrc: '../assets/img/15.PNG' },
    { name: 'Trevesec', price: 3.50, salePrice: null, imageSrc: '../assets/img/16.PNG' },
    { name: 'Edo Kolosal', price: 3.50, salePrice: null, imageSrc: '../assets/img/17.PNG' },
    { name: 'Edo Modifor', price: 3.50, salePrice: null, imageSrc: '../assets/img/18.PNG' },
    { name: 'Edo Vitaminas ADE', price: 3.50, salePrice: null, imageSrc: '../assets/img/19.PNG' },
    { name: 'Edo Cozink', price: 3.50, salePrice: null, imageSrc: '../assets/img/20.PNG' },
    { name: 'Edo Complex', price: 3.50, salePrice: null, imageSrc: '../assets/img/21.PNG' },
    { name: 'Edo Mil- B', price: 3.50, salePrice: null, imageSrc: '../assets/img/22.PNG' },
    { name: 'Biorgan', price: 3.50, salePrice: null, imageSrc: '../assets/img/23.PNG' },
    { name: 'Instavit', price: 3.50, salePrice: null, imageSrc: '../assets/img/24.PNG' },
    { name: 'Oversel ADE', price: 3.50, salePrice: null, imageSrc: '../assets/img/25.PNG' },
    { name: 'Belamyl - R', price: 3.50, salePrice: null, imageSrc: '../assets/img/26.PNG' },
    { name: 'Ganae 650', price: 3.50, salePrice: null, imageSrc: '../assets/img/27.PNG' },
    { name: 'Crecedor', price: 3.50, salePrice: null, imageSrc: '../assets/img/28.PNG' },
    { name: 'Edo Mektina Gold', price: 3.50, salePrice: null, imageSrc: '../assets/img/29.PNG' },
    { name: 'Vimec Top', price: 3.50, salePrice: null, imageSrc: '../assets/img/30.PNG' },
    { name: 'Edo Doramectina', price: 3.50, salePrice: null, imageSrc: '../assets/img/31.PNG' },
    { name: 'Ganador 3,15%', price: 3.50, salePrice: null, imageSrc: '../assets/img/32.PNG' },
    { name: 'Endomec 1%', price: 3.50, salePrice: null, imageSrc: '../assets/img/33.PNG' },
    { name: 'Dqmec 3.5%', price: 3.50, salePrice: null,   imageSrc: '../assets/img/34.PNG' },
    { name: 'Ivegan 1%', price: 3.50, salePrice: null, imageSrc: '../assets/img/35.PNG' },
    { name: 'Ivermectina 3,15%', price: 3.50, salePrice: null, imageSrc: '../assets/img/36.PNG' },
    { name: 'Ruminal B 25% Co', price: 3.50, salePrice: null, imageSrc: '../assets/img/37.PNG' },
    { name: 'Bovipur 25% Co', price: 3.50, salePrice: null, imageSrc: '../assets/img/38.PNG' },
    { name: 'Edo Cur 10%', price: 3.50, salePrice: null, imageSrc: '../assets/img/39.PNG' },
    // ... add more products here
  ];

  constructor() { }

  ngOnInit() {
  }



}
