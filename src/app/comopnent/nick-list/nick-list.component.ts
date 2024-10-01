import { Component, OnInit } from '@angular/core';
import { Nick } from '../../models/nick.module'; // Correct the path to 'nick.module'

@Component({
  selector: 'app-nick-list', // Updated selector
  templateUrl: './nick-list.component.html', // Ensure the template path is correct
  styleUrls: ['./nick-list.component.css']
})
export class NickListComponent implements OnInit {
  users: Nick[] = []; // Store user data
  currentPage: number = 1;
  itemsPerPage: number = 5; // Display 5 records per page
  editingUser: Nick | null = null; // Track user currently being edited
  isFormVisible: boolean = false; // Track form visibility
  searchTerm: string = ''; // Property for search term
  showConfirmationDialog: boolean = false; // Track confirmation dialog visibility
  userIdToDelete: number | null = null; // Track user ID to delete

  constructor() {
    this.users = [
      { id: 1, name: 'user 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', description: 'This task is good', completed: false },
      { id: 2, name: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is good', completed: false },
      { id: 3, name: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is good', completed: false },
      { id: 4, name: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', description: 'This task is good', completed: false },
    ];}

  ngOnInit() {}

  // Show form when "New Task" is clicked and reset editing user
  onNewTask(newUser?: Nick) {
    if (newUser) {
      const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1; // Generate new user ID
      newUser.id = id; // Assign ID to new user
      this.users.push(newUser); // Add user to the list
      this.isFormVisible = false; // Hide form after adding user
    } else {
      this.isFormVisible = true; // Show form when New Task is clicked
      this.editingUser = null; // Reset editing user
      document.body.classList.add('modal-open'); // Blur background when form is open
    }
  }

  onDeleteUser(userId: number) {
    this.userIdToDelete = userId; // Set the user ID to delete
    this.showConfirmationDialog = true; // Show confirmation dialog
  }

  confirmDelete(confirmed: boolean) {
    if (confirmed && this.userIdToDelete !== null) {
      this.users = this.users.filter(user => user.id !== this.userIdToDelete); // Delete user by ID
    }
    this.showConfirmationDialog = false; // Hide confirmation dialog
    this.userIdToDelete = null; // Reset user ID
  }

  onEditUser(user:Nick) {
    this.editingUser = { ...user }; // Set the user to be edited
    this.isFormVisible = true; // Show form for editing
    document.body.classList.add('modal-open'); // Blur background when form is open
  }
  saveUser(updatedUser: Nick) {
    const userId = this.editingUser?.id; // Use optional chaining to get id
    if (userId !== undefined) { // Check if userId is defined
      const index = this.users.findIndex(u => u.id === userId);
      if (index !== -1) {
        this.users[index] = updatedUser; // Update user data
        this.editingUser = null; // Clear editing user
        this.isFormVisible = false; // Hide form after saving
        document.body.classList.remove('modal-open'); // Remove blur when form is closed
      }
    }
  }

  toggleCompletion(user: Nick) {
    user.completed = !user.completed; // Toggle completion status
  }

  onSearch() {
    this.currentPage = 1; // Reset to the first page when searching
  }

  get filteredUsers() {
    return this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      user.status.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  firstPage() {
    this.currentPage = 1; // Go to first page
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  lastPage() {
    this.currentPage = this.totalPages; // Go to last page
  }

  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage); // Calculate total pages based on filtered users
  }

  onRefresh() {
    console.log('Data refreshed!');
  }

  onCancel() {
    this.isFormVisible = false; // Hide form
    document.body.classList.remove('modal-open'); // Remove blur when form is closed
  }
}
