class HanHeader extends HTMLDivElement {
  constructor() {
    super();

    console.log('hello world');
  }
}

customElements.define('han-header', HanHeader, { extends: 'div' });