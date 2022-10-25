<script>
import { reactive, defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const imgList = reactive([
      { url: 'banner' },
      { url: 'banner' },
      { url: 'banner' },
      { url: 'banner' }
    ]);

    let teamData = reactive(
      {
        main: [
          {
            name: '宋明峯 Jason',
            title: '創辦人兼董事長',
            image: 'Jason',
            info: [
              "長達 20 年帶領高爾夫球選手征戰各巡迴賽經驗",
              "培養高爾夫球選手贏過多次青少年冠軍及職業日巡賽，歐巡賽冠軍",
              "青少年選手家長課堂創辦人"
            ]
          },
          {
            name: '黃嘉穗',
            title: '共同創辦人暨董事',
            image: 'JiaSuei',
            info: [
            "前香港東亞科技董事長",
              "長期投入孩童教育志工"
            ]
          },
          {
            name: '黃君豪 Jeff',
            title: '共同創辦人暨副董事長暨英語教學平台負責人',
            image: 'Jeff',
            info: [
              "國立大學應用外語系講師",
              "前財星五百大北美市場發展總監",
              "語言新創 新台灣人數位有限公司 負責人"
            ]
          },
          {
            name: '宋佳樺 Jamie',
            title: '共同創辦人兼執行長',
            image: 'Jamie',
            info: [
              "醫學相關背景",
              "於服務業深耕多年，極具耐心",
              "富有愛心，願意為孩子的未來努力"
            ]
          },
          {
            name: '楊培傑 PJ',
            title: '共同創辦人',
            image: 'PJ',
            info: [
              "20 多年半導體電子業行銷與市場開發經驗",
              "竹科光電公司營運策略總監",
              "外商公司策略客戶專案經理",
              "美國俄亥俄州州立大學 (Ohio State University) 碩士"
            ]
          },
          {
            name: '余雲貴',
            title: '共同創辦人兼監察人',
            image: 'YunGuei',
            info: [
              "知名高爾夫球教練",
              "欣格高爾夫用品店負責人"
            ]
          },
        ],
        partner: [
          {
            name: "林騰老師",
            title: "",
            image: "LinTeng",
            info: [
              "建國中學、台北大學畢業",
              "20 年知名數學補教業名師"
            ]
          },
          {
            name: "Tali na' Hahaw",
            title: "",
            image: "Tali na' Hahaw",
            info: [
              "宜蘭寒溪泰雅族",
              "輔大英文系/國立中央大學英文系",
              "國立台灣大學語言學研究所",
              "中華民國斐陶斐學術協會終身榮譽會員",
              "YouTube英文教學頻道：",
              "英文教學 20 餘年經歷（高中英文/多益/托福）",
              "蘆洲睿林教育補習班｜英文科召集人",
            ]
          },
        ]
      }
    );

    return {
      imgList,
      teamData
    }
  },
})
</script>

