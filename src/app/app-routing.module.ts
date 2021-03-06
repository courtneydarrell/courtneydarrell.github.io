import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";


const routes: Routes = [
    { path: '', component: AuthComponent },
    {
        path: 'logs',
        loadChildren: '~/app/moodlogs/moodlogs.module#MoodlogsModule'

    }
];

@NgModule ({
    imports: [NativeScriptRouterModule.forRoot(routes), ],
    exports: [NativeScriptRouterModule]

})

export class AppRoutingModule {

}
