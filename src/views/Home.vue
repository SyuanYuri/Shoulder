<script>
import { reactive, defineComponent, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import router from "@/router"
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MemberCard from '@/components/MemberCard.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Footer,
    MemberCard,
    // PopperWrapper,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {

    // 判斷是否為 Android 系統
    let userAgent = navigator.userAgent;
    let isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
    console.log('Android：' + isAndroid);
    if (isAndroid) {
      router.push('https://shouldersfoundationtw.org/?openInAppBrowser=1')
      console.log('location', location.href);
    }

    // const imgList = reactive([
    //   { url: 'banner' },
    //   { url: 'banner' },
    //   { url: 'banner' },
    //   { url: 'banner' }
    // ]);

    let teamData = reactive(
      {
        main: [
          {
            name: "宋佳樺 Jamie",
            title: "共同創辦人暨執行長",
            image: "Jamie",
            mail: "jamiesung@shouldersfoundationtw.org",
            info: [
              "畢業於臺北醫學大學",
              "曾任職於連鎖咖啡集團值班經理",
              "曾服務於台北萬豪酒店",
              "溫暖、富有愛心，願意為了孩子的未來努力"
            ]
          },
          {
            name: "宋明峯 Jason",
            title: "創辦人暨董事長",
            image: "Jason",
            mail: "jasonsung@shouldersfoundationtw.org",
            // test: t("__hello_world"),
            info: [
              "長達 20 年帶領高爾夫球選手征戰各巡迴賽經驗",
              "培養高爾夫球選手贏過多次青少年冠軍及職業日巡賽、歐巡賽冠軍",
              "青少年選手家長課堂創辦人"
            ]
          },
          {
            name: "黃君豪 Jeff",
            title: "共同創辦人暨副董事長暨",
            subTitle: "英語教學平台負責人",
            image: "Jeff",
            mail: "jeffhuang@shouldersfoundationtw.org",
            info: [
              "國立大學應用外語系講師",
              "前財星五百大北美市場發展總監",
              "語言新創 新台灣人數位有限公司 負責人"
            ]
          },
          {
            name: "黃嘉穗",
            title: "共同創辦人暨董事",
            image: "JiaSuei",
            mail: "",
            info: [
              "前香港東亞科技董事長",
              "長期投入孩童教育事工"
            ]
          },
          {
            name: "Sunny Cheng",
            title: "英語教學師資招募負責人",
            image: "Sunny",
            mail: "",
            info: [
              "國發會雙語國家 教學活動英文主持",
              "國際珍古德實驗教育 英文老師",
              "多年教育經驗，熟悉不同教育背景",
              "精通口說對話、職場英文、多益英文",
              "曾任英語機構教務主任"
            ]
          },
          {
            name: "Tali na' Hahaw",
            title: "英文科總召集人",
            image: "Tali na' Hahaw",
            mail: "ethanshih@shouldersfoundationtw.org",
            info: [
              "宜蘭寒溪泰雅族",
              "輔大英文系/國立中央大學英文系",
              "國立台灣大學語言學研究所",
              "中華民國斐陶斐學術協會終身榮譽會員",
              "YouTube英文教學頻道",
              "英文教學 20 餘年經歷（高中英文/多益/托福）",
              "睿林教育｜英文科召集人",
            ]
          },
          {
            name: "顏培寧 Nick",
            title: "行銷營運總監",
            image: "Nick",
            mail: "",
            info: [
              "20 年品牌創建與廣告行銷經驗",
              "長期擔任非營利組織之品牌與數位轉型顧問",
              "多次擔任新創團隊之發展導師"
            ]
          },
          {
            name: "楊培傑 PJ",
            title: "共同創辦人",
            image: "PJ",
            mail: "",
            info: [
              "20 多年半導體電子業行銷與市場開發經驗",
              "竹科光電公司營運策略總監",
              "外商公司策略客戶專案經理",
              "美國俄亥俄州州立大學 (Ohio State University) 碩士"
            ]
          },
          {
            name: "余雲貴",
            title: "共同創辦人暨監察人",
            image: "YunGuei",
            mail: "",
            info: [
              "知名高爾夫球教練",
              "欣格高爾夫用品店負責人"
            ]
          }
        ],
        others: [
          {
            name: "林騰老師",
            title: "數學顧問",
            image: "LinTeng",
            mail: "",
            info: [
              "建國中學、台北大學畢業",
              "20 年知名數學補教業名師"
            ]
          },
        ]
      }
    );

    let purposeList = reactive([
      {
        title: "課後學習扶助",
        list: [
          "舉辦家長座談會，分享家長在青少年運動選手成長的過程中應提供的關懷，並提醒家長注重孩⼦的學科能力。",
          "學習扶助，透過整合多方專業教育平台課程內容，搭配專業老師瞭解孩子的學習斷層，給予適當的課業輔導，弭平學⼒落差。", "搭配有愛⼼且具備大學學歷之志工，每週關⼼孩子課後輔導的進度，並給予⿎勵與關⼼。"
        ]
      },
      {
        title: "注重品德發展",
        list: [
          "注重全人教育，透過日常的陪伴與關懷培養青少年運動選手良好的品德。", "在陪伴青少年體育選⼿經歷挫敗及外來誘惑時，引導透過正⾯的方式來面對。", "培養正向積極的態度、健全的心智與自律的運動家精神，發揮正向影響力。"
        ]
      },
      {
        title: "英文的提升",
        list: [
          "培養基本英語溝通能力，包含⽣活英語、運動英語，未來與國外教練、選⼿有良好無礙的溝通，促進交流與成長。", "加強英文能力爭取體育留學，獲取國外更專業、先進、全面的學習與訓練歷程，提升青少年運動選⼿的能力。"
        ]
      },
      {
        title: "陪伴與關懷",
        list: [
          "以關懷者的角度陪伴青少年運動選手度過叛逆期，滋潤親子間的關係，提供陪伴、關懷與專業運動⼼理，降低青少年運動選⼿從事不良嗜好的可能。", "關心青少年運動選手的成長，支持並注重課業上的輔導。", "關⼼青少年運動選手的賽事表現，與選手的教練⼀同分享在運動場上的歡喜與失意。"
        ]
      },
    ])

    onMounted(() => {
      setTimeout(() => {
        getLocation();
      }, 0)
    })

    function getLocation() {
      let element;
      if (window.location.hash.includes("team-block")) {
        element = document.querySelector("#team-block");
      } else if (window.location.hash.includes("center-block")) {
        element = document.querySelector("#center-block");
      }

      if (element) {
        window.scrollTo(0, element.offsetTop - 70);
      }
    }

    return {
      // imgList,
      teamData,
      purposeList,
      publicPath: process.env.BASE_URL
    }
  },
})
</script>

