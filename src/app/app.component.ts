import { Component } from '@angular/core';
import { UserModel } from './Models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World zaaaaaaaaaaaaaaaaaaaaa!';
  username = '';
  phoneNumber ;
  userList: UserModel [] = [new UserModel('Ders1',505792),new UserModel('Ders2',505785),new UserModel('Ders3',505649)];
  count = this.userList.length;
  addUsername(username: string, phoneNumber : number){
    this.userList.push(new UserModel(username,phoneNumber));
    this.username = '';
    this.phoneNumber = null;
    this.count++;
  }

}
