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
    console.log(section, sectionIndex)
    section.scrollIntoView()
  }

  document.addEventListener('keydown', (event) => {
    event.preventDefault()

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        scroll(-1)
        break
      case 'ArrowDown':
      case 'ArrowRight':
      case 'Enter':
        scroll(1)
        break
    }
  })
})
