<script>
    export default {
        data() {
            return {
                name: 'insert name here hello',
                status: false,
                value: 2300, 
            };

        }

    }

</script>


<template>
    <div class="container mt-5 text-center">
    <h1>Bootstrap + Vue</h1>
    <h3>Getting started with Uni Deals & Steals</h3>
    <h4>Was testing things here</h4>
    <div class="btn-group">
      <a href="https://www.youtube.com/watch?v=2mKN6PDZTmc" class="btn btn-primary">CLICK ME!</a>
    </div>

    <h4>{{ name }}</h4>
    <p>{{ value }}</p>
    <p v-if="status">User is active</p>
    <!-- How to make an else if statement <p v-else-if="status">User is active</p> -->
    <p v-else>User is inactive</p>
    <p v-if="value % 2 === 0">Value is even</p>
    <p v-else=>Value is odd</p>
  </div>

  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://snoopn4pnuts.com/cdn/shop/products/halloweenshirt774.jpg?v=1579574780" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://images.squarespace-cdn.com/content/v1/617429993039ec793bfb3450/48781120-96dd-4d21-88a5-1756269b7e5b/MV5BZjBlNGFmN2ItODg1NC00YzQ2LTg5NzAtZDk5NjlhOTc4Njc3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAzOTQ2ODU%40._V1_.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-meme-halloween-1626049701.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Check Bootstrap
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>


</template>