import { Component } from '@angular/core';
import { AboutMeComponent } from "../../Components/about-me/about-me.component";
import { SoftwareComponent } from "../../Components/software/software.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AboutMeComponent, SoftwareComponent]
})
export class HomeComponent {}
