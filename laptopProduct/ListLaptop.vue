<template>
  <Sidebar />
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Laptop Name</th>
            <th>Laptop Description</th>
            <th>Laptop Price</th>
            <th>Laptop Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="laptop in Laptops" :key="laptop._id">
            <td>{{ laptop.name }}</td>
            <td>{{ laptop.description }}</td>
            <td>{{ laptop.price }}</td>
            <td>{{ laptop.image }}</td>
            <td>
              <router-link
                :to="{ name: 'editlaptop', params: { id: laptop._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteLaptop(laptop._id)"
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
      Laptops: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createlaptop";
    axios
      .get(apiURL)
      .then((res) => {
        this.Laptops = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteLaptop(id) {
      let apiURL = `http://localhost:4001/api/delete-laptop/${id}`;
      let indexOfArrayItem = this.Laptops.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Laptops.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
.row {
  width: 100%;
}
</style>
