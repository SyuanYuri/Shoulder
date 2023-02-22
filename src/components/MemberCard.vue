<script>
import PopperWrapper from "../components/PopperWrapper";

export default {
  components: {
    PopperWrapper
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },

  setup(props, context) {
    return {
    }
  }
}
</script>

<template>
  <div class="row g-5 px-3 mt-4 mt-md-0">
    <div v-for="(item, index) in list" :key="index" class="col-6 col-md-4 item p-0">
      <section class="d-flex flex-column justify-content-center align-items-center">
        <img :src="require(`@/assets/member/${item.image}.jpg`)" alt="">
        <div class="info-box text-center mt-3">
          <h2>{{ item.name }}</h2>
          <section class="d-flex align-items-center justify-content-center p-0">
            <h4 v-if="item.subTitle === ''" class="mb-0 me-2">{{ item.title }}</h4>
            <h4 v-else class="mb-0 me-2">
              {{ item.title }}
              <br>
              {{ item.subTitle }}
            </h4>
            <PopperWrapper arrow placement="bottom" style="border: none;">
              <Button class="popper-btn">
                <i class="fa-solid fa-circle-plus"></i>
              </Button>
              <template #content>
                <small v-if="item.mail !== ''" class="d-flex align-items-center mt-1">
                  <i class="fa-solid fa-envelope mt-1 me-2"></i>
                  <a :href="`mailto:${item.mail}`">{{ item.mail }}</a>
                </small>
                <ul>
                  <li v-for="(e, i) in item.info" :key="i">
                    {{ e }}
                    <span
                      :style="[item.name === `Tali na' Hahaw` && i === 4 ? { 'display': 'block' } : { 'display': 'none' }]">
                      <a href="https://www.youtube.com/@ethanglish" target="_blank">Ethanglish｜英文教室 多益學測托福</a>
                    </span>
                  </li>
                </ul>
              </template>
            </PopperWrapper>
          </section>
        </div>
      </section>
    </div>
  </div>
  <!-- <button @click="emit('test')">click</button> -->
</template>

<style lang="scss">
#team-block {
  padding: 70px 0;
  background-color: #EFEFEF;

  @media (max-width: 991px) {
    margin: auto;
  }

  .underline {
    width: 100px;
    height: 3px;
    display: block;
    margin: 30px auto;
    background: linear-gradient(to left, var(--main-color) 50%, var(--sub-color) 50%);
  }

  .content {
    padding: 0 8vw;

    @media (max-width: 1200px) {
      padding: 0;
    }

    .item {
      margin: 0;
    }

    a {
      color: #212529;
      text-decoration: none;
    }

    img {
      width: 100%;
      max-width: 200px;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
      z-index: 10;
      object-position: 10% 30%;

      @media (max-width: 991px) {
        width: 180px;
      }

      @media (max-width: 414px) {
        width: 100%;
        max-width: 150px;
      }
    }

    section {
      max-width: 100%;
      padding: 20px 0;
      border-radius: 10px;
      background: transparent;

      .info-box {
        @media (max-width: 767px) {
          padding: 20px;
        }

        small {
          color: #fff;
          margin-bottom: 5px;

          @media (max-width: 414px) {
            font-size: 13px;
          }

          a {
            color: #fff;
            text-decoration: none;
            word-break: break-word;
            font-weight: 300;

            &:hover {
              opacity: .8;
            }
          }

          i {
            margin-left: 1px;
          }
        }
      }

      h2 {
        font-size: 24px;
        font-weight: bold;

        @media (max-width: 767px) {
          font-size: 18px;
          text-align: center;
        }
      }

      h4 {
        font-size: 16px;
        color: #656565;
        line-height: 25px;

        @media (max-width: 767px) {
          font-size: 14px;
        }
      }

      ul {
        margin: 0;
        padding-left: 25px;
        text-align: left;
        font-weight: 300;

        li {
          padding-right: 5px;
          line-height: 33px;
          font-weight: 400;

          @media (max-width: 575px) {
            font-size: 14px;
          }

          a {
            color: #fff;

            &:hover {
              opacity: .8;
            }
          }
        }
      }

      .popper-btn {
        margin-top: 1px;
        margin-left: 3px;
        border: 1px solid rgba(255, 255, 255, 0);

        i {
          color: var(--bg-color);
          font-size: 22px;
          margin: auto;
        }
      }
    }
  }
}
</style>