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
  userList: UserModel [] = [new UserModel('Ders1'),new UserModel('Ders2'),new UserModel('Ders3')];
  count = this.userList.length;
  addUsername(username: string){
    this.userList.push(new UserModel(username));
    this.username = '';
    this.count++;
  }

}
