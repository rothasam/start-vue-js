<template>
    <div class="container">
        <div class="row d-flex">
            <div class="col-4 m-auto d-flex flex-column justify-content-center" style="height: 100vh;">
                <div class="form-wrap">
                    <form action="">
                        <h3 class="fw-bold">Forgot password</h3>
                        <div class="mb-3">
                            <label for="email">Phone number</label>
                            <input type="text" id="email" class="form-control" required>
                        </div>
                        <!-- <div class="d-flex justify-content-between">
                            <RouterLink :to="{name : 'register'}">Register now</RouterLink>
                            <RouterLink :to="{name : 'forgot-pass'}">Forgot passoword</RouterLink>
                        </div> -->
                        <div>
                            <RouterLink :to="{name : 'login'}" class="btn btn-primary d-block mt-3">Next</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>