import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => ({
    paymentMode: '',
    loadingState: false,
    alert: {
      show: false, // 是否顯示
      state: false, // 回傳狀態
      msg: "" // 回傳訊息
    },
    data: {
      user_name: "", // 姓名
      user_email: "", // 信箱
      user_cellphone: "", // 行動電話
      regular: "M", // 定期定額期數單位（M：每月定期扣款、O：一次性扣款）
      regular_total: "0", // 總期數（代入 0）
      /* 以下為必填欄位 */
      // store_uid: "RImHMBzeeOYlTEZaJj17qGZAy4YRh6HY", // 特約商店代碼（此參數由後端寫入）
      user_id: "", // 消費者帳號（時間戳）
      cost: 3000, // 訂單總金額（預設 $3000）
      order_id: "", // 訂單編號（時間戳）
      ip: "127.0.0.1",  // 消費者來源 IP（可填固定值）
      items: [  // 訂單物品項目
        {
          id: "1",
          name: "Shoulders 陪伴青少年運動選手走一哩路",
          cost: 0,
          amount: "1",
          total: 0
        }
      ],
      pfn: "all", // 付款方式
      echo_0: "", // 捐款人信箱
      echo_1: "" // 自訂參數（稱謂）
    }
  }),

  actions: {
    async payment() {
      console.log('handlerPayment');
      try {
        console.log('this.data', this.data);
        const res = await axios.post('https://shouldersfoundationtw.org/framework/api/mypay', this.data);
        console.log('res', res);

        if (res.data.code === "200") {
          this.loadingState = false;
          this.alert = {
            show: true,
            state: true,
            msg: "即將跳轉至捐款頁面…"
          }

          setTimeout(() => {
            location.href = res.data.url;
          }, 1000)
        } else {
          this.alert = {
            show: true,
            state: false,
            msg: "資料格式錯誤"
          }
        }
      }
      catch (error) {
        alert(error);
        console.log(error);
        this.loadingState = false;
        this.alert = {
          show: true,
          state: false,
          msg: "連線異常"
        }
      }
    },
  },
})