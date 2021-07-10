const checkScroll = () => {
  document.querySelectorAll('*').forEach((el) => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
      console.log('found the little scoundorous fellow: ', el)
    }
  })
}

export { checkScroll }
