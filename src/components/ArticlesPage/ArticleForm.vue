<template>
  <el-dialog
    title=""
    :visible.sync="visibleStep"
    width="80%"
    :before-close="close"
  >
    <label class="form__label">Название</label>
    <el-input
      class="form__input"
      v-model="title"
      clearable>
    </el-input>
    
    <!-- <label class="form__label"></label> -->
    <vue-editor id="editor" v-model="content" :editor-toolbar="customToolbar"></vue-editor>
    <!-- <div class="prosmotr" v-html="content"></div> -->

    <div slot="footer" class="dialog-footer">
      <el-button @click="close()">Отмена</el-button>
      <el-button type="primary" @click="sendArtikle()">Сохранить</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "ArticleForm",
  props: ["visible", "id"],

  components: {
    VueEditor,
  },

  data: () => ({
    visibleStep: false,
    content: "<h1>Новая статья</h1>",
    title: '',
    customToolbar: [
      
      [{ 'font': [] }],
      [{ 'header': [false, 1, 2, 3, 4 ] }],
      // [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
      // [{ 'header': 1 }, { 'header': 2 }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      // [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'formula'],//, 'image', 'video'
      [{ 'direction': 'rtl' }],
      ['clean'],
      ]
    
  }),

  watch: {
    visible: function (newValue) {
      if (newValue) this.visibleStep = true;
    },

    id: async function (newValue) {
      if(this.id != null){

        let {title, body} = await this.postMethod('articles.getId',{id: this.id});
        this.content = body;
        this.title = title;
        
      }
    },
  },

  methods: {
    close() {
      this.visibleStep = false;
      this.title = '';
      this.content = '<h1>Новая статья</h1>';
      this.$emit("close");
    },

    sendArtikle() {

      if(this.id != null){

        this.postMethod("articles.update", {
          title: this.title,
          body: this.content,
          id: this.id
        }).then(() => {
          this.close();
        });

      }else{

        this.postMethod("articles.add", {
          title: this.title,
          body: this.content 
        }).then(() => {
          this.close();
        });

      }
    },
  },
};
</script>

<style lang='scss'>

  .quillWrapper{
    padding: 30px 0;
  }

</style>