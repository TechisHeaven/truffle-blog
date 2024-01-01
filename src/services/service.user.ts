import { UserInterface } from "@/types/types.user";

export default class Users {
  private users: UserInterface[];
  constructor() {
    this.users = [];
  }
  createUser(formData: UserInterface) {
    const newUser = { id: this.users.length + 1, ...formData };
    const checkUser = this.users.find((user) => user.email === formData.email);
    if (checkUser) {
      return { error: true, message: "user already exists" };
    }
    this.users.push(newUser);
    return newUser;
  }

  getUserById(userId: number): UserInterface | undefined {
    const userResult = this.users.find((user) => user.id === userId);
    return userResult;
  }

  getAllUsers(): UserInterface[] {
    return this.users;
  }

  updateUserById({ userId, updatedUserData }: any): UserInterface | null {
    const index = this.users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUserData };
      return this.users[index];
    }
    return null;
  }

  deleteUserById(userId: number | string) {
    const index = this.users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      const deletedUser = this.users[index];
      this.users = this.users.filter((user) => user.id !== userId);
      return deletedUser;
    }
    return null;
  }
}
