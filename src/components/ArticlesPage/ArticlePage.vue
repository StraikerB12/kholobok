<template>
  <div class="main__content">

    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <section class="section">
              <div>
                <h2 class="section__title">{{ data.title }}</h2>
              </div>
              <div class="section__content">
                
                <div v-html="data.body"></div>

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'ArticlePage',
    props: {
      id: {
        type: String,
        default: null,
      },
    },

    data: () => ({
      data: {}
    }),

    created: function () {
      this.getArticle();
    },

    methods: {
      getArticle(){
        this.postMethod('articles.getId',{id: this.id}).then((response) => {
          console.log(response);
          this.data = response;
        });
      },
    }
  }
</script>

<style>

</style>