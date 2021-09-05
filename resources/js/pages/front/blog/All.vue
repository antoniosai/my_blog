<template>
    <div>
        <Header :title="'Blog / Tutorial Pemrograman'" :sub_title="'Blog Pemrograman'"></Header>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                    <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
                        <div class="card shadow mb-3">
                            <img
                                class="card-img-top"
                                :src="blog.img_thumbnail"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h4 class="mb-2 blog-title">
                                    <a href="#">{{ blog.title }}</a>
                                </h4>

                                <p class="card-text" v-html="blog.text_thumbnail"></p>
                                <p class="card-text"></p>
                                <div>
                                    <span class="mr-1">Tags</span>
                                    <span
                                        v-for="tag in blog.tag"
                                        :key="tag.id"
                                        class="badge badge-primary mr-1"
                                    >{{ tag.title }}</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted mr-2">
                                    Oleh
                                    <a href="#">{{ blog.user.name }}</a>
                                </small>
                                <small class="text-muted">{{ dateFromNow(blog.created_at) }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mb-3">
                        <div class="card-header text-white bg-primary">
                            <i class="fa fa-filter"></i> Fitler
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <label for="search_query">Search by Keyword</label>
                                <input
                                    v-model="filter.search_query"
                                    class="form-control"
                                    name="search_query"
                                    type="text"
                                    id="search_query"
                                    placeholder="Input Your Keywords to Search Specified Data"
                                />
                            </div>

                            <div class="form-group">
                                <label for="tag_id">Filter by Tag</label>
                                <div class="form-check" v-for="tag in tags" :key="tag.id">
                                    <input
                                        v-model="filter.tag_id"
                                        class="form-check-input"
                                        name="tag_id"
                                        type="checkbox"
                                        :value="tag.id"
                                        :id="'tag-'+tag.id"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="tag_id"
                                    >{{ `${tag.title} (${tag.blog_count})` }}</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cat_id">Filter by Category</label>
                                <div class="form-check">
                                    <div v-for="cat in categories" :key="cat.id">
                                        <input
                                            v-model="filter.category_id"
                                            class="form-check-input"
                                            :value="cat.id"
                                            type="radio"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="flexRadioDefault2"
                                        >{{ `${cat.title} (${cat.blog_count})` }}</label>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix">
                                <div class="text-right">
                                    <button class="btn btn-danger" @click="resetFilter">
                                        <i class="fa fa-undo"></i> Reset Filter
                                    </button>
                                    <button class="btn btn-success" @click="applyFilter">
                                        <i class="fa fa-check"></i> Apply Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/mixins/general";

export default {
    data: () => ({
        blogs: [],
        tags: [],
        categories: [],
        filter: {
            search_query: "",
            category_id: "",
            tag_id: [],
        },
    }),

    mounted() {
        this.initData();
        this.getTags();
        this.getCategories();
    },

    methods: {
        initData: function () {
            $.LoadingOverlay("show");

            var params = this.filter;

            axios.get("/api/pub/blog", { params }).then((res) => {
                if (res.data.status == 1) {
                    $.LoadingOverlay("hide");
                    this.blogs = res.data.data.data;
                }
            });
        },

        getTags: function () {
            axios.get("/api/pub/tag").then((res) => {
                if (res.data.status == 1) {
                    this.tags = res.data.data;
                }
            });
        },

        getCategories: function () {
            axios.get("/api/pub/category").then((res) => {
                if (res.data.status == 1) {
                    this.categories = res.data.data;
                }
            });
        },

        applyFilter: function () {
            this.initData();
        },

        resetFilter: function () {
            this.filter = {
                search_query: "",
                category_id: "",
                tag_id: [],
            };

            this.initData();
        },
    },
};
</script>

<style scoped>
.blog-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3e64fc;
}
</style>