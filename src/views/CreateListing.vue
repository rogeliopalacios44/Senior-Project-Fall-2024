<script setup>
import {ref, computed} from "vue"
import { supabase } from '../../supabase';
// import { getServiceSupabase } from '../../supabase';

const newBook = ref('')
const newISBN10 = ref()
const newISBN13 = ref('')
const newBookCategory = ref('')
const newAuthor = ref('')
const newBookPrice = ref()
const file = ref()

const categories = ["Math", "Science", "Literature", "History", "Economics", "Technology"]

const handleFileChange = (event) => {
  file.value = event.target.files[0];
};

const addData = async () => {
  // const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('books')
    .insert([
      {book_name: newBook.value, ISBN_10: newISBN10.value, ISBN_13: newISBN13.value,author_names: newAuthor.value, book_price: newBookPrice.value, book_category: newBookCategory.value}
    ]);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted:', data);
  }
}
const uploadImage = async () => {
  if (file.value) {
    try {
      const { data, error } = await supabase.storage
        .from('book_pictures')
        .upload('your-file-path/' + file.value.name, file.value);

      if (error) {
        console.error('Error uploading image:', error.message);
      } else {
        console.log('Image uploaded successfully:', data);
      }
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  }
}
</script>

<template>
  <!-- Navigation bar and search section -->
  <nav class="navbar navbar-expand-lg" style="background-color: #f05023;">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">Uni Deals & Steals</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Field of Study</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/account">Supplies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <div class="create-listing-page">
      <!-- Back Button -->
      <a href="http://localhost:3000/"  class="small-back-button" @click="goBackToHome">BACK</a>
  
      <h2>Create Listing</h2>
  
      <form @submit.prevent="createListing">
        <!-- Book Title -->
        <div class="form-group">
          <label for="title">Book Title</label>
          <input type="text" id="title" v-model="newBook" placeholder="Enter book title" required />
        </div>
  
        <!-- Author -->
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" id="author" v-model="newAuthor" placeholder="Enter author name" required />
        </div>

        <!-- ISBN 10 -->
        <div class="form-group">
          <label for="author">ISBN-10</label>
          <input type="text" id="isbn10" v-model="newISBN10" placeholder="Enter ISBN 10 (optional)"/>
        </div>

        <!-- ISBN 13 -->
        <div class="form-group">
          <label for="author">ISBN-13</label>
          <input type="text" id="isbn13" v-model="newISBN13" placeholder="Enter ISBN 13" required />
        </div>
  
        <!-- Price -->
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="newBookPrice" placeholder="Enter price" min="0" required />
        </div>
  
        <!-- Location 
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" id="location" v-model="newBook.location" placeholder="Enter location" required />
        </div>
        -->
  
        <!-- Category -->
        <div class="form-group">
          <label for="category">Category</label>
          <select v-model="newBookCategory" required>
            <option value="" disabled>Select category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
  
        <!-- Image Upload -->
        <div class="form-group">
          <label for="image">Upload Book Image</label>
          <input type="file" @change="handleFileChange" />
        </div>
  
        <!-- Submit Button -->
        <button @click="addData(); uploadImage()">Submit</button>
      </form>
    </div>
  
</template>
  
  
  
  <style>
  .create-listing-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }
  
  h2 {
    text-align: center;
  }
  
  .small-back-button {
    background-color: #ccc;
    color: #333;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  
  .small-back-button:hover {
    background-color: #bbb;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  select,
  input[type="file"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>