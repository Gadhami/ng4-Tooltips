import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';

import { AppComponent          } from 'app/components/app/app.component';
import { TooltipComponent      } from 'app/components/tooltip/tooltip.component';
import { RelatedDemosComponent } from 'app/components/related-demos/related-demos.component';
import { TopNavComponent       } from 'app/components/top-nav/top-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        TooltipComponent,
        RelatedDemosComponent,
        TopNavComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
