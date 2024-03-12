import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency'
})
export class IndianCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return ''; // Return empty string for null or NaN values
    }
    
    // Convert number to string
    let formattedValue = value.toString();

    // Add commas every three digits from the right
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedValue;
  }
}
