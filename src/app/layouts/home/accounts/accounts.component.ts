import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  isModalOpen:boolean = false;
  loggedinUser = {};
  user: SocialUser;
  loggedIn: boolean;
  fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true
  };
  config = [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("339079519938398", this.fbLoginOptions)
    }
  ];

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log("authService called ==> ",user);
      this.user = user;
      this.loggedIn = (user != null);
      this.loggedinUser = user;
    });
  }

  connectSocialNetwork(ntwType) {
    if(ntwType == 'twitter') {
      console.log("twitter condition");
    }
    if(ntwType == 'facebook') {
      console.log("Facebook Condition");
      this.signInWithFB();
    }
    if(ntwType == 'insta') {
      this.signInWithInsta();
    }
  }

  signInWithFB(): void {
    console.log("signInWithFB() called");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, this.fbLoginOptions);
  }

  signOut(): void {
    this.authService.signOut();
  }

  signInWithInsta() {
    //window.open("https://api.instagram.com/oauth/authorize/?client_id=425123406125187&redirect_uri=http://localhost:4200&response_type=code", "_blank", "height=580,width=720");
    window.open("https://api.instagram.com/oauth/authorize?app_id=425123406125187&redirect_uri=https://socialsizzle.herokuapp.com/auth/&scope=user_profile,user_media&response_type=code", "_blank", "height=580,width=720");
    
  }
  
}