<template>
  <Navbar />
  <img src="@/assets/banner.jpg" alt="" class="banner">
  <div class="profiles-block">
    <section class="container">
      <h3>
        我們發現
        <br>
        青少年運動選手在成長的過程中少了點什麼
      </h3>
      <span class="line"></span>
      <section class="text-center">
        <p class="mb-0">
          在台灣有多少⼈重視青少年運動選手的學業發展？
          <br>
          在台灣有多少⼈給予這些青少年運動選手好的品德教育？
          <br>
          在台灣有多少⼈專門教導青少年運動選手英⽂口說？
          <br>
          在台灣有多少⼈在揭曉比賽成績後，好好關懷這些青少年運動選手？
          <br>
          能成為頂尖知名的職業選⼿少之又少
          <br>
          這些青少年運動選手需要有⼈來幫助他們
        </p>

        <ul class="mt-4">
          <li>
            我們期待
          </li>
          <li>
            青少年運動選手未來也能夠靠著基本的學業能力就讀⼀般大學，探索未來的第二人生。
          </li>
          <li>
            青少年運動選手能夠擁有好的品德，在未來能夠朝向正確的道路發展。
          </li>
          <li>
            青少年運動選手若有天發光發熱，語言不再是他們的阻礙，可以透過語言這個⼯具，讓他們走得更遠，飛得更高。
          </li>
          <li>
            青少年運動選手能夠得到更多的關注，讓更多人來關⼼孩子們，不僅僅是競賽成績，更多的是陪伴與關⼼孩⼦的⼼理和課業發展。
          </li>
        </ul>

        <p class="mt-4">
          因此我們決定為這些青少年運動選手貢獻⼀點力量
          <br>
          幫助青少年運動選⼿能夠有更好的未來，也提升發掘下⼀個台灣之光的可能性，讓世界更有機會看見台灣。
        </p>
      </section>

      <!-- <div class="mt-5 d-flex flex-column align-items-center">
        <img src="@/assets/slogan.png" alt="" class="slogan">
      </div> -->

      <div class="video-box">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oWocVnwzSfs" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </section>
  </div>

  <div class="container" id="center-block">
    <h3>我們的宗旨</h3>
    <span class="line"></span>
    <div class="row gx-5">
      <div v-for="(item, index) in purposeList" class="col-12 col-lg-6 col-xl-3 my-4 my-lg-0">
        <div class="img-box">
          <img :src="require(`@/assets/serve-0${index + 1}.png`)" alt="">
        </div>
        <section class="pt-3 mt-lg-0 px-4 px-md-0">
          <h4>
            {{ item.title }}
          </h4>
          <ul>
            <li v-if="index === 2">
              <p>
                透過專業的
                <a href="https://drive.google.com/file/d/1TMRAEgkF6QLhjAJ3hPJotKDncsfMLPX7/view?usp=share_link"
                  target="_blank">英文師資團隊</a>
                ，每期 8 週，每週 2 次的英語⼝說課程，從 KK ⾳標出發，培養青少年運動選手標準英語發⾳與口說自信。
              </p>
            </li>
            <li v-for="(e, i) in item.list">
              {{ e }}
            </li>
          </ul>
        </section>
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
    <h3>創建團隊</h3>
    <span class="underline"></span>
    <div class="container content">
      <member-card :list="teamData.main"></member-card>
      <!-- <div class="my-5">
        <h3>英文團隊</h3>
        <span class="underline"></span>
      </div>
      <member-card :list="teamData.enTeam"></member-card> -->
      <div class="mt-5">
        <h3>
          <a href="https://drive.google.com/file/d/1TMRAEgkF6QLhjAJ3hPJotKDncsfMLPX7/view?usp=share_link"
            target="_blank">英文團隊</a>
        </h3>
        <span class="underline"></span>
      </div>

      <section class="d-flex justify-content-center pt-1">
        <h4>英文團隊簡介</h4>
        <a href="https://drive.google.com/file/d/1TMRAEgkF6QLhjAJ3hPJotKDncsfMLPX7/view?usp=share_link"
          class="popper-btn" target="_blank">
          <i class="fa-solid fa-circle-plus"></i>
        </a>
      </section>

      <div class="my-5">
        <h3>協力團隊</h3>
        <span class="underline"></span>
      </div>
      <member-card :list="teamData.others"></member-card>
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

  <div class="container" id="support-block">
    <h3>捐款支持</h3>
    <span class="line"></span>

    <section class="mt-1">
      <p class="fw-bold" style="color: #595757; font-size: 20px;">邀請您，⼀同陪伴青少年運動選手走⼀哩路</p>
      <span class="underline"></span>
      <p>
        教育改變體育，改變從基礎教育與英文開始。我們深信青少年運動選手在培訓運動專長的同時應兼顧基本學科發展、品德教育與⼼理關懷。因此秀德教育基⾦會致⼒於幫助及改變青少年運動選手身心靈全面平衡發展。
      </p>
    </section>

    <div class="accordion mt-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            臺幣轉帳
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>
              請依下列資訊進行轉帳，完成後請填寫<a href="https://forms.gle/p5dqhrX55hGth1DLA" target="_blank">捐款收據表單</a>，將會有專人與您聯繫。
            </p>

            <ul>
              <li><strong>戶名</strong>｜財團法人新北市秀德教育基金會</li>
              <li><strong>匯款銀行</strong>｜國泰世華銀行新樹分行 (013)</li>
              <li><strong>匯款帳戶</strong>｜104-03-5566767</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            非臺幣轉帳 <i class="fa-solid fa-hands-holding-dollar"></i>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>請用以下資訊進行轉帳：</p>
            <ul>
              <li>
                <strong>Beneficiary’s Name</strong>｜Shoulders Education Foundation
              </li>
              <li>
                <strong>A/C with Bank</strong>｜CATHAY UNITED BANK, TAIPEI, TAIWAN（國泰世華商業銀行）
              </li>
              <li>
                <strong>A/C with Bank Address</strong>｜1F., NO. 7, SONGREN ROAD, TAIPEI CITY, 11073, TAIWAN
                （110 台北市信義區松仁路7號）
              </li>
              <li>
                <strong>Account No.</strong>｜104-03-5566767
              </li>
              <li>
                <strong>Swift Code</strong>｜UWCBTWTP
              </li>
              <li>
                <strong>Beneficiary’s Telephone No.</strong>｜+886-987-689-628, +886-972-285-177
              </li>
              <li>
                <strong>Email Address</strong>｜jamiesung@shouldersfoundationtw.org
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            郵政劃撥
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div> -->
    </div>

    <!-- <div class="sef-item my-5 p-4 px-5">
      <section>
        <h5>瀏覽 SEF 「捐款名冊」</h5>
        <p class="m-0">查詢捐款紀錄（定期每個月 15 日更新）</p>
      </section>

      <a :href="`${publicPath}pdf-file/donateList.pdf`" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
          class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </a>
    </div> -->

    <p class="mt-4">
      若您為代表企業的夥伴，歡迎您來信至「<a
        href="mailto:jamiesung@shouldersfoundationtw.org">jamiesung@shouldersfoundationtw.org</a>」，相關夥伴將與您接洽。
    </p>
  </div>

  <a href="#support-block" class="donate-btn">
    <section>
      <img src="../assets/icon-hands.png" alt="" width="45">
      <p class="mb-2">捐款支持</p>
    </section>
  </a>

  <Footer />
