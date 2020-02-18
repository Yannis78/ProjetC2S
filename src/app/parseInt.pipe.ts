import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hexToDec'
})
export class HexToDec implements PipeTransform {
    transform(value: string): number {
        return parseInt(value, 16);
    }
}