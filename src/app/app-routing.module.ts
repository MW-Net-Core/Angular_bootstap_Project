import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component'
import { LoginComponent } from 'src/app/login/login.component'
import { TableComponentComponent } from 'src/app/table-component/table-component.component'
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component'



const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Table', component: TableComponentComponent },
  { path: 'Pie-Chart', component: PieChartComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule]


})
export class AppRoutingModule { }
