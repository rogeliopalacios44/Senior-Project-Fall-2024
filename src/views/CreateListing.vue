<script setup>
import {ref, computed} from "vue"
import { supabase } from '../../supabase';
// import { getServiceSupabase } from '../../supabase';

const listing_title = ref('')
const listing_descrip = ref('')
const newBook = ref('')
const newISBN10 = ref()
const newISBN13 = ref('')
const newBookCategory = ref('')
const newAuthor = ref('')
const newBookPrice = ref(0.00)
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
      {book_name: newBook.value, ISBN_10: newISBN10.value, ISBN_13: newISBN13.value,author_names: newAuthor.value, book_price: newBookPrice.value, book_category: newBookCategory.value},
      {book_name: newBook2.value, ISBN_10: newISBN10_2.value, ISBN_13: newISBN13_2.value,author_names: newAuthor2.value, book_price: newBookPrice2.value, book_category: newBookCategory2.value},
      {book_name: newBook3.value, ISBN_10: newISBN10_3.value, ISBN_13: newISBN13_3.value,author_names: newAuthor3.value, book_price: newBookPrice3.value, book_category: newBookCategory3.value}
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
const addListingData = async () => {
  // const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('listings')
    .insert([
      {listing_title: listing_title.value, listing_description: listing_descrip.value}
    ]);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted:', data);
  }
}

const newBook2 = ref('')
const newISBN10_2 = ref()
const newISBN13_2 = ref('')
const newBookCategory2 = ref('')
const newAuthor2 = ref('')
const newBookPrice2 = ref(0.00)
const file2 = ref()
const isVisible = ref(true);
const isVisible2 = ref(true);

const uploadImage2 = async () => {
  if (file2.value) {
    try {
      const { data, error } = await supabase.storage
        .from('book_pictures')
        .upload('your-file-path/' + file2.value.name, file2.value);

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
const handleFileChange2 = (event) => {
  file2.value = event.target.files[0];
};

const clearModels = () => {
  return{
    newBook2: ''
  }
  
}

const newBook3 = ref('')
const newISBN10_3 = ref()
const newISBN13_3 = ref('')
const newBookCategory3 = ref('')
const newAuthor3 = ref('')
const newBookPrice3 = ref(0.00)
const file3 = ref()

const uploadImage3 = async () => {
  if (file3.value) {
    try {
      const { data, error } = await supabase.storage
        .from('book_pictures')
        .upload('your-file-path/' + file3.value.name, file3.value);

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
const handleFileChange3 = (event) => {
  file3.value = event.target.files[0];
};
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
        <!-- Listing Title -->
        <div class="form-group">
          <label for="title">Listing Title</label>
          <input type="text" id="title" v-model="listing_title" placeholder="Enter listing title" required />
        </div>
        <!-- Listing Description -->
        <div class="form-group">
          <label for="title">Listing Description</label>
          <br>
          <textarea style= "width: 560px; height: 200px;"type="text" id="title" v-model="listing_descrip" placeholder="Enter listing description" required />
        </div>
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

        <!-- going to need to figure out how to display form boxes for book info again after add another book button is pressed 
             i was thinking of just using an if statement with the divs above to reshow the book info again at least 3 times, it 
             will look messy but thats one it can work -->
        <button style="margin-top: 25px; margin-bottom: 50px; background-color: #f05023;" @click="isVisible = !isVisible; isVisible ? (newBook2 = '', newAuthor2 = '', newISBN10_2 = null, newISBN13_2 = '', newBookPrice2 = 0.00, newBookCategory2 = '') : null">{{ isVisible ? 'Add another book' : 'Remove Book' }}</button>
        <div v-show="!isVisible">

          <!-- Book Title2 -->
        <div class="form-group">
          <label for="title">Book Title</label>
          <input type="text" id="title" v-model="newBook2" placeholder="Enter book title" required />
        </div>
  
        <!-- Author2 -->
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" id="author" v-model="newAuthor2" placeholder="Enter author name" required />
        </div>

        <!-- ISBN 10 2 -->
        <div class="form-group">
          <label for="author">ISBN-10</label>
          <input type="text" id="isbn10" v-model="newISBN10_2" placeholder="Enter ISBN 10 (optional)"/>
        </div>

        <!-- ISBN 13 2 -->
        <div class="form-group">
          <label for="author">ISBN-13</label>
          <input type="text" id="isbn13" v-model="newISBN13_2" placeholder="Enter ISBN 13" required />
        </div>
  
        <!-- Price2 -->
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="newBookPrice2" placeholder="Enter price" min="0" required />
        </div>
  
        <!-- Category 2-->
        <div class="form-group">
          <label for="category">Category</label>
          <select v-model="newBookCategory2" required>
            <option value="" disabled>Select category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
  
        <!-- Image Upload2 -->
        <div class="form-group">
          <label for="image">Upload Book Image</label>
          <input type="file" @change="handleFileChange2" />
        </div>

        <!-- Button2 -->
        <button style="margin-top: 25px; margin-bottom: 50px; background-color: #f05023;" @click="isVisible2 = !isVisible2; isVisible2 ? (newBook3 = '', newAuthor3 = '', newISBN10_3 = null, newISBN13_3 = '', newBookPrice3 = 0.00, newBookCategory3 = '') : null">{{ isVisible2 ? 'Add another book' : 'Remove Book' }}</button>
        <div v-show="!isVisible2">

          <!-- Book Title3 -->
        <div class="form-group">
          <label for="title">Book Title</label>
          <input type="text" id="title" v-model="newBook3" placeholder="Enter book title" required />
        </div>
  
        <!-- Author3 -->
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" id="author" v-model="newAuthor3" placeholder="Enter author name" required />
        </div>

        <!-- ISBN 10 3 -->
        <div class="form-group">
          <label for="author">ISBN-10</label>
          <input type="text" id="isbn10" v-model="newISBN10_3" placeholder="Enter ISBN 10 (optional)"/>
        </div>

        <!-- ISBN 13 3 -->
        <div class="form-group">
          <label for="author">ISBN-13</label>
          <input type="text" id="isbn13" v-model="newISBN13_3" placeholder="Enter ISBN 13" required />
        </div>
  
        <!-- Price3 -->
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="newBookPrice3" placeholder="Enter price" min="0" required />
        </div>
  
        <!-- Category3 -->
        <div class="form-group">
          <label for="category">Category</label>
          <select v-model="newBookCategory3" required>
            <option value="" disabled>Select category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
  
        <!-- Image Upload3 -->
        <div class="form-group">
          <label for="image">Upload Book Image</label>
          <input type="file" @change="handleFileChange3" />
        </div>
        </div>
      </div>
  
        <!-- Submit Button -->
        <button @click="addData(); uploadImage(); addListingData(); uploadImage2(); uploadImage3();">Submit</button>
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