import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import {routes} from "./app-routing.routes"

// app.config.ts
export const appConfig : ApplicationConfig = {

    providers: [
        provideZoneChangeDetection (
            {
                eventCoalescing: true
                
            }
        ),
        provideRouter( routes)
    ]
  };
  