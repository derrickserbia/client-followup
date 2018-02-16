import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private address1: string;
  private address2: string;
  private city: string;
  private state: string;
  private zipCode: number;
  private zipCodeExtension: number;

  private states: string[] = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
  'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
  'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
  'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
  'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
  'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];

  constructor() { }

  private setAddress1(newAddress: string) {
    this.address1 = newAddress;
  }

  private getAddress1(): string {
    return this.address1;
  }

  private setAddress2(newAddress: string) {
    this.address2 = newAddress;
  }

  private getAddress2(): string {
    return this.address2;
  }

  private setCity(newCity: string) {
    this.city = newCity;
  }

  private getCity(): string {
    return this.city;
  }

  private setState(stateAbbreviation: string) {
    if (stateAbbreviation.length > 2 || !this.states.includes(stateAbbreviation, 0)) {
      this.state = '';
    }
    else {
      this.state = stateAbbreviation;
    }
  }

  private getState() {
    return this.state;
  }

  private setZipCode(zipCode: number) {
    if (zipCode < 0 || zipCode.toString.length !== 5) {
      this.zipCode = -1;
    }
    else {
      this.zipCode = zipCode;
    }
  }

  private getZipCode() {
    return this.zipCode;
  }

  private setZipCodeExtension(zipCodeExtension: number) {
    if (zipCodeExtension < 0 || zipCodeExtension.toString.length !== 4) {
      this.zipCodeExtension = -1;
    }
    else {
      this.zipCodeExtension = this.zipCodeExtension;
    }
  }

  private getZipCodeExtension() {
    return this.zipCodeExtension;
  }

  ngOnInit() {
  }
}

