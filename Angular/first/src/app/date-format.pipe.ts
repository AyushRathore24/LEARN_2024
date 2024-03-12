import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split('-');
    console.log(parts+"___"+parts.length);
    
    if (parts.length === 3) {
      console.log("parts[0] = "+parts[0]+"parts[1] = "+parts[1]+"parts[2] = "+parts[2]);
      
      const day = parts[0];
      console.log(" parts[1].padStart(2, '0') "+ parts[1].padStart(2, '0'));
      
      const month = parts[1].padStart(2, '0'); // Ensure two digits for month
      const year = parts[2].length === 2 ? '20' + parts[2] : parts[2]; // Ensure four digits for year
      console.log( day+"day"+month+" mnth"+" year"+year);
      console.log(`${day}/${month}/${year}`);
      
      return `${day}/${month}/${year}`;
    }
    return value; // Return input value if it doesn't match the expected format
  }
}
