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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedButton: string = 'all';
  allUsers: User[] = [];
  filteredUsers: User[] = []
  roles!: Role[];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
 
  ) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((resp) => {
      this.allUsers = resp;
      const usersWithIndex = resp?.map((user, i) => ({
        ...user,
        index: i + 1,
      }));
      this.userService.getAllRoles().subscribe((resp: Role[]) => {
        this.roles = resp;
      });
      this.dataSource = new MatTableDataSource<User>(usersWithIndex);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  selectButton(buttonType: string): void {
    this.selectedButton = buttonType;
    if (this.selectedButton === 'all') {
      this.filteredUsers = this.allUsers;
      this.setDataSource(this.filteredUsers);
    } else if (this.selectedButton === 'seller') {
      this.filteredUsers = this.allUsers.filter(
        (user) => user.roleId === 1
      );
      this.setDataSource(this.filteredUsers);
    } else {
      this.filteredUsers = this.allUsers.filter(
        (user) => user.roleId === 2
      );
      this.setDataSource(this.filteredUsers);
    }
  }

  setDataSource(users: User[]): void {
    this.dataSource = new MatTableDataSource<User>(this.addIndexToUsers(users));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addIndexToUsers(users: any[]) {
    return users?.map((user, i) => ({
      ...user,
      index: i + 1,
    }));
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '400px',
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = this.dataSource.data.filter(
          (user) => user.emailAddress !== result.emailAddress
        );
        this.dataSource.data = updatedData;
      }
    });
  }

  displayedColumns: string[] = [
    'index',
    'name',
    'emailAddress',
    'roleId',
    'actions',
  ];

  getRoleName(roleId: number): string {
    const role = this.roles?.find((r) => r?.id === roleId);
    return role ? role?.name : 'Unknown';
  }
}
