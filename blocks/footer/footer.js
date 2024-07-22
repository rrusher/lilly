import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // temp overwrite
  const thefoot = document.createElement('div');
  thefoot.innerHTML = `<div class="wrapper">
  <div class="row">
    <div class="col-12 col-md-9 lds-footer-main-links">
      <ul class="row">
        <li class="col-12 col-md-auto">
          <!----> <a aria-label="Diversity" href="/impact/empowering-a-diverse-workforce" target="_self" class="lds-link">
            Diversity
          </a>
        </li>
        <li class="col-12 col-md-auto">
          <!----> <a aria-label="Suppliers" href="/suppliers" target="_self" class="lds-link">
            Suppliers
          </a>
        </li>
        <li class="col-12 col-md-auto">
          <!----> <a aria-label="Login" href="/login" target="_self" class="lds-link">
            Login
          </a>
        </li>
        <li class="col-12 col-md-auto">
          <!----> <a aria-label="Contact" href="/contact-us" target="_self" class="lds-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-3 lds-footer-support">
      <div>
        <p><strong>To speak to customer support:</strong><br>
          Call <span class="text-nowrap"><a aria-label="(800) 545-5979" href="tel:(800) 545-5979" class="lds-link">
              (800) 545-5979
            </a></span></p>
      </div>
    </div>
  </div>
  <div class="lds-footer-meta">
    <div>
      <div>This site is intended for U.S. residents ages 18 and older.<br><a href="https://e.lilly/32DJeOl" target="_blank" class="lds-link">Copyright © 2024 Lilly. All rights reserved.</a></div>
      <div class="lds-footer-cookie-consent-reset">
        <div data-v-42e845e0="" class="lds-privacy-choices">
          <div data-v-42e845e0="">
            <p data-v-42e845e0="" class="mt-3 iconAlign">
            <div data-v-42e845e0="" class="ewi-image icon-margin">
              <picture>
                <source srcset="/icons/privacy.png"> <img alt="Your Privacy Choices logo" src="/icons/privacy.png" style="max-width: 35px;">
              </picture>
            </div><a data-v-42e845e0="" aria-label="Your Privacy Choices (opens in a new tab)" href="https://privacynotice.lilly.com/#california-residents" target="_blank" class="lds-link">
              Your Privacy Choices
            </a></p>
          </div>
          <div data-v-42e845e0="">
            <p data-v-42e845e0="" class="mt-3"><a data-v-42e845e0="" aria-label="Cookie Settings" href="/cookie-settings" class="lds-link">
                Cookie Settings
              </a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-auto order-md-2 ml-auto">
      <div class="lds-footer-social-icons">
        <div><a href="https://twitter.com/EliLillyandCo" external="true" class="lds-link"><svg aria-labelledby="lds-icon-12319052-title" aria-hidden="false" title="X" role="img" focusable="false" class="icon icon-twitter">
              <title id="lds-icon-12319052-title">
                X
              </title>
              <!----> <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
              </svg>
            </svg></a> <a href="https://www.facebook.com/elilillyandco" external="true" class="lds-link"><svg aria-labelledby="lds-icon-12319055-title" aria-hidden="false" title="Facebook" role="img" focusable="false" class="icon icon-facebook">
              <title id="lds-icon-12319055-title">
                Facebook
              </title>
              <!----> <svg viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m8.67416189.00332907-2.15869076-.00332907c-2.42521503 0-3.99249553 1.5455198-3.99249553 3.93762159v1.81550721h-2.170467c-.18755412 0-.33943313.14614609-.33943313.32641512v2.63046305c0 .18026903.15205219.32624866.33943313.32624866h2.170467v6.63749567c0 .1802691.15187901.3262487.33943313.3262487h2.83184206c.18755412 0 .33943312-.1461461.33943312-.3262487v-6.63749567h2.53778214c.18755412 0 .33943312-.14597963.33943312-.32624866l.00103909-2.63046305c0-.08655577-.0358483-.16944956-.09940542-.23070441s-.1501472-.09571071-.24020089-.09571071h-2.53864804v-1.53902812c0-.7397189.1833978-1.11523776 1.18593777-1.11523776l1.45419385-.00049936c.18738094 0 .33925994-.14614609.33925994-.32624867v-2.44253716c0-.17993612-.15170582-.32591576-.33891358-.32624866z"></path>
              </svg>
            </svg></a> <a href="https://www.instagram.com/elilillyco/" external="true" class="lds-link"><svg aria-labelledby="lds-icon-12319058-title" aria-hidden="false" title="Instagram" role="img" focusable="false" class="icon icon-instagram">
              <title id="lds-icon-12319058-title">
                Instagram
              </title>
              <!----> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m11 0h-6c-2.761 0-5 2.239-5 5v6c0 2.761 2.239 5 5 5h6c2.761 0 5-2.239 5-5v-6c0-2.761-2.239-5-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5h-6c-1.93 0-3.5-1.57-3.5-3.5v-6c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5zm-6.5-7c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6.5c-1.378 0-2.5-1.122-2.5-2.5 0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5zm4.3-6.267c.2943678 0 .533-.23863223.533-.533s-.2386322-.533-.533-.533-.533.23863223-.533.533.2386322.533.533.533z"></path>
              </svg>
            </svg></a> <a href="https://www.linkedin.com/company/eli-lilly-and-company/" external="true" class="lds-link"><svg aria-labelledby="lds-icon-12319061-title" aria-hidden="false" title="LinkedIn" role="img" focusable="false" class="icon icon-linkedin">
              <title id="lds-icon-12319061-title">
                LinkedIn
              </title>
              <!----> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m16 9.82727973v6.18916327h-3.4306819v-5.7775259c0-1.45258443-.4946577-2.43981378-1.7360032-2.43981378-.94932925 0-1.50933678.66838985-1.7593258 1.31163672-.09001077.23164451-.11734861.55605189-.11734861.87629211v6.02867545h-3.42730229s.04600922-9.78152668 0-10.79456435h3.42800498v1.53000939c-.00465112.01257149-.01465603.02300687-.01934061.03697908h.01934061v-.03697908c.45798417-.73534439 1.26931912-1.78329507 3.09131782-1.78329507 2.261345.00003502 3.951339 1.5426159 3.951339 4.85942216zm-14.05934771-9.81083678c-1.17264961 0-1.94065229.8051354-1.94065229 1.86702327 0 1.03327811.74534941 1.86562254 1.89665074 1.86562254h.02067905c1.198649 0 1.94132151-.83234443 1.94132151-1.86562254-.02332249-1.06188787-.74263904-1.86702327-1.91799901-1.86702327zm-1.73596981 15.99996495h3.42867421v-10.79592999h-3.42867421z"></path>
              </svg>
            </svg></a> <a href="https://www.youtube.com/user/EliLillyandCompany" external="true" class="lds-link"><svg aria-labelledby="lds-icon-12319064-title" aria-hidden="false" title="YouTube" role="img" focusable="false" class="icon icon-youtube">
              <title id="lds-icon-12319064-title">
                YouTube
              </title>
              <!----> <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="m66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19-5.31-1.42-27.1-1.55-27.1-1.55s-21.79.13-27.1 1.55c-2.93.78-4.63 3.26-5.42 6.19-1.42 5.31-1.48 16.26-1.48 16.26s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19 5.31 1.42 27.1 1.55 27.1 1.55s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19 1.42-5.31 1.48-16.26 1.48-16.26s-.06-10.95-1.48-16.26z"></path>
                <path d="m45 24-18-10v20" fill="#fff"></path>
              </svg>
            </svg></a></div>
      </div>
      <div class="lds-footer-global-links d-none d-md-block"><a aria-label="Terms of Use (opens in a new tab)" href="https://e.lilly/3McM5oc" target="_blank" class="lds-link">
          Terms of Use
        </a><a aria-label="Privacy Statement (opens in a new tab)" href="https://e.lilly/45NAL9d" target="_blank" class="lds-link">
          Privacy Statement
        </a><a aria-label="Consumer Health Privacy Notice (opens in a new tab)" href="https://www.lillyhub.com/legal/lillyusa/chpn.html" target="_blank" class="lds-link">
          Consumer Health Privacy Notice
        </a><a aria-label="Accessibility Statement (opens in a new tab)" href="https://e.lilly/3MgtibF" target="_blank" class="lds-link">
          Accessibility Statement
        </a><a aria-label="Sitemap" href="/lilly-sitemap" target="_self" class="lds-link">
          Sitemap
        </a></div>
    </div>
    <div class="col-12 col-md-auto order-md-1 lds-footer-logo"><a aria-label="Visit Lilly.com" href="http://lilly.com" class="lds-link lds-footer-logo-img lds-logo-lilly logo-md logo-red logo-disable-padding-right logo-disable-padding-bottom logo-disable-padding-left"><svg viewBox="0 0 631 344" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Lilly</title>
          <path d="M435.528098,200.793973 C439.182374,198.191364 443.134091,195.153215 446.820236,192.231919 C475.215236,169.509545 496.917811,144.609478 501.198838,130.831582 C501.358182,130.385421 501.740606,129.121296 501.740606,128.101498 C501.740606,126.67803 501.060741,125.679478 499.754125,125.679478 C486.741077,125.679478 444.886869,167.331852 434.763249,201.048923 L434.763249,201.18702 L435.528098,200.793973 Z M330.648249,196.003047 C370.19729,166.131465 411.732811,122.630707 416.162559,104.77362 C416.311279,104.18936 416.449377,103.615724 416.428131,103.073956 C416.375017,101.905438 415.737643,100.853771 414.250438,100.853771 C401.736667,100.853771 343.767525,154.297559 330.648249,196.003047 Z M87.830101,222.262845 C77.3877946,215.01803 61.2409933,208.686785 46.8257239,208.686785 C32.8353704,208.686785 23.8802694,214.178822 23.8802694,221.104949 C23.8802694,229.082744 34.7474916,232.567054 46.9000842,232.567054 C61.6446633,232.567054 75.0188889,228.583468 87.830101,222.262845 Z M208.984226,128.54766 C237.326111,119.454461 264.223283,100.450101 284.27931,80.606532 C302.826886,62.2395455 317.667071,40.4307407 317.667071,29.6378788 C317.667071,27.173367 315.90367,25.6861616 313.672862,25.6861616 C305.089562,25.6861616 288.79404,37.0951515 266.88963,59.0208081 C249.818636,76.1449158 229.943199,99.4834175 208.984226,128.54766 Z M631,197.086582 C606.662946,221.317407 530.783603,287.91234 510.695707,343.958737 L485.827508,337.553131 C493.954024,314.342104 518.429175,278.245505 545.719394,250.38165 C539.919293,252.580589 533.85362,253.387929 528.998956,253.387929 C521.626667,253.387929 515.890303,251.167744 512.448485,246.982323 C509.962727,243.976044 508.709226,240.045572 508.709226,235.382121 C508.709226,234.372946 508.783586,233.342525 508.921684,232.205875 C484.967054,246.791111 465.686498,253.387929 446.820236,253.387929 C432.139394,253.387929 419.763721,246.982323 414.069848,235.764545 C390.274562,247.55596 367.477828,253.387929 348.399108,253.387929 C330.648249,253.387929 316.349832,246.366195 309.784882,233.54436 C285.734646,247.067306 265.285572,253.387929 249.011296,253.387929 C239.641902,253.387929 232.216498,250.78532 227.436195,245.877542 C223.93064,242.265758 222.071633,237.379226 221.816684,231.749091 C206.392239,241.893956 183.892946,253.387929 160.777525,253.387929 C137.173451,253.387929 121.324091,245.272037 109.033401,237.251751 C89.4235354,248.097727 67.8590572,253.387929 45.0517003,253.387929 C27.8107407,253.387929 0,246.196229 0,221.487374 C0,201.526953 20.8208754,188.025253 48.6634848,188.025253 C72.3525421,188.025253 95.1705219,198.010774 109.490185,208.357475 C123.087492,197.543367 137.35404,182.395118 154.170084,161.011229 C150.473316,161.202441 146.861532,161.30867 143.313485,161.30867 C111.08362,161.30867 84.1758249,151.822424 69.4949832,135.18697 C61.570303,126.210623 57.8204209,115.67271 57.8204209,104.338081 C57.8204209,59.5200842 114.408586,24.7513468 163.921902,19.641734 C167.204377,27.0565152 170.136296,32.771633 173.142576,39.5702862 C124.224141,45.2535354 83.4853367,74.2115488 83.4853367,102.50032 C83.4853367,121.090387 104.401818,139.765438 148.76303,139.765438 C156.358401,139.765438 163.996263,139.043081 171.517273,137.991414 C210.673266,83.9421212 270.703249,0 322.330522,0 C337.616869,0 345.594663,9.28441077 345.594663,21.7238215 C345.594663,47.2825084 323.626515,74.7958081 309.306852,89.1473401 C286.796936,111.763485 246.111246,145.395572 189.257508,156.53899 C167.14064,187.292273 148.964865,207.698855 130.789091,222.432811 C141.815657,228.381633 152.130488,232.014663 164.46367,232.014663 C195.046987,232.014663 224.727357,204.002088 247.917138,180.270539 L248.735101,179.484444 L266.815269,193.612896 L265.976061,194.590202 C255.724966,206.349747 246.281212,218.767912 246.281212,225.715286 C246.281212,231.016111 250.732205,232.057155 254.577694,232.057155 C266.30537,232.057155 284.35367,224.48303 305.610084,211.406246 L305.610084,211.225657 C307.957744,158.695438 379.630421,78.3863468 423.141801,78.3863468 C435.421869,78.3863468 442.486094,84.4945118 442.486094,95.2236364 C442.486094,121.547172 397.05197,178.007862 330.988182,221.200556 L330.988182,221.232424 C334.408754,228.583468 342.28032,232.131515 355.6333,232.131515 C366.064983,232.131515 386.429074,227.478687 410.670522,214.816195 C413.485589,187.600337 428.899411,158.387374 448.445539,137.566498 C468.066027,116.713754 490.055421,103.148316 509.070404,103.148316 C520.787458,103.148316 527.713586,109.61766 527.713586,119.741279 C527.713586,142.697357 501.060741,181.959579 436.845337,223.070185 C439.68165,228.583468 445.205556,232.057155 453.778232,232.057155 C472.899444,232.057155 506.595269,211.639949 532.855067,186.538047 L551.700084,201.18702 C543.647929,210.949461 535.510791,221.699832 535.776364,227.861111 C535.840101,229.858215 537.189209,231.186077 540.354832,231.186077 C559.699125,231.186077 590.165589,205.659259 613.004815,183.117475 L631,197.086582 Z M280.805623,144.407643 C289.346431,144.407643 296.251313,151.355017 296.251313,159.874579 C296.251313,168.42601 289.346431,175.362761 280.805623,175.362761 C272.243569,175.362761 265.317441,168.42601 265.317441,159.874579 C265.317441,151.355017 272.243569,144.407643 280.805623,144.407643 Z"></path>
        </svg></a></div>
  </div>
</div>`;
  block.append(thefoot);
}
