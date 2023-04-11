import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//em caso de rotas tende importar aqui
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule aqui
//Valor de moeda
import { registerLocaleData } from '@angular/common';
import  localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/inicio/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //e aqui
    [RouterModule.forRoot(rootRouterConfig,{useHash: false})]
  ],
  providers: [
    
    ProdutoService,
    //define uma rota pemanente
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
