<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">{{ title }}</h1>
                    <span>{{ sub_title }}</span>
                </div>
                <!-- /.col -->
                <div class="col-sm-6">
                    <Breadcrumb :breadcrumb="breadcrumb" />
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
</template>

<script>
import Breadcrumb from "@/components/partials/Breadcrumb.vue";

export default {
    props: ["title", "sub_title", "breadcrumb"],

    components: {
        Breadcrumb,
    },
};
</script>

<style>
</style>