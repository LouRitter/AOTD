(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs': 'npm:@reactivex/rxjs/dist/cjs',   
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',   
      'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript': 'npm:typescript@2.0.3/lib/typescript.js',
      'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
       'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
       'moment': 'node_modules/moment',
       'ng2-bootstrap':'node_modules/ng2-bootstrap',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        main: 'Rx.js',
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        defaultExtension: 'js'
      },
      'angular2-jwt': {
          defaultExtension: 'js'
      }
    }
  });
})(this);