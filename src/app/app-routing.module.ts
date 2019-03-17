import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeComponent } from "./recipes/recipe.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes" },
  { path: "recipes", component: RecipeComponent },
  { path: "shoping-list", component: ShopingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
