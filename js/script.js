window.addEventListener('load', () => {
  const sections = Array.from(document.querySelectorAll('section'))
  let sectionIndex = 0

  const scroll = (direction) => {
    sectionIndex += direction
    if (sectionIndex < 0) {
      sectionIndex = 0
    } else if (sectionIndex >= sections.length) {
      sectionIndex = sections.length - 1
    }

    const section = sections[sectionIndex]
    if (sectionIndex > 0) {
      const previousSection = sections[sectionIndex - 1]
      previousSection.classList.remove('active')
    }
    section.scrollIntoView()
    section.classList.add('active')
    console.log(section, sectionIndex)
  }

  document.addEventListener('keydown', (event) => {
    event.preventDefault()

    switch (event.key) {
      case 'Enter':
        console.log('enter pressed')
        document.querySelector('.active h2').style.display = 'block'
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        document.querySelector('.active h2').style.display = 'none'
        scroll(-1)
        break
      case 'ArrowDown':
      case 'ArrowRight':
        scroll(1)
        break
    }
  })
})
