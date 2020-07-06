import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
    {  path: '', component: HomeComponent },
    {  path: 'home', component: HomeComponent },
    {  path: 'admin', component: AdminComponent },
    {  path: 'auth/login', component: LoginComponent },
    {  path: 'signup', component: RegisterComponent },
    {  path: 'profile', component: ProfileComponent },

    { path: 'quotes', component: QuoteListComponent },
    { path: 'addquote', component: CreateQuoteComponent },
    { path: 'updatequote/:id', component: UpdateQuoteComponent },
    { path: 'quotedetails/:id', component: QuoteDetailsComponent },
    { path: 'users', component: UserListComponent },

    /* { path: '', redirectTo: 'home', pathMatch: 'full' } */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
