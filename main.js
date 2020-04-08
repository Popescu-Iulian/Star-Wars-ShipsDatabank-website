const PORTFOLIO_ITEM_WRAPPER = document.querySelectorAll('.portfolio-item-wrapper');

PORTFOLIO_ITEM_WRAPPER.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.childNodes[1].classList.add('p-darken');
  });

  item.addEventListener('mouseout', () => {
    item.childNodes[1].classList.remove('p-darken');
  })
});