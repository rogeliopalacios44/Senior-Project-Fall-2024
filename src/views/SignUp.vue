<template>
    <div class="w-100 p-4 d-flex align-items-center justify-content-center"
    style=" height: 750px;">
            <div class="container mt-3 text-start">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
            <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
            <br>
            <button type="button" class="btn btn-primary">Sign Up</button>
            <a href="http://localhost:3000/signin" class="btn btn-link">Sign In</a>
        </div>

    </div>
    
</template>