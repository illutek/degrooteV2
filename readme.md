## Personenvervoer De Dierenvriend  
Dit voor John als eindwerkproject voor het volwassenonderwijs CVOHZ in opdracht van Koen Timmers

### Opzetten van themplate  
#### Webtechnologie  

##### Bootstrap3 als css framework
##### NPM
https://www.npmjs.com/  
NPM voor vooral gulp, gulp-sass, minifyCSS,  
Met npm init wordt package.json aangemaakt  
##### Bower  
https://bower.io/  
bower.json file met bower init  
Bower voor het css framework Bootstrap en font-awesome icons


npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update 
the code that you're sharing.

gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

Bower A package manager for the web

De directory build bevat het uiteindelijke theme zonder alle files die nodig zijn
in development (zoals package.json, gulp.js, sass, etc)

##### GIT als versie control  
Een prachtig hulpmiddel, gezien dat het project op 2 verschillende machines is opgezet.  
Voor het eerst ook eens met een GUI, GitKraken  
https://www.gitkraken.com/
##### SASS
Fan van .sass syntax geeft een veel cleaner code, een klein voorbeeld om dit te ondersteunen.  

De scss syntax.  

```
a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
    }
}
```
De sass syntax

```
a
  color: white
  text-decoration: none
  &:hover
    text-decoration: none
    color: white
```

##### GULP
http://gulpjs.com/  
Als css compiler, volledige controle via een enkel zelf te schrijven file (gulpfile.js)  
Een voorbeeld van een functie, hier het compileren van sass naar css.  
```
gulp.task('sass', function () {
    return gulp.src('sass/styles.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
```
Met de functie gulp move wordt er een build directory aangemaakt met alle nodige files
voor het theme.

Update Gulp naar versie 4

```
function scssTask(){    
    return src(files.scssPath)
        .pipe(prettyError())
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(dest('css')) // css no prefix or minify
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(lineec()) // line ending corrector
        .pipe(dest(distPath.cssDist) // put final CSS in dist folder
    ); 
}
```

### Drupal8 als CMS
Local ontwikkeld in Docker met Docker4Drupal  
https://github.com/wodby/docker4drupal
  
Resultaat https://www.personenvervoerdedierenvriend.be


TODO  
Backstretch binnen halen met bower.
