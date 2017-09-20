import { BrowserModule  } from '@angular/platform-browser';
import { NgModule       } from '@angular/core';
import { FormsModule    } from '@angular/forms';

// Modules
import { TooltipsModule } from 'app/modules/tooltips/tooltips.module';

// Components
import { AppComponent          } from 'app/components/app/app.component';
import { RelatedDemosComponent } from 'app/components/related-demos/related-demos.component';
import { TopNavComponent       } from 'app/components/top-nav/top-nav.component';

// Pipes
import { SafePipe              } from 'app/pipes/safe/safe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        RelatedDemosComponent,
        TopNavComponent,
        SafePipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TooltipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
