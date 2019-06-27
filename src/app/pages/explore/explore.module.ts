import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExplorePage } from './explore.page';
import { TranslateModule } from '@ngx-translate/core';
import { ExploreService } from './providers/explore.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageEffect } from 'src/app/state/effects/LocalStorageEffect';
import { appReducer } from 'src/app/state/reducers/app.reducer';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  }  
];

@NgModule({
  imports: [CommonModule,
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    TranslateModule,
    StoreModule.forFeature('appState', appReducer),
    EffectsModule.forFeature([LocalStorageEffect])
  ],
  declarations: [ExplorePage],
  providers: [ExploreService]
})
export class ExplorePageModule {}
