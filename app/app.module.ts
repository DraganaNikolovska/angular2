import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductModule} from "./products/product.module";
import {LearningFormsModule} from "./forms/forms.module";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ]),
        ProductModule,
        LearningFormsModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
