# MicrofrontendAppContent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.
The contents of this app are delivered through the shell microfrontend here https://github.com/coolsurendar/microfrontend-app-shell

# Commands used to generate

1. Generate new application
`ng new microfrontend-app-content`

2. Permanently change port to 4300

`"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "port": 4300
  },`

3. Generate native federation link

`ng add @angular-architects/native-federation --project mfe1 --port 4300 --type remote
`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
