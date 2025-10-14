import { Component, signal } from '@angular/core';
import Signin from './signin/signin';
import Signup from './signup/signup';

@Component({
  selector: 'app-auth',
  imports: [Signin, Signup],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export default class Auth {

  showFormSignin = signal<boolean>(true)
  sliding = signal<boolean>(false)

  changeForm = () => {
    this.sliding.set(true)
    setTimeout(()=>{
      this.showFormSignin.update((t)=>!t)
      this.sliding.set(false)
    },1600)

  };
}
