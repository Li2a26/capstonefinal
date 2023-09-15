<template>
  <div>
    <div class="body mx-3" v-if="users">
      <div class="row table-container">
        <div class="col-12">
          <h1>USERS</h1>
          <button class="addu">
            <router-link to="/admin/add/user" class="bb"> Add User </router-link>
          </button>
        </div>
        <div class="col">
          <div class="table-responsive">
            <table class="table is-striped is-bordered mt-2 is-fullwidth text-align-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>SURNAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>DELETE/EDIT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userID" class="boredom">
                  <td>{{ user.userID }}</td>
                  <td><img class="tableImg" :src="user.profileUrl" alt="" /></td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.userRole }}</td>
                  <td>
                    <button
                      type="submit"
                      class="btn btton"
                      @click="deleteUser(user.userID)"
                      id="delete-row"
                    >
                      🗑️
                    </button>
                    <button
                      type="submit"
                      class="btn btton"
                      @click="editUser(user.userID)"
                      id="edit-row"
                    >
                      ✏️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center mb-3">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  props: ["users"],
  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  mounted() {
    this.$store.dispatch("getUsers");
  },

  methods: {
    async deleteUser(userID) {
      const success = await this.$store.dispatch("deleteUser", userID);

      if (success) {
        // Update the user list in your component if needed.
        this.$store.dispatch("getUsers"); // You can dispatch this if you need to refresh the user list.
      } else {
        alert("Failed to delete USER. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.tableImg {
  width: 120px;
  height: auto;
}
.addu {
  background-color: #d914e7;
  border-radius: 20px;
  color: black !important;
}
.addu:hover {
  background-color: pink;
}
.bb {
  color: black;
}
.btn {
  border-radius: 20px;
}

/* Style the table with pink borders and light purple background */
table.table {
  border: 2px solid pink;
  background-color: #f0e1f8; /* Light purple */
}

/* Style table header */
table.table thead {
  background-color: pink;
  color: white;
}

/* Add spaces at the sides of the table container */
.table-container {
  padding-left: 15px;
  padding-right: 15px;
}

.loader {
  border: 7px solid #fff9e4; /* Light grey */
  border-top: 7px solid #e587ec; /* Blue */
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 2s linear infinite;
}

@media screen and (max-width: 576px) {
  /* Apply responsive styles for small screens here */
  .table-container {
    overflow-x: auto; /* Enable horizontal scrolling on small screens */
  }

  /* Make table borders pink */
  table.table {
    border: 2px solid pink;
  }

  /* Style table header */
  table.table thead {
    background-color: pink;
    color: white;
  }
}
</style>

