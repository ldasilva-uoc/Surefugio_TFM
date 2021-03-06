import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalModule } from './animales/animal.module';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducers, EffectsArray } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PortadaComponent } from './shared/views/portada/portada.component';
import { HeaderComponent } from './shared/views/header/header.component';
import { ProtectoraModule } from './protectoras/protectora.module';
import { UserModule } from './user/user.module';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { FavoritosComponent } from './profile_particular/componentes/favoritos/favoritos.component';
import { ProfileParticularComponent } from './profile_particular/componentes/profile-particular/profile-particular.component';
import { ProfileProtectoraComponent } from './profile_protectora/componentes/profile-protectora/profile-protectora.component';
import { FooterComponent } from './shared/views/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';






@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    FavoritosComponent,
    ProfileParticularComponent,
    ProfileProtectoraComponent,
    FooterComponent,
 
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AnimalModule,
    ProtectoraModule,
    UserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly:environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
