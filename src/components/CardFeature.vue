<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="has-text-centered">
                  <span class="icon is-size-1 py-6 my-3">
                    <em class="fas fa-code"/>
                  </span>
        </div>
        <p class="title is-4 has-text-centered">
          {{ title }}
        </p>
        <div class="content has-addons-centered">
          {{ subTitle }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Learn more</a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class CardFeature extends Vue {

  @Prop({type: String, default: "Web development"})
  public title: string

  @Prop({type: String, default: "Lorem subtitle"})
  public subTitle: string

  @Prop({type: String, default: "fas fa-code"})
  public icon: string

}
</script>

<style scoped>

</style>
