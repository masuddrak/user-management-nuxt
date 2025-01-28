import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as Array<{
      id: number;
      name: string;
      email: string;
      gender: string;
      married: boolean;
      role: string;
    }>,
  }),

  actions: {
    addUser(user: any) {
      user.id = this.users.length + 1;
      this.users.push(user);
    },
    updateUser(updatedUser: any) {
      const index = this.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    },
  },
});
