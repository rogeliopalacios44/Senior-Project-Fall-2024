<script setup>
import { ref } from "vue";
import router from "../router/index"
import { supabase } from "../../supabase";


const email = ref("");
const password = ref("");

const singIN = async () => {
  try{
      const {error} = await supabase.auth.signInWithPassword ({
        email: email.value,
        password: password.value,
    })
    if (error) throw error
    router.push("/")
    //alert('Check your email for the login link')
  } catch (error){
    if (error instanceof Error){
      alert(error.message)
      
    }
  }
};

</script>

<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #0a9dc1;">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">Uni Deals & Steals</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#">Field of Study</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Supplies</a>
          </li>
          <li>
            <a class="nav-link" href="#">Something else?</a>
          </li>
        </ul>
      </div>
  </div>
</nav>
    <div class="w-100 p-4 d-flex align-items-center justify-content-center"
    style=" height: 750px;">
    <div class="container mt-3 text-start" style="background-color: #0a9dc1;height: 300px;border-radius: 30px;padding-top: 35px;width:750px;">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" v-model="email">
            </div>
            <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="password">
            <div id="passwordHelpBlock" class="form-text">
            </div>
            <br>
            <button @click="singIN" class="btn btn-dark">Sign In</button>
        </div>
    </div>
</template>