<script>
    export default {
        data() {
            return {
                name1: 'Dummy Book',
                name2: 'Business Book',
                name3: 'Database Book',
                name4: 'Psychology Book',
                name5: 'Vue Book',
                name6: 'Calculus Book',
                name7: 'Literature Book',
                name8: 'Java Book',
                status: false,
                value1: 19.99, 
                value2: 39.99,
                value3: 49.99,
                value4: 18.99,
                value5: 45.99,
                value6: 29.99,
                value7: 24.99,
                value8: 35.99,
            };

        }

    }

</script>


<template>
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

  <div class="btn-group">
    <a href="http://localhost:3000/signup" class="btn btn-dark">Login / Register</a>
  </div>
  <div class="searchbar" style="float:inline-end;">
    <div class="input-group mb-3">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-outline-dark" type="submit" style="background-color: #7df4ff;">Search</button>
      </div>
    </div>
  </div>
  <br>
  <br>

  <br>
  <div class="container-md" style="display: flex;justify-content: space-evenly;">
      <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="http://localhost:3000/book-1">
      <img src="https://m.media-amazon.com/images/I/81lEZsk5bZL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name1 }} ${{ value1 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://open.umn.edu/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NDQ1NCwicHVyIjoiYmxvYl9pZCJ9fQ==--9afd76bc7e0636daedb59cb16d185fdedb0e3743/Screen%20Shot%202023-01-13%20at%209.56.14%20AM.png" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name2 }} ${{ value2 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://m.media-amazon.com/images/I/61CUat-cJJL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name3 }} ${{ value3 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://cdn11.bigcommerce.com/s-hv5k6k5hxc/images/stencil/800x800/products/727/2580/SPS08SEB__11015.1619566377.jpg?c=1" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name4 }} ${{ value4 }}</figcaption></a>
    </figure>
  </div>

  <br>

  <div class="container-md" style="display: flex;justify-content: space-evenly;">
      <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://m.media-amazon.com/images/I/515z2ZyvdQL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name5 }} ${{ value5 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://m.media-amazon.com/images/I/61LYUuJD5SL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name6 }} ${{ value6 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://m.media-amazon.com/images/I/91mMhZp5jkL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name7 }} ${{ value7 }}</figcaption></a>
    </figure>
    <figure class="figure" style="width: 250px;border-style: solid;border-width: 1px;border-radius: 8px;">
        <a href="https://media.tenor.com/4ssu5o9Myp8AAAAM/lilo-and-stitch-disney.gif">
      <img src="https://m.media-amazon.com/images/I/61nWFMooc8L._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption">{{ name8 }} ${{ value8 }}</figcaption></a>
    </figure>
  </div>



</template>

<style>
  .searchbar {
    width: 450px;
  }

</style>