<template>
  <Sidebar />
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>TV Name</th>
            <th>TV Description</th>
            <th>TV Price</th>
            <th>TV Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tv in Tvs" :key="tv._id">
            <td>{{ tv.name }}</td>
            <td>{{ tv.description }}</td>
            <td>{{ tv.price }}</td>
            <td>{{ tv.image }}</td>
            <td>
              <router-link
                :to="{ name: 'edittv', params: { id: tv._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button @click.prevent="deleteTv(tv._id)" class="btn btn-danger">
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
      Tvs: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createtv";
    axios
      .get(apiURL)
      .then((res) => {
        this.Tvs = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteTv(id) {
      let apiURL = `http://localhost:4001/api/delete-tv/${id}`;
      let indexOfArrayItem = this.Tvs.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Tvs.splice(indexOfArrayItem, 1);
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
