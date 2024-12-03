<script>
    export default {
        data() {
            return {
                // comment to test githubs branch ruleset
                // dont know how to get data from home.vue so just hard coded it for now
                title1: 'Calculus Book (this is hard coded but will be imported from the database)',
                value1: '19.99  (also hard coded but will be imported from the database as well)'
            };
        }
    }


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
              <a class="nav-link" href="http://localhost:3000/anotherView">Something else?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <div class="btn-group">
      <a href="http://localhost:3000/signup" class="btn btn-dark">Sign Up / Sign In</a>
    </div>
        <div class="input-group-append">
          <button class="btn btn-outline-dark" type="submit" style="background-color: #cc0000; max-width: 140px;float: right;margin-left: 15px">Delete Listing</button>
          <button class="btn btn-outline-dark" type="submit" style="background-color: #f05023; max-width: 140px;float: right;">Edit Listing</button>
        </div>
    <br>
    <br>

    <div class="container-sm" style="display: flex;justify-content: space-evenly;max-width: 1150px;">
        <figure class="figure" style="width: 450px;border-style: solid;border-width: 1px;border-radius: 8px;">
          <!-- importing the book img from the database here  -->
            <img src="https://m.media-amazon.com/images/I/61LYUuJD5SL._AC_UF1000,1000_QL80_.jpg" class="figure-img img-fluid rounded"> 
        </figure>
        <div class="container" style="border-style: solid; max-width: 500px;display: flex;justify-content: center;">
            <ul>
                <h3>
                  <!-- importing book_title and book_price from database here  -->
                    {{ title1 }} ${{ value1 }}
                </h3>
                <br>
                <div>
                  <!-- importing listing_description here  -->
                    I have this book here that I will be no longer needing since I already took this course. (This is a hard coded description will import from database soon)
                </div>
                <br>
                <li>
                  <!-- maybe adding a condition to the database as well or just give the user a checkbox option here
                       and displaying the value of it here  -->
                    Condition: Used (Also hard coded)
                </li>
                <br>
                <dt>
                  <!-- importing contact info from the user table from database here  -->
                    Contact Info: Example Person, exampleperson@utrgv.edu, 956-232-4242 (optional phone number)
                    You Guessed it, hard coded :D
                </dt>
                <br>
            </ul>
        </div>
    </div>
    <!-- adding a map of the UTRGV (Edinburg Campus) here as a general meeting spot for on campus meetings
         users can discuss amongst themselves where it is they want to meet on campus -->
  <div class="container">
  <section class="mx-auto my-5" style="max-width: 23rem;">
    <div class="card map-card">
      <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5650012733713!2d-98.17401580000002!3d26.308198299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a24b15a78c4d%3A0x2cdc1bf01639f10c!2sThe%20University%20of%20Texas%20Rio%20Grande%20Valley!5e0!3m2!1sen!2sus!4v1729028705558!5m2!1sen!2sus" width="600" height="450" style="border:0;"loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="card-body closed px-0">
        <div class="button px-2 mt-3">
          <a data-mdb-ripple-init class="btn btn-floating btn-lg living-coral text-white float-end"
            style="margin-right: .75rem;"><i class="fas fa-bicycle"></i></a>
        </div>
        <div class="bg-white px-4 pb-4 pt-3-5">
          <h5 class="card-title h5 living-coral-text">University of Texas Rio Grande Valley (Edinburg Campus)</h5>
          <div class="d-flex justify-content-between living-coral-text">
            <h6 class="card-subtitle font-weight-light">A public university</h6>
          </div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row" class="px-0 pb-3 pt-2">
                  <i class="fas fa-map-marker-alt living-coral-text"></i>
                </th>
                <td class="pb-3 pt-2">1201 W University Dr, Edinburg, TX 78539</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</div>

    
</template>