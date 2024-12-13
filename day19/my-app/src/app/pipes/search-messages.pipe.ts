import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMessages'
})
export class SearchMessagesPipe implements PipeTransform {

  transform(messages: string[], ...args: string[]): string[] {
    
    console.log('In the Search Pipe');
    
    let filteredMessages = messages.filter((message)=> message.includes(args[0]))

    // console.log(value);
    // console.log(args);
    
    return filteredMessages;
  }

}
