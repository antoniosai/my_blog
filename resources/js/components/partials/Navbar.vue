<template>
    <div>
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav"></ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Navbar Search -->
                <li class="nav-item">
                    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i class="fas fa-search"></i>
                    </a>
                    <div class="navbar-search-block">
                        <form class="form-inline">
                            <div class="input-group input-group-sm">
                                <input
                                    class="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                    <button
                                        class="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                    >
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img
                    src="https://pbs.twimg.com/profile_images/1156390714877497344/FgKYA8S5_400x400.jpg"
                    alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3"
                    style="opacity: .8"
                />
                <span class="brand-text font-weight-light">antoniosai.id</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar" style="margin-top: 10px">
                <!-- Sidebar user panel (optional) -->

                <!-- SidebarSearch Form -->
                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input
                            class="form-control form-control-sidebar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library-->
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'front.home' }"
                                class="nav-link"
                                :class="{ active: subIsActive('/home') }"
                            >
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>Home</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'front.blog.all' }"
                                class="nav-link"
                                :class="{ active: subIsActive('/blog/all') }"
                            >
                                <i class="nav-icon fas fa-blog"></i>
                                <p>Blog</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-table"></i>
                                <p>
                                    Tables
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="pages/tables/simple.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Simple Tables</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/tables/data.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>DataTables</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/tables/jsgrid.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>jsGrid</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-header">MISCELLANEOUS</li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'front.about_me' }"
                                class="nav-link"
                                :class="{ active: subIsActive('/about_me') }"
                            >
                                <i class="nav-icon fas fa-ellipsis-h"></i>
                                <p>About Me</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                                <i class="nav-icon fas fa-file"></i>
                                <p>Wee</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
export default {
    methods: {
        subIsActive(input) {
            $(".nav-link").removeClass("active");

            const paths = Array.isArray(input) ? input : [input];
            const temp = paths.some((path) => {
                console.log("path => " + this.$route.path.indexOf(path));
                return this.$route.path.indexOf(path) === 0; // current path starts with this path string
            });

            console.log("input " + input + " is " + temp);

            if (temp == true) {
                console.log(input + " adalah " + temp);
                return true;
            } else {
                console.log(input + " adalah " + temp);
                return false;
            }
        },
    },
};
</script>

<style>
</style>