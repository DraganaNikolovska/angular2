import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div style="margin-left: 10%">
            <h1>{{pageTitle}}</h1>
            <p>This is my first component</p>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle : string = 'Acme Product Management';
}
