// import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
keys = [];
    transform(array: any[], query: string): any {
      
   if (array != null && array.length > 0) {
  let ans = [];

  if (this.keys.length == 0) {
    this.keys = Object.keys(array[0]);
  }

  for (let i of array) {
    for (let k of this.keys) {
      
    
       if (i[k].toLowerCase().match('^.*' + query +'.*$')) {
        ans.push(i);
        break;
      }
       else if (i[k].toUpperCase().match('^.*' + query +'.*$')) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
    }
}
}

// return filter 
//     ? array.filter(element => element.type && element.type.toLowerCase().indexOf(filter.toString().toLowerCase()) != -1) 
//     : array;

    


//    if (query) {
//             return _.filter(array, row=>row.Username.indexOf(query) > -1, row=>row.Department.indexOf(query) > -2,row=>row.role.indexOf(query) > -3);
//         }
//         return array;




//  if (array != null && array.length > 0) {
//   let ans = [];

//   if (this.keys.length == 0) {
//     this.keys = Object.keys(array[0]);
//   }

//   for (let i of array) {
//     for (let k of this.keys) {
//       console.log(i[k],'pipe error');
      
//       if (i[k].toLowerCase().match('^.*' + query +'.*$')) {
//         ans.push(i);
//         break;
//       }
//        else if (i[k].toUpperCase().match('^.*' + query +'.*$')) {
//         ans.push(i);
//         break;
//       }
//     }
//   }
//   return ans;
//     }