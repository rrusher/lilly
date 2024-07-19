import { loadScript } from '../../scripts/scripts.js';

export default function decorate(block) {
  const playerID = block.querySelector('div:nth-of-type(1) > div:nth-of-type(2)')?.textContent;
  const entryID = block.querySelector('div:nth-of-type(2) > div:nth-of-type(2)')?.textContent;
  [...block.querySelectorAll('div:nth-of-type(-n+2)')].forEach((div) => div.remove());

  const tagDiv = document.createElement('div');
  tagDiv.classList.add('video-player');
  const tagDivId = `kaltura_player_${playerID}`;
  tagDiv.id = tagDivId;
  block.append(tagDiv);

  let uiConfId = 24639831;
/*   if (block.classList.contains('keep-same-video-interface-on-mobile')) {
    uiConfId = 30358591;
  } */

  window.setTimeout(() => {
    loadScript('https://cdnapisec.kaltura.com/p/1759891/sp/175989100/embedIframeJs/uiconf_id/24639831/partner_id/1759891', () => {
      // eslint-disable-next-line
      kWidget.embed({
        targetId: tagDivId,
        wid: '_432521',
        uiconf_id: uiConfId,
        flashvars: {},
        cache_st: playerID,
        entry_id: entryID,
      });
    });
  }, 3200);
}