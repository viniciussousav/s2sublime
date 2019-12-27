import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdutosModule } from './produtos/produtos.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
