import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposSearchComponent } from './repos-search/repos-search.component';
import { ReposListItemComponent } from './repos-list/repos-list-item/repos-list-item.component';


@NgModule({
  declarations: [ReposComponent, ReposListComponent, ReposSearchComponent, ReposListItemComponent],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
