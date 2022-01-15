// console.log(toolsDatas)
const tools = toolsDatas
const toolsMore = toolsDatasMore
const toolsFullMore = toolsDatasFullMore
// console.log(tools)
// console.log(toolsMore)
// console.log(toolsDatasFullMore)

const toolsGrid = document.querySelector('.tools-grid')
const toolsGridMore = document.querySelector('.tools-grid-more')
const toolsGridFull = document.querySelector('.tools-grid-full')
const toolsGridFullMore = document.querySelector('.tools-grid-full-more')

createToolsCard()

function createToolsCard() {
  tools.forEach((tool) => {
    const {
      level,
      textColors,
      category,
      nameSite,
      description,
      webSite,
      emoji,
    } = tool

    if (level !== 'Fullstack') {
      const toolEl = document.createElement('div')
      toolEl.classList.add('card')

      toolEl.innerHTML = `
        <div class="card-body">
        <div class="level">
          ${level} &nbsp
          <span style="color: ${textColors}">${category}</span>
        </div>
        <h3 class="text-icon">${nameSite}</h3>
        <span>${emoji}</span>
        <p>
          ${description}
        </p>
        </div>
        <div class="card-footer">
          <i class="fas fa-link"></i>
          <a href="${webSite}" target="_blank"
            >Voir le Site</a
          >
        </div>
      `
      toolsGrid.appendChild(toolEl)
    } else {
      const toolElFull = document.createElement('div')
      toolElFull.classList.add('card-light')
      toolElFull.classList.remove('card')

      toolElFull.innerHTML = `
          <div class="card-body">
          <div class="level">
            ${level} &nbsp
            <span style="color: ${textColors}">${category}</span>
          </div>
          <h3 class="text-icon">${nameSite}</h3>
          <span>${emoji}</span>
          <p>
            ${description}
          </p>
          </div>
          <div class="card-footer">
            <i class="fas fa-link"></i>
            <a href="${webSite}" target="_blank"
              >Voir le Site</a
            >
          </div>
        `
      toolsGridFull.appendChild(toolElFull)
    }
  })
}

// @ToDo if/else fullstack
function createToolsMoreCard() {
  toolsMore.forEach((toolMore) => {
    const {
      level,
      textColors,
      category,
      nameSite,
      description,
      webSite,
      emoji,
    } = toolMore

    const toolMoreEl = document.createElement('div')
    toolMoreEl.classList.add('card')

    toolMoreEl.innerHTML = `
      <div class="card-body">
      <div class="level">
        ${level} &nbsp
        <span style="color: ${textColors}">${category}</span>
      </div>
      <h3 class="text-icon">${nameSite}</h3>
      <span>${emoji}</span>
      <p>
        ${description}
      </p>
      </div>
      <div class="card-footer">
        <i class="fas fa-link"></i>
        <a href="${webSite}" target="_blank"
          >Voir le Site</a
        >
      </div>
    `
    toolsGridMore.appendChild(toolMoreEl)
  })
}

function createToolsMoreFullCard() {
  toolsFullMore.forEach((toolFullMore) => {
    const {
      level,
      textColors,
      category,
      nameSite,
      description,
      webSite,
      emoji,
    } = toolFullMore

    const toolMoreFullEl = document.createElement('div')
    toolMoreFullEl.classList.add('card-light')

    toolMoreFullEl.innerHTML = `
      <div class="card-body">
      <div class="level">
        ${level} &nbsp
        <span style="color: ${textColors}">${category}</span>
      </div>
      <h3 class="text-icon">${nameSite}</h3>
      <span>${emoji}</span>
      <p>
        ${description}
      </p>
      </div>
      <div class="card-footer">
        <i class="fas fa-link"></i>
        <a href="${webSite}" target="_blank"
          >Voir le Site</a
        >
      </div>
    `
    toolsGridFullMore.appendChild(toolMoreFullEl)
  })
}

const btnMoreDesign = document.querySelector('.btn-more-design')
const toolsMoreDesign = document.querySelector('.more-design')
const btnMoreFullstack = document.querySelector('.btn-more-fullstack')
const toolsMoreFullstack = document.querySelector('.more-fullstack')

btnMoreDesign.addEventListener('click', () => {
  toggleMoreDesignTools()
})

btnMoreFullstack.addEventListener('click', () => {
  toggleMoreFullstackTools()
})

function toggleMoreDesignTools() {
  if (!toolsMoreDesign.classList.contains('show')) {
    toolsMoreDesign.classList.add('show')
    createToolsMoreCard()
    btnMoreDesign.innerHTML = 'Cacher les sites'
  } else {
    toolsMoreDesign.classList.remove('show')
    toolsGridMore.innerHTML = ''
    btnMoreDesign.innerHTML = 'Voir plus de sites'
  }
}

function toggleMoreFullstackTools() {
  if (!toolsGridFullMore.classList.contains('show')) {
    toolsGridFullMore.classList.add('show')
    createToolsMoreFullCard()
    btnMoreFullstack.innerHTML = 'Cacher les sites'
  } else {
    toolsGridFullMore.classList.remove('show')
    toolsGridFullMore.innerHTML = ''
    btnMoreFullstack.innerHTML = 'Voir plus de sites'
  }
}
