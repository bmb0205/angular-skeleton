import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToUpper'
})
export class ConvertToUpperPipe implements PipeTransform {
    public transform(value: string): string {
        return value.toUpperCase();
    }
}