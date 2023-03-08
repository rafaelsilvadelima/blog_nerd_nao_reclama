import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/config/firebase.config';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/home/home.component';
import { ComponentesModule } from './componentes/componentes.module';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireAuthModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      closeButton: true,
      positionClass :'toast-top-center'
    }),
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
