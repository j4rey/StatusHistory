# StatusHistory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Concepts implemented / Key takeaway

### 1. Content Projection: 
Where you pass any section of html to be rendered(projected) inside another (parent) component.

### 2. Understanding difference between ViewInit and ContentInit : Angular lifecycle hooks
ViewInit is when the host component's view is initialized. ContentInit is when the content of the component is initilized. This is when you can hook up to the content elements, which would otherwise be undefined.

### 3. Understanding async pipe
Forget subscribe & unsubscribing and keeping count of all the Subscriptions.

### 4. Keeping your component dumb
Though not always possible keep the logic on service and keep component dumb. 

### 5. Leveraging polymorphism
The basic programming concepts of interface, abstract class, polymorphism, class inheritance applies here too.

### 6. Custom pipes
creating custom pipe for custom value rendering evaluation.

### 8. More pipes: [Learn Rxjs](https://www.learnrxjs.io/)
Leverage rxjs operators e.g., map, switchMap.

### 8. Reactive forms
creating reactive form, updating form validations, hooking up with valueChanges, resetting the form.

## Further help
To learn more visit [Angular.io](https://angular.io/)

