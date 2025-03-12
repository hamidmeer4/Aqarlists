import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserService } from 'src/app/services/user.service';
import { Role, User } from 'src/app/Model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  selectedButton: string = 'individuals';
  allUsers:User[] = [];
  roles!: Role[];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  selectButton(buttonType: string): void {
    this.selectedButton = buttonType;
  }

  constructor (public dialog: MatDialog, private userService: UserService){ }

  ngOnInit(): void {  
    this.userService.getAllUser().subscribe(resp => {
      this.allUsers = resp;
      const usersWithIndex = resp?.map((user, i) => ({
        ...user,
        index: i + 1, 
      }));
        this.userService.getAllRoles().subscribe((resp: Role[]) => {
            this.roles = resp;
          })
      this.dataSource = new MatTableDataSource<User>(usersWithIndex);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  openDialog() {
    this.dialog.open(EditUserComponent, {
      panelClass: 'custom-dialog-width'
    });
  }

  displayedColumns: string[] = [
    'index',
    'name',
    'emailAddress',
    'roleId',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getRoleName(roleId: number): string {
    const role = this.roles?.find(r => r?.id === roleId);
    return role ? role?.name : 'Unknown';
  }
}

