<template>
  <div>
      <!-- Navigation bar -->
      <nav class="navbar navbar-expand-lg" style="background-color: #f05023;">
          <div class="container-fluid">
              <a class="navbar-brand" href="/">University Marketplace</a>
              <button class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarText"
                      aria-controls="navbarText"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Field of Study</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/account">Supplies</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

      <div class="marketplace">
          <!-- Sidebar with filters -->
          <div class="sidebar">
              <h2>Filters</h2>
              <div class="categories">
                  <h3>Categories</h3>
                  <ul>
                      <li v-for="category in categories" :key="category">
                          <label>
                              <input type="checkbox"
                                     v-model="selectedCategories"
                                     :value="category"
                                     @change="filterBooks" />
                              {{ category }}
                          </label>
                      </li>
                  </ul>
              </div>

              <!-- Price Filter -->
              <div class="price-filter">
                  <h3>Price</h3>
                  <div class="price-inputs">
                      <input type="number"
                             v-model="minPrice"
                             @input="filterBooks"
                             placeholder="Min" />
                      <span class="price-separator">to</span>
                      <input type="number"
                             v-model="maxPrice"
                             @input="filterBooks"
                             placeholder="Max" />
                  </div>
              </div>

              <!-- Create Listing button -->
              <div class="create-button">
                  <a type="button" class="btn btn-dark" href="http://localhost:3000/createlisting">Create Listing</a>
              </div>
          </div>

          <!-- Main content area -->
          <div class="content">
              <!-- Search bar -->
              <div class="top-bar">
                  <div class="search-bar">
                      <input v-model="searchQuery"
                             @input="searchBooks"
                             placeholder="Search by book title" />
                  </div>
                  <div class="auth-buttons">
                      <a href="http://localhost:3000/signup" class="btn btn-dark">Login / Register</a>
                  </div>
              </div>

              <!-- Book listings -->
              <div class="item-list">
                  <figure v-for="book in paginatedBooks"
                          :key="book.book_id"
                          class="figure"
                          style="width: 250px; border: 1px solid #ccc; border-radius: 8px; padding: 10px; text-align: center;"
                          @click="goToBookDetails(book.book_id)">
                      <img :src="book.book_img" class="figure-img img-fluid rounded" />
                      <figcaption class="figure-caption">
                          {{ book.book_name }} - ${{ book.book_price.toFixed(2) }}
                      </figcaption>
                  </figure>
              </div>

              <!-- Pagination -->
              <div class="pagination">
                  <div class="page-number">
                      Page {{ currentPage }}
                  </div>
                  <div class="arrow-buttons">
                      <button class="btn btn-sm btn-secondary"
                              @click="previousPage"
                              :disabled="currentPage === 1">
                          ←
                      </button>
                      <button class="btn btn-sm btn-secondary"
                              @click="nextPage"
                              :disabled="currentPage * booksPerPage >= filteredBooks.length">
                          →
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import { createClient } from "@supabase/supabase-js";

  const supabaseUrl = "https://rkihgxoyygkqodjbrvxw.supabase.co";
  const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJraWhneG95eWdrcW9kamJydnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NjU3ODgsImV4cCI6MjA0NTE0MTc4OH0.fNBZJNb_kq0f-z_zGv1GEfmhL0ciJY5AG8JHMeQgxRE";
  const supabase = createClient(supabaseUrl, supabaseKey);

  export default {
      data() {
          return {
              books: [],
              filteredBooks: [],
              categories: ["Math", "Science", "Literature", "History", "Economics", "Technology"],
              selectedCategories: [],
              searchQuery: "",
              minPrice: "",
              maxPrice: "",
              currentPage: 1,
              booksPerPage: 20,
          };
      },
      computed: {
          paginatedBooks() {
              const start = (this.currentPage - 1) * this.booksPerPage;
              const end = start + this.booksPerPage;
              return this.filteredBooks.slice(start, end);
          },
      },
      methods: {
          async fetchBooks() {
              const { data, error } = await supabase
                  .from("books")
                  .select(
                      "book_id, book_name, book_category, author_names, book_img, book_price"
                  )
                  .order("book_id", { ascending: false });
              if (error) console.error(error);
              else this.books = this.filteredBooks = data;
          },
          filterBooks() {
              this.filteredBooks = this.books.filter((book) => {
                  const matchesCategory =
                      !this.selectedCategories.length ||
                      this.selectedCategories.includes(book.book_category);
                  const matchesPrice =
                      (!this.minPrice || book.book_price >= this.minPrice) &&
                      (!this.maxPrice || book.book_price <= this.maxPrice);
                  const matchesSearch =
                      !this.searchQuery ||
                      book.book_name.toLowerCase().includes(this.searchQuery.toLowerCase());
                  return matchesCategory && matchesPrice && matchesSearch;
              });
              this.currentPage = 1;
          },
          searchBooks() {
              this.filterBooks();
          },
          goToCreateListing() {
              this.$router.push({ name: "create-listing" });
          },
          goToLogin() {
              this.$router.push({ name: "login" });
          },
          goToBookDetails(bookId) {
              this.$router.push({ name: "book-details", params: { id: bookId } });
          },
          nextPage() {
              this.currentPage++;
          },
          previousPage() {
              this.currentPage--;
          },
      },
      async created() {
          await this.fetchBooks();
      },
  };
</script>

<style>
  .marketplace {
      display: flex;
  }

  .sidebar {
      width: 20%;
      padding: 20px;
      background-color: #f0f0f0;
  }

  .price-filter {
      margin-bottom: 20px;
  }

  .create-button {
      text-align: center;
      margin-top: 20px;
  }

  .content {
      width: 80%;
      padding: 20px;
  }

  .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px; 
  }

  .item-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: 20px; 
  }

  .pagination {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
  }


  .page-number {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px; 
  }

  .arrow-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
  }

      .arrow-buttons button {
          padding: 10px;
          font-size: 18px;
          background-color: #f0f0f0;
          border: none;
          border-radius: 5px;
          cursor: pointer;
      }

          .arrow-buttons button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }
</style>