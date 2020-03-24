import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposSearchComponent } from './repos-search/repos-search.component';


@NgModule({
  declarations: [ReposComponent, ReposListComponent, ReposSearchComponent],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
