<template>
    <div>
      <div v-if="users">
        <div class="row table">
          <div class="col-12">
            <h1>Users</h1>
          </div>
          <div class="col">
            <table class="table is-striped is-bordered mt-2 is-fullwidth array-lists">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Edit/Delete</th>
                  <th>View Profile</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userID" class="bord">
                  <td>{{ user.userID }}</td>
                  <td><img class="tableImg" :src="user.userProfile" alt="" /></td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.userRole }}</td>
                  <td>
                    <button>
                      <!-- <router-link :to="{ name: 'admin edit user', params: { id : user.userID } }"> Edit </router-link> -->
                    </button>
                  </td>
                  <td>
                    <button>
                      <router-link :to="{ name: 'user', params: { id: user.userID } }"> View </router-link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <loading-spinner v-else />
    </div>
  </template>
  
  <script>
  
//   import axios from 'axios'
  
  import LoadingSpinner from '@/components/LoadingSpinner.vue';

  export default {
      // props: ["users"],
      computed: {
          users() {
              return this.$store.state.users
          }
      },
  
      mounted() {
          this.$store.dispatch("getUsers")
      },
  
  
      components: { LoadingSpinner},
  }
  </script>
  <style>
  
  .tableImg {
      width: 120px;
      height: auto;
  }
  
  </style>