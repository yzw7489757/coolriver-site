<template>
  <v-app id="example-2" light>
    <v-toolbar class="cyan darken" dark fixed>
      <nuxt-link to="/">
        <v-toolbar-title class="home-title">coolriver</v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <!-- <embed class="svg-bg" :src="chilunSvg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /> -->
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md9 order-xs2 order-md3>
            <nuxt/>
          </v-flex>
          <v-flex xs12 md3 order-xs3 order-md4 class="aside">
            <v-layout row wrap>
              <article-recent></article-recent>
              <article-all-tags></article-all-tags>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <div class="view-count">
      <span v-if="pvUv.sitePv">
        site pv: {{pvUv.sitePv}}
      </span>
      <span v-if="pvUv.siteUv">
        site uv: {{pvUv.siteUv}}
      </span>
      <span v-if="pvUv.pagePv">
        page pv: {{pvUv.pagePv}}
      </span>
    </div>
    <v-footer class="grey darken-3 justify-center">
      <span class="white--text">Copyright © 2017 coolriver</span>
      <span class="white--text ml-3 hidden-xs-only">粤ICP备16047967号-1</span>
    </v-footer>
    <scroll-top-btn></scroll-top-btn>
  </v-app>
</template>

<script>
import api from '../libs/api';
import { mapState } from 'vuex';
import { RECENT_ARTICLE_COUNT } from '../config/constant';
import ArticleRecent from '../components/article-recent';
import ArticleAllTags from '../components/article-all-tags';
import ScrollTopBtn from '../components/scroll-top-btn';
import zhanZhang from '../libs/mixins/zhanzhang';
const chilunSvg = require('../assets/image/chilun.svg');

export default {
  mixins: [zhanZhang],
  name: 'default-layout',
  data() {
    return {
      drawer: true,
      chilunSvg
    };
  },
  created() {},
  computed: {
    ...mapState(['pvUv', 'recentList'])
  },
  methods: {
    fetchRecentArticle() {
      api.article.getList({ limit: RECENT_ARTICLE_COUNT }).then(list => {
        this.$store.commit('updateRecentList', list);
      });
    },
    fetchTags() {
      api.article.getTags().then(list => {
        this.$store.commit('updateTagList', list);
      });
    }
  },
  mounted() {
    this.fetchRecentArticle();
    this.fetchTags();
  },
  components: {
    ArticleRecent,
    ArticleAllTags,
    ScrollTopBtn
  }
};
</script>

<style scoped lang="scss">
.view-count {
  color: #666;
  text-align: center;
  margin: 15px auto 15px -10px;

  & > span {
    margin-left: 10px;
  }
}

.svg-bg {
  position: absolute;
  z-index: 0;
}

.home-title {
  color: #fff;
}

.aside > .layout {
  position: sticky;
  top: 76px;
}

.toolbar--fixed {
  z-index: 100;
}

.footer {
  text-align: center;
  padding: 20px 0;
  height: auto;
}

.container {
  position: relative;
}

.container > .layout {
  min-height: 100vh;
}

.scroll-btn {
  bottom: 32px;
  z-index: 1000;
}

@media (min-width: 0) {
  .container > .layout {
    min-height: 0;
  }

  .container.grid-list-md {
    padding: 0;
  }

  .container {
    margin-top: 0;
  }
}

@media (min-width: 960px) {
  .container > .layout {
    min-height: 100vh;
  }

  .container.grid-list-md {
    padding: 8px;
  }

  .container {
    margin-top: 8px;
  }
}

@media only screen and (min-width: 1904px) {
  .container.grid-list-md {
    max-width: 1185px;
  }
}
</style>

