//NAVEGATION
//Navigation is built dynamically as an unordered list.

const navUl = document.getElementById('navegation');
const SectionsOfPage = document.querySelectorAll('.section');
const sections = document.getElementsByTagName('section');


for (let i = 0; i <= SectionsOfPage.length; i++) {
  const section = SectionsOfPage[i];
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  // with "dataset": represent the data attribute of sections title.
  // This takes the atribute content data-nav. 
  const sectionTitle = section.dataset.title ?? '';
  // I created "id" for each "section" then "href" is created for each link <a>
  const sectionId = section.id;

  // added "class" name to all anchors  
  anchor.setAttribute('class', 'link');
  // added "href" to <a></a>
  anchor.setAttribute('href', `#${sectionId}`);
  // added to <li></li> > <a></a>
  li.appendChild(anchor);
  //  to <li> text of <a>
  li.querySelector('a').innerText = sectionTitle;
  navUl.appendChild(li);
}


// Scroll to Anchor
// When clicking an item from the navigation menu, the link should scroll to the appropriate section. 

const titleSection = document.querySelectorAll('.title');

function viewport(e) {
  const rect = e.getBoundingClientReact();
  return (

    rect.bottom >= 0 &&
    rect.right >= 0 &&
    // element is in viewport, its top and left are always greater than or equal to zero.
    rect.left <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerWidth || document.documentElement.clientWidth)

  );

};

//set section as a active
// added "class" active to each section (tag(h2)) when is near of viewport
function sectionActive() {

  for (let i of sections) {
    const id = i.id;
    if (viewpor(i) == true) {
      i.classList.add('active');
      document.querySelector(`[href="#${id}"]`) ?.classList.add('active')
    }
    else {
      i.classList.remove('active');
      document.querySelector(`[href="#${id}"]`) ?.classList.remove('active')
    }
  }
}



// call the sectionActive which is is on viewport
window.addEventListener('scroll', function (e) {
  sectionActive();
});

// scroll to top on click of the icon, it uses a smooth effect 
const scrollUp = document.querySelector('.go-up');
scrollUp.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" })

})









