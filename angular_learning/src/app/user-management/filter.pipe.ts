import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, FilterString:string, prop: string ) :any {
    if (value.length === 0 || FilterString ===''){
      return value
    }
    const filter : any = FilterString.toLowerCase().split('')
    const panjang : Number = FilterString.length

    const ressultArray = [];
    for(const item of value){
      const items : any = item
      if(item[prop].toLowerCase(). normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('').indexOf(FilterString.toLowerCase().replace(' ','')) >= 0){
        ressultArray.push(item)
      }
    }
    return ressultArray;
  }
}
