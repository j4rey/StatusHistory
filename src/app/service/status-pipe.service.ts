import { Pipe, PipeTransform } from '@angular/core';
import { DropdownOption } from '../model/dropdownoption';

@Pipe({name: 'statusOptionName'})
export class StatusOptionNamePipe implements PipeTransform {
  transform(value: number, options: DropdownOption[]=[]): string {
    if(options){
      return options.find(x=>x.id === +value)?options.find(x=>x.id === +value).name:value+'';
    }else{
      return '';
    }
  }
}