// import axios from 'axios'

// export const axiosBaseUrl = 'http://loaclhost:3000'

// export const getRequest = (url, params) => {
//   // let accessToken = getStore('accessToken');
//   return axios({
//     method: 'get',
//     url: `${axiosBaseUrl}${url}`,
//     params: params
//     // headers: {
//     //     'accessToken': accessToken
//     // }
//   })
// }
// export const postRequest = (url, params) => {
//   // let accessToken = getStore("accessToken");
//   return axios({
//     method: 'post',
//     url: `${axiosBaseUrl}${url}`,
//     data: params,
//     transformRequest: [function (data) {
//       let ret = ''
//       for (let it in data) {
//         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//       }
//       return ret
//     }],
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//       // 'accessToken': accessToken
//     }
//   })
// }
