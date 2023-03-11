<template>
  <Sidebar />
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Phone Name</th>
            <th>Phone Description</th>
            <th>Phone Price</th>
            <th>Phone Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="phone in Phones" :key="phone._id">
            <td>{{ phone.name }}</td>
            <td>{{ phone.description }}</td>
            <td>{{ phone.price }}</td>
            <td>{{ phone.image }}</td>
            <td>
              <router-link
                :to="{ name: 'editphone', params: { id: phone._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deletePhone(phone._id)"
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
      Phones: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createphone";
    axios
      .get(apiURL)
      .then((res) => {
        this.Phones = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deletePhone(id) {
      let apiURL = `http://localhost:4001/api/delete-phone/${id}`;
      let indexOfArrayItem = this.Phones.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Phones.splice(indexOfArrayItem, 1);
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
