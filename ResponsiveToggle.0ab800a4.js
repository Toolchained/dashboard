import{c as r,a as i,b as l,r as c,m as d}from"./chunks/index.6f1e4b10.js";/* empty css                        */const v=r("/@fs/home/runner/work/dashboard/dashboard/src/components/ResponsiveToggle.astro",{modules:[],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[{type:"inline",value:`
  // variables
  const mainNav = document.querySelector('#main-navigation')
  const mobileNavigation = mainNav.querySelector('.mobile-menu')
  const responsiveToggle = mainNav.querySelector('.responsive-toggle')
  const menuIconLabels = [...mainNav.querySelectorAll('.sr-only')]
  const mediaQuery = window.matchMedia('(min-width: 48em)')

  // functions
  const openMenu = (toggle) => {
    menuIconLabels.forEach(menuIconLabel => {
      menuIconLabel.classList.remove('sr-only')
    })
    toggle.setAttribute('aria-expanded', true)
    toggle.setAttribute('aria-label', 'Close menu navigation')
    toggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"/></svg>\`
  }

  const closeMenu = (toggle) => {
    menuIconLabels.forEach(menuIconLabel => {
      menuIconLabel.classList.add('sr-only')
    })
    toggle.setAttribute('aria-expanded', false)
    toggle.setAttribute('aria-label', 'Open menu navigation')
    toggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/></svg>\`
  }

  // execution
  responsiveToggle.addEventListener('click', _ => {
    mobileNavigation.classList.toggle('show')
    mobileNavigation.classList.contains('show')
      ? openMenu(responsiveToggle)
      : closeMenu(responsiveToggle)
  })

  window.addEventListener('resize', () => {
    const menuIconLabels = [...mainNav.querySelectorAll('span')]

    if (mediaQuery.matches) {
      mobileNavigation.classList.remove('show')
      closeMenu(responsiveToggle)
    } else {
      menuIconLabels.forEach(menuIconLabel => {
        menuIconLabel.classList.remove('sr-only')
      })
    }
  })
`}]}),g=i("/@fs/home/runner/work/dashboard/dashboard/src/components/ResponsiveToggle.astro","https://toolchained.github.io/dashboard/","file:///home/runner/work/dashboard/dashboard/"),m=l(async(e,o,n)=>{const s=e.createAstro(g,o,n);s.self=m;const t=[];for(const a of t)e.styles.add(a);return c`${d(e)}<button class="responsive-toggle" aria-expanded="false" aria-label="Open menu navigation">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"></path></svg>
</button>



`}),p="/home/runner/work/dashboard/dashboard/src/components/ResponsiveToggle.astro",b=void 0;export{v as $$metadata,m as default,p as file,b as url};
