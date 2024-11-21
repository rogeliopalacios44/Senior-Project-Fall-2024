<script setup>
import { ref } from "vue";
//import { SupabaseClient } from '@supabase/supabase-js';
//import { reactive } from 'vue';
//import { supabase} from ".supabase"
//import router from "@/router";
import router from "../router/index"
//import { supabase } from ".supabase"
//exampleFormControlInput1, passwordHelpBlock
import { supabase } from "../../supabase";


const email = ref("");
const password = ref("");

const singUP = async () => {
  try{
    console.log("click")
      const {error} = await supabase.auth.signUp ({
        email: email.value,
        password: password.value,
    })
    console.log("working")
    if (error) throw error;
    router.push("/signin")
    //alert('Check your email for the login link')
  } catch (error){
    if (error instanceof Error){
      alert(error.message)
    }
  }
};

</script>
<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #f05023;">
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
            <div class="container mt-3 text-start" style="background-color: #f05023;height: 340px;border-radius: 30px;padding-top: 18px;width:750px;">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email">
                </div>
                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="password">
                <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            <br>
            <button type="button" class="btn btn-dark" @click="singUP" style="margin-bottom: 10px;">Register</button>
            <br>
            <button type="button" class="btn btn-dark"><a href="http://localhost:3000/signin">Sign In</a></button>
        </div>

    </div>
    
    
</template>