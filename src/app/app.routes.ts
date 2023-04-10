import { Routes } from '@angular/router'
import { DataBindingComponent } from './demos/data-binding/data-binding.component'
import { ContatoComponent } from './institucional/contato/contato.component'
import { SobreComponent } from './institucional/sobre/sobre.component'
import { HomeComponent } from './navegacao/inicio/home.component'
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component'

export const rootRouterConfig: Routes = [
    //em caso de / ele redireciona para home
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    //aqui ele coloca uma rota na home
    { path: 'inicio', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'app-data-binding', component: DataBindingComponent},
    { path: 'produtos', component: ListaProdutoComponent },
    //id é o parametro
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent },


    //pathmatch
    //ele rediciona logo para site.com/home sem nenhum antes ex: site.com/teste/editar/home
]