</template>

<style lang="scss" scoped>
h3 {
  line-height: 40px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 414px) {
    font-size: 22px;
  }
}

.line {
  display: block;
  height: 1px;
  width: 250px;
  margin: 30px auto;
  background-color: #cacaca;
}

.profiles-block {
  padding: 100px 0;
  background-color: #EFEFEF;

  @media (max-width: 991px) {
    padding: 70px 0;
  }

  h4 {
    font-size: 20px;
  }

  p {
    line-height: 30px;

    @media (max-width: 575px) {
      font-size: 14px;
    }
  }

  ul {
    padding: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      line-height: 30px;

      @media (max-width: 575px) {
        font-size: 14px;
      }
    }
  }

  // .slogan {
  //   width: 40vw;

  //   @media (max-width: 991px) {
  //     width: 100%;
  //   }
  // }

  .video-box {
    display: flex;
    margin: 30px auto 0;
    position: relative;
    width: 70%;
    height: 0;
    padding-bottom: 39%;

    @media (max-width: 1200px) {
      width: 80%;
      padding-bottom: 45%;
    }

    @media (max-width: 991px) {
      width: 100%;
      padding-bottom: 55%;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

#center-block {
  padding: 100px 0;

  @media (max-width: 991px) {
    padding: 70px 0;
  }

  a {
    font-weight: bold;
    color: var(--main-color);
  }

  p {
    line-height: 26px;
    // text-align: justify;
  }

  ul {
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
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

#support-block {
  max-width: 1050px;
  padding: 100px 30px;

  .accordion-item {
    border: none !important;

    &,
    .accordion-button {
      background-color: #EFEFEF;
    }

    .accordion-button::after {
      display: none;
    }

    .accordion-button::before {
      flex-shrink: 0;
      width: var(--bs-accordion-btn-icon-width);
      height: var(--bs-accordion-btn-icon-width);
      margin-right: 15px;
      content: "";
      background-image: var(--bs-accordion-btn-icon) !important;
      background-repeat: no-repeat;
      background-size: var(--bs-accordion-btn-icon-width);
      transition: var(--bs-accordion-btn-icon-transition);
    }

    .accordion-button:not(.collapsed) {
      color: #000 !important;

      &::before {
        background-image: var(--bs-accordion-btn-active-icon);
        transform: var(--bs-accordion-btn-icon-transform);
      }
    }

    .accordion-button:focus {
      box-shadow: none !important;
    }

  }

  a {
    font-weight: bold;
    color: var(--main-color);
    text-decoration: none;
    transition: border-color .3s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid var(--main-color);
    }
  }

  ul {
    padding: 20px 50px;
    background: #fff;

    li {
      margin: 10px 0;
      font-size: 20px;
      font-weight: bold;
      word-break: break-word;

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }

  // .sef-item {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   color: var(--bg-color);
  //   background-color: var(--sub-color);

  //   h5 {
  //     font-size: 22px;
  //     font-weight: bold;
  //   }

  //   p {
  //     font-weight: bold;
  //   }

  //   a {
  //     color: var(--bg-color);
  //     transition: all .3s;
  //     border: none;

  //     &:hover {
  //       opacity: .7;
  //       border: none;
  //     }

  //     svg {
  //       font-size: 50px;
  //     }
  //   }
  // }

}

.donate-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  color: #000;
  text-decoration: none;

  @media (max-width: 575px) {
    right: 15px;
    bottom: 15px;
  }

  &:hover section {
    opacity: .9;
    box-shadow: 2px 2px 4px #707070;
  }

  section {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--sub-color);
    border-radius: 100%;
    box-shadow: 2px 2px 5px #505050;
    transition: all .3s;

    p {
      font-weight: bold;
    }
  }
}
</style>