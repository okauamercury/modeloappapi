import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth } from './services/auth';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'usuario-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then(m => m.UsuarioAddPageModule)
  },

  {
    path: 'cliente-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-add/cliente-add.module').then(m => m.ClienteAddPageModule)
  },
  {
    path: 'usuario-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then(m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then(m => m.UsuarioEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./pages/endereco/endereco.module').then(m => m.EnderecoPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'produto-detalhe/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-detalhe/produto-detalhe.module').then(m => m.ProdutoDetalhePageModule)
  },
  {
    path: 'produto-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-list/produto-list.module').then(m => m.ProdutoListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
