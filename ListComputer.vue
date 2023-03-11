<template>
  <Sidebar />
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Computer Name</th>
            <th>Computer Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="computer in Computers" :key="computer._id">
            <td>{{ computer.name }}</td>
            <td>{{ computer.description }}</td>
            <td>{{ computer.price }}</td>
            <td>{{ computer.image }}</td>
            <td>
              <router-link
                :to="{ name: 'editcomputer', params: { id: computer._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteComputer(computer._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
import axios from "axios";
export default {
  components: { Sidebar },
  data() {
    return {
      Computers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createcomputer";
    axios
      .get(apiURL)
      .then((res) => {
        this.Computers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteComputer(id) {
      let apiURL = `http://localhost:4001/api/delete-computer/${id}`;
      let indexOfArrayItem = this.Computers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Computers.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.btn-success {
  margin-right: 10px;
}
.row {
  width: 100%;
}
</style>
<style scoped>
.row {
  width: 100%;
}
</style>
