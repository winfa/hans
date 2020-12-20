import { BehaviorSubject } from 'https://jspm.dev/rxjs'
import { fetchApi } from './api.service.js';

export const answersState = new AnswersState();

class AnswersState {
  constructor() {
  }
  answers$ = new BehaviorSubject();

  get answers() {
    return this.answers$;
  }

  set answers(val) {
    this.answers$.next(val);
  }
}


const answers$ = new BehaviorSubject();
fetchApi('https://api.stackexchange.com/2.2/me/answers?&order=desc&sort=activity&site=stackoverflow').then(response => {
  answers$.next(response.items);
});
