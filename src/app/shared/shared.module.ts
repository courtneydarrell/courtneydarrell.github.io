import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalendarComponent } from "../moodlogs/calendar/calendar.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
//import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular/calendar-directives";


@NgModule({
    imports: [NativeScriptCommonModule,
             NativeScriptRouterModule,
             NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],

    declarations: [ActionBarComponent,
            CalendarComponent,
                  ],

    exports: [ActionBarComponent,
            CalendarComponent,
             ],
    schemas: [
                NO_ERRORS_SCHEMA
            ],
})

export class SharedModule {

}
