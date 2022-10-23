import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'aboutus',
      component: AboutusComponent
    },
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'testimonials',
      component: TestimonialsComponent
    },
    {
      path: 'blog',
      component: BlogComponent
    },
    {
      path: 'contactus',
      component: ContactusComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
