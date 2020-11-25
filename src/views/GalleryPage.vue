<template>
  <div class="gallery">
    <section class="section" id="hero">

      <div class="container">
        <nav
          class="navbar is-transparent"
          role="navigation"
          aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://openpesantren.com">
              <img
                src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
              >
            </a>

            <a
              role="button"
              class="navbar-burger burger has-text-white"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a href="/" class="navbar-item has-text-white">
                Beranda
              </a>

              <a href="/pendidikan" class="navbar-item has-text-white">
                Pendidikan
              </a>

              <a href="/gallery" class="navbar-item has-text-white">
                Gallery
              </a>

              <a href="/about" class="navbar-item has-text-white">
                Tentang
              </a>

            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-info">
                    <strong>Daftar</strong>
                  </a>
                  <a class="button is-warning">
                    Masuk
                  </a>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>

      <div class="columns pt-6">
        <div class="column mt-6">
          <h1 class="is-size-1 has-text-white has-text-weight-semibold">
            Open Pesantren
          </h1>
          <p class="has-text-white">
            Adalah aplikasi menejemen pesantren yang dibuat oleh komunitas IT yang bertujuan untuk
            memanfaatkan teknologi sebagai sarana kemajuan pesantren di Indonesia
          </p>
          <button class="button is-warning mt-4">
            Info lebih lanjut
          </button>
        </div>
        <div class="column mt-6">
          <img src="@/assets/home_image.svg" alt="Image Hero"/>
        </div>
      </div>

    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GalleryPage extends Vue {}
</script>

<style scoped lang="scss">
.gallery {
  #hero {
    background: url('~@/assets/hero_bg.jpg');
    height: 879px;
    background-position-x: center;
    background-size: cover;
  }

  #hero .navbar.is-transparent {
    background-color: transparent;
  }

  .service-buttons {
    justify-content: center !important;
  }

  .logos:before {
    content: '';
    position: absolute;
    width: 50%;
    left: 25%;
    top: 0;
    border-top: 1px solid #ebebeb;
  }

  @media screen and (max-width: 1023px) {
    .navbar-menu a.has-text-white {
      color: #4a4a4a !important;
    }
    .navbar-menu a.has-text-white:hover {
      color: #3273dc !important;
    }
  }
}
</style>
