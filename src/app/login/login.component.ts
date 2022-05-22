import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté. (pikachu/pikachu)";
  name: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log();
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "Vous êtes connecté";
    } else {
      this.message = "Identifiant ou mot de passe incorrect";
    }
  }

  login() {
    this.message = "Tentative de connexion en cours...";
    this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if (isLoggedIn) {
        this.router.navigate(["/pokemons"]);
      } else {
        this.password = "";
        this.router.navigate(["/login"]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
