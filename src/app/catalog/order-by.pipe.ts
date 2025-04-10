import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'orderBy',
    //pure: false //makes the pipe unpure, causing it to respond to data mutation. generates a great performance cost.
})
export class OrderByPipe implements PipeTransform {
    transform(array: any[], field: string) : any[] {
        if (!Array.isArray(array)){
            return array;
        } else return array.sort((x, y) => x[field] > y[field] ? 1 : x[field] < y[field] ? -1 : 0);
    }
}