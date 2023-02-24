import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => ({
    payment_name: '',
    loadingState: false,
    alertState: false,
    data: {
      user_name: "", // 姓名
      user_email: "", // 信箱
      user_cellphone: "", // 行動電話
      regular: "M", // 定期定額期數單位（M：每月定期扣款、O：一次性扣款）
      regular_total: "0", // 總期數（代入 0）
      /* 以下為必填欄位 */
      // store_uid: "RImHMBzeeOYlTEZaJj17qGZAy4YRh6HY", // 特約商店代碼
      user_id: "", // 消費者帳號（時間戳）
      cost: 0, // 訂單總金額
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
      echo_0: "" // 自訂參數（稱謂）
    }
  }),

  actions: {
    async payment() {
      console.log('handlerPayment');
      try {
        console.log('this.data', this.data);
        const res = await axios.post('https://shouldersfoundationtw.org/framework/api/mypay', this.data)
        console.log('res', res);
        console.log('res data', res.data);
        // let testData = [
        //   {
        //     code: "200",
        //     msg: "資料正確",
        //     url: "https://pay.usecase.cc/payment/127261.html",
        //     uid: 127261,
        //     key: "e0770835bf752d57c996960ceb82dca6"
        //   }
        // ];
        // console.log('testData.code', testData[0].code);
        console.log('res code', res.data.code);
        // if (testData[0].code) {
        if (res.data.code) {
          setTimeout(() => {
            this.loadingState = false;
          }, 1000)

          this.alertState = true;

          setTimeout(() => {
            this.alertState = false;
            location.href = res.data.url;
          }, 2000)
        }
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})