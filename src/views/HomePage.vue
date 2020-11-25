<template>
  <div class="home">

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
    <section class="section" id="services">

      <div class="container">
        <div class="has-text-centered">
          <h2 class="title is-2">Full Service Web Development Agency</h2>
          <h6 class="subtitle is-6 has-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          </h6>
        </div>

        <div class="columns pt-6">
          <card-feature :icon="`fas fas-code`" :title="`Pengolahan Data Santri`" :sub-title="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at
            natus dicta tempora? Distinctio vero aut`"/>
          <card-feature :icon="`fas fas-code`" :title="`PPDB Online`" :sub-title="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at
            natus dicta tempora? Distinctio vero aut`"/>
          <card-feature :icon="`fas fas-code`" :title="`Keuangan Pesantren`" :sub-title="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at
            natus dicta tempora? Distinctio vero aut`"/>
          <card-feature :icon="`fas fas-code`" :title="`Laporan Santri`" :sub-title="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at
            natus dicta tempora? Distinctio vero aut`"/>
        </div>

      </div>

    </section>
    <section class="section" id="contact">

      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header has-background-warning">
                <p class="card-header-title">
                  Kontak
                </p>
              </header>
              <div class="card-content">
                <div class="field">
                  <label class="label">Nama</label>
                  <p class="control">
                    <input class="input" type="text" placeholder="Nama">
                  </p>
                </div>
                <div class="field">
                  <label class="label">Nomor Hp</label>
                  <p class="control">
                    <input class="input" type="text" placeholder="Nomor Hp">
                  </p>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control">
                    <input class="input" type="email" placeholder="Email">
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-warning">
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="column has-text-white pt-6 pl-6">
          <span class="icon is-size-1 pb-6 my-3 has-text-grey-lighter">
            <i class="fas fa-quote-left"></i>
          </span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat, dolorem, quam expedita deleniti
              accusantium animi adipisci neque rem nobis at necessitatibus iusto vero exercitationem illum amet hic
              eligendi sapiente!</p>
            <p class="has-text-weight-bold pt-3 is-size-4">John Doe</p>
            <span class="icon is-size-1 pt-6 pr-3 my-3 has-text-grey-lighter is-pulled-right">
              <i class="fas fa-quote-right"></i>
            </span>
          </div>
        </div>
      </div>

    </section>

    <footer class="footer">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column"><p><small> Open Pesantren's source code is licensed under <a
              href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>. </small></p>
              <div class="field">
                <div class="field-body">
                  <div class="field has-addons">
                    <p class="control">
                      <a href="https://github.com/OpenPesantren"
                         target="_blank" class="button">
                      <span class="icon">
                        <i class="mdi mdi-github mdi-24px"></i>
                      </span>
                        <span>GitHub</span>
                      </a>
                    </p>
                    <p class="control">
                      <a href="https://twitter.com/open_pesantren" target="_blank" class="button is-twitter">
                        <span class="icon">
                          <i class="mdi mdi-twitter mdi-24px"></i>
                        </span>
                        <span>Twitter</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <small> This site is powered by <a href="https://bulma.io">Bulma</a></small></div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import CardFeature from "@/components/CardFeature.vue";

@Component({
  components: {CardFeature}
})
export default class HomePage extends Vue {

}
</script>

<style scoped lang="scss">
.home {
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
