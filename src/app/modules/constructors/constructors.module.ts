import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './components/constructor/constructor.component';

const routes = [
  { path: '', component: ConstructorsComponent },
  { path: ':id', component: ConstructorComponent }
]

@NgModule({
  declarations: [
    ConstructorsComponent,
    ConstructorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ConstructorsModule { }
