/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

/* Place component imports */
import { HomeComponent } from './layout/home.component';
import { PlacementComponent } from './components/placement/placement.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place service imports */
import { TopDriversService } from "./services/top-drivers/top-drivers.service";
import { TopConstructorsService } from "./services/top-constructors/top-constructors.service";

/* Place any other imports here */
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    title: 'F1',
    component: HomeComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule.forChild(routes), LoaderComponent, MatButtonModule, MatIconModule, MatTooltipModule, OrdinalNumbersModule],
  declarations: [HomeComponent, PlacementComponent],
  providers: [TopDriversService, TopConstructorsService]
})
export class HomeModule {}