<template>
  <img src="@/assets/banner.jpg" alt="" class="banner">
  <div class="top-block">
    <section class="container">
      <h3>
        我們發現運動青少年在求學、
        <br>
        訓練與成長的過程中少了點什麼...
      </h3>
      <span class="line"></span>
        <section class="text-center">
          <p>在台灣有多少人重視體育青少年的學業發展？</p>
          <p>在台灣有多少人給予這些體育青少年好的品德教育？</p>
          <p>在台灣有多少人專門教導體育青少年英文？</p>
          <p>在台灣有多少人在揭曉比賽成績後，好好關懷這些體育青少年？</p>
          <p class="mt-5">因此我們決定為這些運動青少年貢獻一點力量...</p>
        </section>
      <div class="mt-5 d-flex flex-column align-items-center">
        <!-- <h4 class="pt-5 mb-3">這裡可以放一句介紹 + 一張照片</h4> -->
        <img src="@/assets/slogan-02.jpg" alt="" style="width: 40vw;">
      </div>
    </section>
  </div>

  <div class="container" id="center-block">
    <h3>我們的宗旨</h3>
    <span class="line"></span>
    <div class="row gx-5">
      <div class="col-12 col-lg-6 col-xl-3 my-4 my-lg-0">
        <div class="img-box">
          <img src="@/assets/serve-01.png" alt="">
        </div>
        <section class="pt-3 mt-lg-0 px-4 px-md-0">
          <h4>
            平衡學業發展
          </h4>
          <p>
            我們舉辦家長座談會，鼓勵家長要注重還自的學科，平衡孩子在訓練和課業上的發展。除此之外，我們還要了解孩子的學習斷層，而不是一昧的附加學習壓力在孩子的身上。最後還要教導孩子有效的時間分配及效率管理，讓孩子可以有效的分配時間在運動和讀書上面。
          </p>
        </section>
        <!-- <a href="" class="link">
          怎麼發展長期影響力？
          <i class="fa-solid fa-arrow-right"></i>
        </a> -->
      </div>
      <div class="col-12 col-lg-6 col-xl-3 my-4 my-lg-0">
        <div class="img-box">
          <img src="@/assets/serve-02.png" alt="">
        </div>
        <section class="pt-3 mt-lg-0 px-4 px-md-0">
          <h4>
            注重品德發展
          </h4>
          <p>我們注重孩子的全人教育，期許運動員除了擁有體育專才以外，也必須要有好的品德，在未來的道路中，透過良好的心理素質及正確的觀念，並秉持正向的態度面對許多挫敗或是外來的誘惑，才能發揮正向影響力，塑造好的榜樣給後輩學習，進而改善台灣的體育圈、帶給台灣社會正向的影響。</p>
        </section>
        <!-- <a href="" class="link">
          怎麼發展長期影響力？
          <i class="fa-solid fa-arrow-right"></i>
        </a> -->
      </div>
      <div class="col-12 col-lg-6 col-xl-3 my-4 my-lg-0">
        <div class="img-box">
          <img src="@/assets/serve-03.png" alt="">
        </div>
        <section class="pt-3 mt-lg-0 px-4 px-md-0">
          <h4>
            英文的提升
          </h4>
          <p>
            青少年選手除了要有好的體育技術、好的品德，方要有好的軟實力才能更上一層樓，而這個軟實力我們從英文出發。增進英文能力不管是對於比賽或是訓練都有莫大的幫助，好比說在與世界各地的選手比賽時可以透過英文交流，藉此消除孤立感極不自在感，穩定在賽場上的表現等等。
          </p>
        </section>
        <!-- <a href="" class="link">
          怎麼發展長期影響力？
          <i class="fa-solid fa-arrow-right"></i>
        </a> -->
      </div>
      <div class="col-12 col-lg-6 col-xl-3 my-4 my-lg-0">
        <div class="img-box">
          <img src="@/assets/serve-04.png" alt="">
        </div>
        <section class="pt-3 mt-lg-0 px-4 px-md-0">
          <h4>
            陪伴與關懷
          </h4>
          <p>我們注重陪伴與關懷青少年選手，透過傾聽、陪伴、支持、專業的運動心理諮詢等，讓青少年選手能夠用正確的態度來面對運動場上的失意，小小年紀就要面對場上許多成敗，如果沒有人陪在他們的身邊理解他們的難過與無奈，並給予治癒挫折的特效藥，他們可能就會自暴自棄、抽菸、酗酒等。</p>
        </section>
        <!-- <a href="" class="link">
          怎麼發展長期影響力？
          <i class="fa-solid fa-arrow-right"></i>
        </a> -->
      </div>
    </div>

    <!-- 暫時隱藏 -->
    <!-- <Carousel :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="(image, index) in imgList" :key="index">
        <img :src="require(`@/assets/${image.url}.jpg`)" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel> -->
  </div>

  <div id="team-block">
    <h3>創辦成員</h3>
    <span class="line"></span>
    <div v-for="(item, index) in teamData.main" :key="index" class="content">
      <div class="img-box d-none d-md-block">
        <img :src="require(`@/assets/member/${item.image}.jpg`)" alt=""
        :style="[index===1 ? {'transform': 'scale(1)'} : '']">
      </div>
      <section class="d-flex flex-column justify-content-center">
        <div class="img-box d-block d-md-none">
          <img :src="require(`@/assets/member/${item.image}.jpg`)" alt="">
        </div>
        <div class="info-box">
          <h2>{{ item.name }}</h2>
          <h4 class="mb-0">{{ item.title }}</h4>
          <span class="underline"></span>
          <ul>
            <li v-for="(e, i) in item.info" :key="i">
              {{ e }}
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="my-5">
      <h3>協力夥伴</h3>
      <span class="line"></span>
    </div>
    <div v-for="(item, index) in teamData.partner" :key="index" class="content">
      <div class="img-box d-none d-md-block">
        <img :src="require(`@/assets/member/${item.image}.jpg`)" alt="">
      </div>
      <section class="d-flex flex-column justify-content-center">
        <div class="img-box d-block d-md-none">
          <img :src="require(`@/assets/member/${item.image}.jpg`)" alt="">
        </div>
        <div class="info-box">
          <h2 class="mb-0">{{ item.name }}</h2>
          <span class="underline"></span>
          <ul>
            <li v-for="(e, i) in item.info" :key="i">
              {{ e }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>

  <!-- <div class="container d-flex bottom-block">
    <section>
      <h3>一起拯救J米</h3>
      <p>願有一天，台灣所有孩子，不論出身，都能擁有優質的教育和自我發展的機會。</p>
    </section>
    <div class="d-flex flex-column align-items-center">
      <a href="" class="link mt-0">
        了解計畫
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="" class="link mt-3">
        捐款支持
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div> -->

</template>

<style lang="scss" scoped>
h3,
.top-block h4 {
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}

.line {
  display: block;
  height: 1px;
  width: 250px;
  margin: 40px auto;
  background-color: #000;
}

.top-block {
  padding: 100px 0;
  background-color: #EFEFEF;

  @media (max-width: 991px) {
    padding: 70px 0;
  }

  h4 {
    font-size: 20px;
  }
}

#center-block {
  padding: 100px 0;

  @media (max-width: 991px) {
    padding: 70px 0;
  }

  p {
    line-height: 33px;
    text-align: justify;
  }

  h4 {
    margin: 15px 0;
    font-size: 1.3rem;
    line-height: 33px;
  }

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;

    @media (max-width: 1199px) {
      height: 300px;
    }

    @media (max-width: 991px) {
      max-width: 80%;
      height: auto;
    }
  }

  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
      height: auto;
    }
  }

  h4 {
    color: var(--main-color);
    font-weight: bold;
  }
}

