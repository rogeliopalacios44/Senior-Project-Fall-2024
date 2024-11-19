<template>
    <div class="create-listing-page">
      <!-- Back Button -->
      <a href="https://uni-deals-and-steals.onrender.com/"  class="small-back-button" @click="goBackToHome">BACK</a>
  
      <h2>Create Listing</h2>
  
      <form @submit.prevent="createListing">
        <!-- Book Title -->
        <div class="form-group">
          <label for="title">Book Title</label>
          <input type="text" id="title" v-model="newBook.title" placeholder="Enter book title" required />
        </div>
  
        <!-- Author -->
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" id="author" v-model="newBook.author" placeholder="Enter author name" required />
        </div>
  
        <!-- Price -->
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="newBook.price" placeholder="Enter price" min="0" required />
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
          <select v-model="newBook.category" required>
            <option value="" disabled>Select category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
  
        <!-- Image Upload -->
        <div class="form-group">
          <label for="image">Upload Book Image</label>
          <input type="file" id="image" @change="handleImageUpload" accept="image/*" />
        </div>
  
        <!-- Submit Button -->
        <a href="https://uni-deals-and-steals.onrender.com/" class="btn btn-dark" type="submit">Create Listing</a>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newBook: {
          title: "",
          author: "",
          price: null,
          location: "",
          category: "",
          image: null
        },
        categories: ["Math", "Science", "Literature", "History", "Economics"],
      };
    },
    methods: {
      goBackToHome() {
        this.$router.push({ name: 'home' });
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.newBook.image = file;
        }
      },
      createListing() {
        console.log("New book listing data:", this.newBook);
        alert("Listing created (for testing purposes only, this does not save yet).");
  
        // Clear the form after submission
        this.newBook = {
          title: "",
          author: "",
          price: null,
          location: "",
          category: "",
          image: null
        };
      }
    }
  };
  </script>
  
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