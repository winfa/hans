import { answersState } from '../store/store.js';

export class ActivityList extends HTMLElement {
  constructor() {
    super();
    console.log(answersState);
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
