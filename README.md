
<h1>
  <a href="https://dev.tech4germany.org/bmfsfj-partnerschaftliche-gleichstellung" target="_blank">
    <img alt="StartApp Familie logo" height="40" src="./assets/logotransparent.png">
  </a> 
  StartApp Familie
  <a href="https://tech.4germany.org" target="_blank">
  <img alt="Tech4Germany logo" height="40" src="./assets/tech4germany.png" align="right">
  </a> 
</h1>

[ [Live Demo][demo] 🚀 | [Project Info][project] 💁 | [Tech4Germany Fellowship][t4g] 🤓 ]

## 🇩🇪

Die "StartApp Familie" ist ein Beitrag zur **mehr Partnerschaftlichkeit** auf der Paar-Ebene. Die, im Rahmen des [Tech4Germany][t4g] Fellowships und gemeinsam mit dem [BMFSFJ](https://www.bmfsfj.de), entwickelte **Web-App** richtet sich an junge Erwachsene vor oder in der Familiengründung. Das Tool beinhaltet personalisierte **vorausgefüllte To-dos** und eine Sharing-Funktion, mit der die To-dos unter den Partner:innen fair und klischeefrei aufgeteilt werden können. 

Probiere den [Prototypen][demo] aus und finde mehr Informationen auf der [Projektseite][project].
## 🇬🇧

The "StartApp Familie" (StartApp Family) is a contribution to **more partnership** for couples. The **web app**, developed as part of the [Tech4Germany][t4g] Fellowship and cooperation with the [BMFSFJ](https://www.bmfsfj.de/bmfsfj/meta/en), is aimed at young adults before or in the process of starting a family. The tool includes personalized, **pre-filled to-dos** and a sharing function that allows to-dos to be divided among partners in a fair and stereotype-free manner.

Try out our [prototype][demo]
and find out more details on the [project page][project].

[t4g]: https://tech.4germany.org
[demo]: https://dev.tech4germany.org/bmfsfj-partnerschaftliche-gleichstellung
[project]: https://tech.4germany.org/project/partnerschaftliche-gleichstellung-bmfsfj

## Technical Part

The Progressive Web App is build using the **JavaScript** Frameworks [*Vue.js*](https://vuejs.org) and [*NuxtJS*](https://nuxtjs.org).

### Build Setup

Requirements:
- Node Version 14+
- NPM Version 7+

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

The files for a deployment can then be found in the `dist` folder.

For detailed explanation on how things work, check out the [documentation of NuxtJS](https://nuxtjs.org).

### GitHub Pages Deployment

Currently the page is deployed using GitHub Actions and GitHub Pages. Every push to the `main` branch automatically triggers a new deploy.
