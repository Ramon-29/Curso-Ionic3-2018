import { Routes } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component'; 
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent  },
    { path: 'books', component: BooksComponent  },
    { path: 'books/:id', component: BookDetailsComponent},
    { path: '**', redirectTo: 'home' }
];
