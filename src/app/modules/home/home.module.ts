/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

/* Place component imports */
import { HomeComponent } from './pages/home/home.component';
import { PlacementComponent } from './components/placement/placement.component';

/* Place service imports */
import { TopDriversService } from "./services/top-drivers/top-drivers.service";
import { TopConstructorsService } from "./services/top-constructors/top-constructors.service";

/* Place any other imports here */
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { LoaderModule } from "@shared/modules";

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule.forChild(routes), LoaderModule, MatButtonModule, OrdinalNumbersModule],
  declarations: [HomeComponent, PlacementComponent],
  providers: [TopDriversService, TopConstructorsService]
})
export class HomeModule {}
