import '../scss/main.scss';

console.log(' *Beep* *boop* 🤖');
console.log('Greetings recruiter, you look gorgeous today!');
console.log(' *Boop* *beep* 🤖');

fetch('https://api.github.com/users/mateuszlason/repos?sort=fullname&direction=asc')
.then((response) => response.json())
.then((response) => {
    const cage = document.querySelector('.projects-grid');
    for(let repo of response){
        const {name, description, homepage, html_url} = repo;
        const template = ` <article class="projects-grid__item">
        <div class="projects-grid__item--topbar"><span class="projects-grid__item--mac-button"></span>
          <span class="projects-grid__item--mac-button"></span>
          <span class="projects-grid__item--mac-button"></span>
        </div>
        <div class="projects__content">
          <img src="/public/giticon.svg" title="github icon" />
          <h3 class="projects-grid__heading projects-grid__text"><span>project:</span><span>${name}</span></h3>
          <p class="projects-grid__text projects-grid__gap"><span>description:</span><span>${description}</span> </p>
          <p class="projects-grid__text"><span>demo:</span><span>&lt;<a class="projects__link" href="${homepage}" title="Link to ${name} site.">see here</a>&gt;</span></p>
          <p class="projects-grid__text"><span>github:</span><span>&lt;<a class="projects__link" href="${html_url}" title="Link to ${name} repository">source code</a>&gt;</span></p>
      </div>
      </article>` ;
        cage.innerHTML += template;
    }
})
.catch((e) =>console.log(e));
