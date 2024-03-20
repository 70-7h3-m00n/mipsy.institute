const handleSwipedEvt = ({ menuIsOpen, closeMenu }) => {
  document.addEventListener('swiped', evt => {
    const e: any = evt
    const swipedDown = e.detail.dir === 'right'
    menuIsOpen && closeMenu && swipedDown && closeMenu()
  })
}

export default handleSwipedEvt
