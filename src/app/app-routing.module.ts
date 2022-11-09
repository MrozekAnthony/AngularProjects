import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksApiComponent } from './books-api/books-api.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TibiComponent } from './tibi/tibi.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'BooksApi', component: BooksApiComponent,
  },
  {
    path: 'Todo', component: TodoComponent,
  },
  // {
  //   path: 'Tibi', component: TibiComponent,
  // },
  {
    path: '**', component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
