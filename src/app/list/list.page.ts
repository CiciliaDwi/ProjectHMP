import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string,
  productDate: Date,
  productPrice: number,
  discount?: number,
}


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  textcolor: string = 'red';
  couponcode: string = "0000"
  strvalid: string = "Invalid"
  discount: number = 0

  product: Product = {
    productName: 'Iphone 14',
    productDate: new Date(),
    productPrice: 14000000,
    discount: 10
  }

  quantity = 0
  totalAmount = 0
  isMin = false
  isMax = false


  today = "11 September 2024"
  currentDate = new Date();

  is5daysago = false
  is5daysahead = false;
  numberclicked = 0


  constructor() { }

  ngOnInit() {
  }

  goAdd() {
    if (this.quantity < 10) {
      this.quantity++;
      this.totalAmount = this.product.productPrice * this.quantity;
      this.isMin = false; // Enable "decrease" button as quantity is now > 0
    }
    if (this.quantity === 10) {
      this.isMax = true; // Disable "increase" button as quantity reached maximum
    }
  }

  goMin() {
    if (this.quantity > 0) {
      this.quantity--;
      this.totalAmount = this.product.productPrice * this.quantity;
      this.isMax = false;
    }
    if (this.quantity === 0) {
      this.isMin = true;
    }
  }

  today_ind(): string {

    const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthNames = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember'
    ];


    const day = this.currentDate.getDate();
    const month = this.currentDate.getMonth(); // 0-11, no need to add 1
    const year = this.currentDate.getFullYear();

    // Get the current day name and month name using arrays
    const dayName = dayNames[this.currentDate.getDay()];
    const monthName = monthNames[month];

    // Format the date string
    return `${dayName}, ${day} ${monthName} ${year}`;
  }
  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberclicked++
    this.checkStatus()

  }
  goTomorrow() {
    if (!this.is5daysago) {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      if (this.numberclicked > 0) {
        this.numberclicked--;
      }
      if (this.numberclicked < 5) {
        this.is5daysago = false;
      }
    }
  }
  checkStatus() {
    if (this.numberclicked == 5) {
      this.is5daysago = true;
    } else if (this.numberclicked == -5) {
      this.is5daysahead = true;
    } else {
      this.is5daysago = false;
      this.is5daysahead = false;
    }
  }

  resetDate() {
    this.currentDate = new Date();
    this.is5daysago = false;
    this.is5daysahead = false;
    this.numberclicked = 0;
  }
  checkValid() {

    if (this.couponcode === '1234') {
      this.strvalid = "valid";
      this.discount = 5;
      this.textcolor = 'green';
    } else if (this.couponcode === '6789') {
      this.strvalid = "valid";
      this.discount = 10;
      this.textcolor = 'green';
    } else {
      this.strvalid = "Invalid";
      this.discount = 0;
      this.textcolor = 'red';

    }

    this.totalAmount = this.product.productPrice * this.quantity * (1 - this.discount);
  }

  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount: 10
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discount: 5 
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discount: 15 
    }
  ];


  getDiscountedPrice(product: Product): number {
    if (product.discount) {
      return product.productPrice * (1 - product.discount / 100);
    }
    return product.productPrice;
  }

  getFinalPrice(book: any): number {
    const priceAfterBookDiscount = book.price * (1 - (book.discount || 0) / 100);
    return priceAfterBookDiscount * (1 - this.discount / 100); // Final price after coupon
  }
  



}


