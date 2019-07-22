import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HanadComponent } from './Hanad.component';
import { HanadRoutingModule } from './Hanad-routing.module';

@NgModule({
    imports: [
        FormsModule,
        HanadRoutingModule

    ],
    declarations: [ HanadComponent ]
})
export class HanadModule { }