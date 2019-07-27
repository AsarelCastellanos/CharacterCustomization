import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'build', pathMatch: 'full' },
  { path: 'build', loadChildren: './build/build.module#BuildPageModule' },
  { path: 'display', loadChildren: './display/display.module#DisplayPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
