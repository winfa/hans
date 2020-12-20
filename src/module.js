import { HanHeader } from './header-and-footer/han-header.js';
import { ActivityList } from './activity/activity-list.js'

registerComponent('han-header', HanHeader, 'div');
registerComponent('activity-list', ActivityList);


function registerComponent(elementName, ElementComponent, parentElementName) {
  if (parentElementName) {
    customElements.define(elementName, ElementComponent, { extends: parentElementName });
  } else {
    customElements.define(elementName, ElementComponent);
  }
}
