<<template>
  <div>
    <!-- Navigation bar and search section -->
    <nav class="navbar navbar-expand-lg" style="background-color: #7df4ff;">
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
              <a class="nav-link" href="#">Supplies</a>
            </li>
            <li>
              <a class="nav-link" href="http://localhost:3000/anotherView">Something else?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="marketplace">
      <!-- Sidebar with filters -->
      <div class="sidebar">
        <h2><!--TITLE OR ANYTHING CAN GO HERE--></h2>
        <div class="categories">
          <h3>Categories</h3>
          <ul>
            <li v-for="category in categories" :key="category">
              <label>
                <input type="checkbox" v-model="selectedCategories" :value="category" @change="applyFilter" />
                {{ category }}
              </label>
            </li>
          </ul>

          <!-- Price Filter with Min and Max inputs -->
          <div class="price-filter">
            <h3>Price</h3>
            <div class="price-inputs">
              <input type="number" v-model="minPriceInput" @input="applyFilter" placeholder="Min" />
              <span class="price-separator">to</span>
              <input type="number" v-model="maxPriceInput" @input="applyFilter" placeholder="Max" />
            </div>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="content">
        <!-- Search bar -->
        <div class="top-bar">
          <div class="search-bar">
            <input v-model="searchQuery" @input="applyFilter" placeholder="Search by book title" />
          </div>
          <div class="auth-buttons">
            <a href="http://localhost:3000/signup" class="btn btn-dark">Login / Register</a>
          </div>
        </div>

        <!-- Book listings with filtering -->
        <div class="item-list">
          <figure v-for="book in filteredBooks" :key="book.id" class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
            <a :href="'http://localhost:3000/book-' + book.id">
              <img :src="book.image" class="figure-img img-fluid rounded">
              <figcaption class="figure-caption">{{ book.title }} ${{ book.price }}</figcaption>
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data from both code snippets merged
      categories: ["Math", "Science", "Literature", "History", "Economics", "Business", "Psychology", "Technology"],
      selectedCategories: [],
      searchQuery: "",
      minPriceInput: 0,
      maxPriceInput: 100,
      books: [
        { id: 1, title: "Calculus 101", image: "https://m.media-amazon.com/images/I/61LYUuJD5SL._AC_UF1000,1000_QL80_.jpg", price: 50, category: "Math" },
        { id: 2, title: "Physics for Engineers", image: "https://m.media-amazon.com/images/I/61CUat-cJJL._AC_UF1000,1000_QL80_.jpg", price: 75, category: "Science" },
        { id: 3, title: "American Literature", image: "https://m.media-amazon.com/images/I/81lEZsk5bZL._AC_UF1000,1000_QL80_.jpg", price: 45, category: "Literature" },
        { id: 4, title: "Business Essentials", image: "https://cdn11.bigcommerce.com/s-hv5k6k5hxc/images/stencil/800x800/products/727/2580/SPS08SEB__11015.1619566377.jpg?c=1", price: 39.99, category: "Business" },
        { id: 5, title: "Psychology Basics", image: "https://m.media-amazon.com/images/I/515z2ZyvdQL._AC_UF1000,1000_QL80_.jpg", price: 18.99, category: "Psychology" },
        { id: 6, title: "Vue.js Guide", image: "https://m.media-amazon.com/images/I/61nWFMooc8L._AC_UF1000,1000_QL80_.jpg", price: 45.99, category: "Technology" },
      ],
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        const matchesCategory = !this.selectedCategories.length || this.selectedCategories.includes(book.category);
        const matchesPrice = book.price >= this.minPriceInput && book.price <= this.maxPriceInput;
        const matchesSearch = book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
      });
    }
  },
  methods: {
    applyFilter() {
      this.filteredBooks;
    },
  }
};
</script>

<style>
/* Sidebar styles */
.marketplace {
  display: flex;
}

.sidebar {
  width: 20%;
  padding: 20px;
  background-color: #f0f0f0;
}

.categories ul {
  list-style-type: none;
  padding: 0;
}

.categories ul li {
  margin-bottom: 10px;
}

.price-filter {
  margin-top: 20px;
}

/* Content and layout */
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

.search-bar input {
  width: 80%;
  padding: 10px;
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.figure {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.figure-caption {
  margin-top: 10px;
}

</style>