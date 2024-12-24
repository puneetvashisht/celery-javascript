import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add a message should result in message list size to be 6', ()=>{
    service.addMessage('Test MEssages')
    expect(service.messages.length).toBe(6)
  })

});
