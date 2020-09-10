<template>
  <section>
    <div>
      <h1 class="title">nuxt-i18n</h1>
      <div class="links">
        <div>Switch locale:
          <nuxt-link
            class="button--green"
            v-for="(locale, index) in localesExcludingCurrent"
            :key="index"
            :exact="true"
            :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link>
        </div>
      </div>
      <div class="links">Navigate:
        <nuxt-link :to="localePath('about')" class="button--green">{{ $t('about') }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    localesExcludingCurrent() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    }
  }
};
</script>

<script>
export default {
  computed: {
    localesExcludingCurrent() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
