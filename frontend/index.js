function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const navElement = document.createElement('nav')
  
    links.forEach(link => {
      let aTag = document.createElement('a')
      aTag.href = link.href
      aTag.title = link.title
      aTag.textContent = link.textContent
 navElement.appendChild(aTag)
    })
   
    return navElement
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
const card = document.createElement('div')
card.classList.add('learner-card')

const pName = document.createElement('p')
pName.textContent = learner.fullName

const pId = document.createElement('p')
pId.textContent = `learner ID: ${learner.id}`

const pDob= document.createElement('p')
pDob.textContent = `Date of Birth: ${learner.dateOfBirth}`

const pFav= document.createElement('p')
const favLang = languages.find(lang => lang.id === learner.favLanguage)
pFav.textContent = `Favorite Language: ${favLang.name}`;



[pName, pId, pDob, pFav].forEach(p => {
  card.appendChild(p)
})

card.addEventListener('click', evt => {
document.querySelectorAll('.learner-card').forEach(card => {
card.classList.remove('active')
})
card.classList.add('active')

})
return card




  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
   learners.forEach(learner => {
const learnerCard = buildLearnerCard(learner, languages)
document.querySelector('section').appendChild(learnerCard)

   })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footerElement = document.createElement('footer')
    const container = document.createElement('div')
    container.classList.add('company-info')
   
    document.querySelector('body').appendChild(footerElement)


    const containerTwo = document.createElement('div')
    containerTwo.classList.add('social-nedia')

     
   
    

    for(let objects in footerData.socialMedia) {
      const anchorA = document.createElement('a')
      anchorA.href = footerData[objects]
      anchorA.textContent = objects.charAt().toUpperCase() + objects.slice(1)
      containerTwo.appendChild(anchorA)
    }


const FooterPname = document.createElement('p')
FooterPname.classList.add("company-name")
FooterPname.textContent = footerData.companyName
const FooterPadd = document.createElement('p')
FooterPadd.classList.add("address")
FooterPadd.textContent = footerData.address
const FooterPmail = document.createElement('p')
FooterPmail.classList.add("contact-email")
FooterPmail.innerHTML =`Email: <a href="mailto: ${footerData.contactEmail}"> ${footerData.contactEmail}</a>`;



[FooterPname, FooterPadd, FooterPmail].forEach(p => {
container.appendChild(p)
})


let currentYear = new Date().getFullYear()
let copyright = document.createElement('div')
copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`


footerElement.appendChild(container) 

 footerElement.appendChild(containerTwo)

 footerElement.appendChild(copyright)
return footerElement
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

document.addEventListener('click', evt => {
  if(evt.target === document.querySelector('section')) {
    const learners = document.querySelectorAll('.learner-card')
    learners.forEach(card => card.classList.remove('active'))
  }
})
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
