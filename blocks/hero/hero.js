import { div } from "../../scripts/dom-helpers.js";

/**
 * decorates the hero
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  const textElems = block.querySelectorAll("h1, p");
  const wrapper = block.closest(".hero-wrapper");

  block.querySelector("img").setAttribute("loading", "eager");

  const txtBox = div({ class: "hero-text-box" });
  textElems.forEach((elem) => {
    if (elem.firstChild.tagName != "PICTURE") {
      txtBox.append(elem);
    }
  });
  block.append(txtBox);
}
