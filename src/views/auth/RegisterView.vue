<template>
    <div class="container">
        <div class="row d-flex">
            <div class="col-4 m-auto d-flex flex-column justify-content-center" style="height: 100vh;">
                <div class="form-wrap animate__animated animate__fadeIn">
                    <form action="">
                        <h3 class="fw-bold">Register</h3>
                        <div class="mb-3">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="text" id="email" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="pass">Password</label>
                            <input type="text" id="pass" class="form-control" required>
                        </div>
                        <RouterLink :to="{name : 'login'}">Login now</RouterLink>
                        <div>
                            <RouterLink :to="{name : 'home'}" class="btn btn-primary d-block mt-3">Register</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
