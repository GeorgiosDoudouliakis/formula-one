/* Place angular imports */
import { Pipe, PipeTransform } from '@angular/core';

/* Place any other imports here */
import * as moment from 'moment';

@Pipe({
  name: 'toLocalTime'
})
export class ToLocalTimePipe implements PipeTransform {
  transform(date: string): string {
    return moment.utc(moment(date, 'hh:mm:ss')).local().format('hh:mm A');
  }
}
