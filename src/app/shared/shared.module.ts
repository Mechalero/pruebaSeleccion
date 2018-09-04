import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../block/footer/footer.component';
import { NavComponent } from '../block/nav/nav.component';
import { SidebarComponent } from '../block/sidebar/sidebar.component';



@NgModule({
	imports: [
	   CommonModule
	],
    declarations: [
    	FooterComponent,
        NavComponent,
        SidebarComponent,
    ],
    exports: [
        NavComponent,
        SidebarComponent,
        FooterComponent
    ]
})
export class SharedModule { }
