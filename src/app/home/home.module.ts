 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';

 import { BannerComponent} from './components/banner/banner.component';
 import { HomeComponent} from './components/home/home.component';

 import { HomeRoutinfModule } from './home-routing.module';
 import { SharedModule } from './../shared/shared.module';

 @NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutinfModule,
        SharedModule
    ]
 })
 export class HomeModule {

 }