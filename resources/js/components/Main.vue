<template>
    <div>
        <!-- Preloader -->
        <div class="preloader flex-column justify-content-center align-items-center">
            <img
                class="animation__shake"
                src="/assets/dist/img/AdminLTELogo.png"
                alt="AdminLTELogo"
                height="60"
                width="60"
            />
        </div>
        <Navbar />

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
                <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <Footer />

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar.vue";
import Footer from "@/components/partials/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style>
</style>