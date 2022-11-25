import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './Components/NotFoundPage/not-found-page/not-found-page.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { MainComponentComponent } from './main-component/main-component.component';

// const routes: Routes = [
// {path:'products' , component : HomeComponent } ,
// {path :'order' , component : OrderParentComponent},
// { path:'**' , component : NotFoundPageComponent}

// ];

const routes: Routes = [
  {
    path: 'Main', component: MainComponentComponent, children: [
      { path: 'products', component: HomeComponent },
      { path: 'order', component: OrderParentComponent },


    ]
  },
  {
    path: 'Mobile', component: MainComponentComponent, children: [
      { path: 'products', component: HomeComponent },
      { path: 'order', component: OrderParentComponent },


    ]
  },
  { path: '**', component: NotFoundPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
