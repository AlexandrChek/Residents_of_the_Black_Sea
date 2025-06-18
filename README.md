# ![RBS](/dist/favicons/favicon.ico) Residents of the Black Sea

## Description

### **It is a fully responsive web application (SPA) with front-end and back-end based on Vue.js 3 + Vue-router + Webpack. The back-end is consists of the server based on Node.js+Express.js, JS-file with data and the file with handlers (the code is ([here](https://github.com/AlexandrChek/rbs_back))). The application is intended for inhabitants of the Black Sea.**
### **There is a fixed header-part that contains the menu with fish-shaped items. If the viewport width is < 992px, it is under the "burger"-lines.**
### **At the homepage you can see animated fishes and the button to go to the "Black Sea stars" page. The "Black Sea stars" page is a page with the short list of the most popular species of the Black Sea inhabitants. All content is loaded from back-end. The list item contains the photo and the link to the animal-card. At the animal-card page you can see a photo, the "Photo" and "Video" battons and the animal description. The click on the "Photo" button displays the modal window with the photo-carousel. The "Video" button displays the modal window with embedded video from YouTube. Photos, text and a link to YouTube are loaded from back-end.**
### **The search page contains a field for search by name of species, a filter by class of animals and a complete alphabetical list of species. If you want to search by name, you should enter an original name in English (one ore more words from the name). The list of animals and the list of classes are loaded from back-end. Filtering by class is handled on the back-end.**
### **The about page is just a description of the Black Sea with embedded photos and video.**

***

<br/>

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