#team-block {
  padding: 70px 0;
  background-color: #EFEFEF;

  @media (max-width: 991px) {
    margin: auto;
  }

  .content {
    margin: 50px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
      margin: 180px 50px;
      align-items: center;
      flex-direction: column;
    }

    @media (max-width: 575px) {
      margin: 180px 20px 0;
    }

    .img-box {
      height: 300px;
      width: 100%;
      max-width: 300px;
      margin: auto -160px auto 0;
      position: relative;
      border-radius: 100%;
      overflow: hidden;

      @media (max-width: 767px) {
        margin: -160px auto 0;
      }

      img {
        width: 300px;
        height: 100%;
        border-radius: 10px 0 0 10px;
        object-fit: cover;
        z-index: 10;
        transform: scale(1.1);
        object-position: 10% 30%;
      }
    }

    section {
      width: 800px;
      max-width: 100%;
      padding: 20px 20px 20px 180px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 3px 5px 10px #ccc;

      @media (max-width: 767px) {
        padding: 20px 0;
      }

      .underline {
        width: 20%;
        height: 5px;
        display: block;
        margin: 15px 0 10px 0;
        background: linear-gradient(to left, var(--main-color) 50%, var(--sub-color) 50%);
      }

      .info-box {
        @media (max-width: 767px) {
          // margin: auto;
          padding: 20px;
        }
      }

      h2 {
        font-size: 24px;
        font-weight: bold;
      }

      h4 {
        font-size: 16px;
        color: #656565;
      }

      ul {
        padding-left: 25px;
        margin: 0;

        li {
          line-height: 33px;
        }
      }
    }
  }

  // img {
  //   width: 300px;
  //   height: 370px;
  //   border-radius: 10px 0 0 10px;
  //   // height: 300px;
  //   // border-radius: 100%;
  //   margin: auto -160px auto 0;
  //   object-fit: cover;
  //   position: relative;
  //   z-index: 10;
  // }
}

.bottom-block {
  padding: 50px;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  border: 2px solid var(--main-color);
  border-radius: 5px;

  h3 {
    text-align: left;
    color: var(--main-color);
  }

  .link {
    display: inline-block;
    margin-top: 70px;
    padding: 5px 15px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    color: var(--main-color);
    transition: all .3s;

    &:hover {
      color: #fff;
      background-color: var(--main-color);
    }
  }
}
</style>