import { Component, inject } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports : [RouterLink]
})
export class HeaderComponent {
  route : Router = inject(Router);
  a(){
    // /projects
    // /courses/projects

    console.log(this.route.url.replace(this.route.url[0],''));
  }
}
