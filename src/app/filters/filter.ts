import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {
    transform(values: any, args:any,age:any): any{
        if(values!== undefined && values!== null){
            var arg = args;
            var resultArray = [];
            for (let item of values) {
                  if(age>0)
                  {
                      if (item.Amt != null && item.Amt<= arg && item.minAge==age) {
                        resultArray.push(item);
                    }
                  }else{
                   if (item.Amt != null && item.Amt<= arg) {
                        resultArray.push(item);
                    }
                  }
                    
                }
            return _.uniqBy(resultArray, 'Amt');
        }
        return resultArray;
    }
}