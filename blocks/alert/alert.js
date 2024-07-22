import { decorateIcons } from '../../scripts/aem.js';
import { span } from '../../scripts/dom-helpers.js';

export default async function decorate(block) {
  const icon = span({ class: 'icon icon-warning-filled-circle' });
  const alertTxt = block.querySelector('p');
  alertTxt.prepend(icon);
  decorateIcons(block);
}
