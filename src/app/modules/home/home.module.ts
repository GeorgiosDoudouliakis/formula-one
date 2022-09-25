import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TopDriversService } from "./services/top-drivers/top-drivers.service";
import { TopConstructorsService } from "./services/top-constructors/top-constructors.service";
import { HttpClientModule } from "@angular/common/http";
import { PlacementComponent } from './components/placement/placement.component';
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule.forChild(routes), MatButtonModule, MatProgressSpinnerModule, OrdinalNumbersModule],
  declarations: [HomeComponent, PlacementComponent],
  providers: [TopDriversService, TopConstructorsService]
})
export class HomeModule {}
