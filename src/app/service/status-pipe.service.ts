import { Pipe, PipeTransform } from '@angular/core';
import { DropdownOption } from '../model/dropdownoption';

@Pipe({name: 'statusOptionName',pure:true})
export class StatusOptionNamePipe implements PipeTransform {
  transform(value: number, options: DropdownOption[]=[], loc: any): string {
    console.log('StatusOptionNamePipe', value, loc);
    if(options){
      return options.find(x=>+x.id === +value)?options.find(x=>+x.id === +value).name:'';
    }else{
      return '';
    }
  }
}