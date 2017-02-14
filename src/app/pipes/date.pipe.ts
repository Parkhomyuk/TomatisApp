import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentdate'
})
export class CommentDatePipe implements PipeTransform {
  transform(value: number, args?: any): string {

    let min = value ;
    if (min <= 60 && min>0) {
      return min-min%1 + ' minutes ego';
    }
    if (min > 60 && min <= 60*24) {
      let m = min % 60-((min%60)%1);
      let h = (min / 60)-(min/60)%1;
      return h + ' hours ' + m + ' minutes ego'
    }

    if (min > 60*24 && min <= 60*24*30) {
      let m = min % 60-((min%60)%1);
      let h = (min / 60)%24-((min/60)%24)%1;
      let d = (min / (60*24))-(min/(60*24))%1;
      return d+' days  '+h + ' hours ' + m + ' minutes ego'
    }

  }
}
