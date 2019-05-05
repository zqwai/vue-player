import axios from 'axios'
import { URL, defaultLimit } from '@/config'

// axios 默认地址
axios.defaults.baseURL = URL

// banner
export function getBanner () {
  return axios.get('/banner')
}
// 登录 ================================================================
/*
 * 手机登录(参数):
 * phone
 * password
*/
export function postLoginPhone () {
  return axios.post('/login/cellphone')
}
/*
 * 调用手机登录(参数):
*/
export function getLoginPhone (phone, password) {
  return axios.post('/login', {
    params: {
      email: phone,
      password: password
    }
  })
}
/*
 * email登录(参数):
 * email: 163 网易邮箱
 * password
*/
export function postLoginEmail (email, password) {
  return axios.post('/login', {
    params: {
      email: email,
      password: password
    }
  })
}
/*
 * 调用email登录(参数):
*/
export function getLoginEmail (email, password) {
  return axios.get('/login', {
    params: {
      email: email,
      password: password
    }
  })
}

// 歌手 ================================================================

/*
 * 歌手分类列表
 * cat: 必选参数
 * initial 按首字母索 如 /artist/list?cat=1001&initial=b
 * limit 返回数量
 * offset  偏移数量，用于分页, 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 ,
*/
export function getArtistList (catId) {
  return axios.get('/artist/list/', {
    params: {
      cat: catId
    }
  })
}
/*
 * 获取歌手描述
 * id: 歌手 id
*/
export function artistDesc (id) {
  return axios.get('/artist/desc/', {
    params: {
      id: id
    }
  })
}
/*
 * 获取歌手专辑
 * id: 歌手 id
 * limit取出数量 , 默认为 50
 * offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
*/
export function artistAlbum (id) {
  return axios.get('/artist/album/', {
    params: {
      id: id
    }
  })
}
/*
 * 获取歌手 mv
 * id: 歌手 id
*/
export function artistMv (id) {
  return axios.get('/artist/mv/', {
    params: {
      id: id
    }
  })
}
/*
 * 获取歌手单曲
 * id: 歌手 id
*/
export function getArtists (id) {
  return axios.get('/artists/', {
    params: {
      id: id
    }
  })
}

// 歌单 ================================================================

/*
 * 新歌速递
 * ids: 音乐 id, 如 ids=347230
*/
export function getSongDetail (ids) {
  return axios.get('/song/detail', {
    params: {
      ids: ids
    }
  })
}
/*
 * 获取歌词
 * ids: 音乐 id, 如 ids=347230
*/
export function getLyric (id) {
  return axios.get('/lyric', {
    params: {
      id: id
    }
  })
}

/*
 * 新歌速递
 * type: 地区类型 id,对应以下:
*/
export function getTopSong (type, limit) {
  return axios.get('/top/song', {
    params: {
      type: type,
      limit: limit
    }
  })
}
/*
 * 排行榜
 * idx: 对象 key
*/
export function getTopList (idx) {
  return axios.get('/top/list/', {
    params: {
      idx: idx
    }
  })
}
/*
 * 所有榜单
 * defaultLimit: 默认分页数
*/
export function getToplists () {
  return axios.get('/toplist/', {
    params: {
      defaultLimit: defaultLimit
    }
  })
}
/*
 * 最新专辑
*/
export function getAlbumNewest () {
  return axios.get('/album/newest/')
}
/*
 * 歌单分类
 * id: 歌单分类 id
*/
export function getPlaylistCatlist (id, cat, order) {
  return axios.get('/playlist/catlist/', {
    params: {
      id: id,
      cat: cat,
      order: order
    }
  })
}
/*
 * 相关歌单推荐
 * id: 相关歌单推荐 id
*/
export function getRelatedPlaylist (id) {
  return axios.get('/related/playlist/', {
    params: {
      id: id
    }
  })
}
/*
 * 获取精品歌单
 * num
*/
export function getTopPlaylist (num) {
  return axios.get('/top/playlist/highquality/', {
    params: {
      num: num,
      limit: defaultLimit
    }
  })
}
/*
 * 获取歌单详情
 * id: 获取歌单详情 id
*/
export function getPlaylistDetail (id) {
  return axios.get('/playlist/detail/', {
    params: {
      id: id
    }
  })
}
/*
 * 获取音乐
 * id: 获取音乐 id
*/
export function getSongUrl (id) {
  return axios.get('/song/url', {
    params: {
      id: id
    }
  })
}

// 推荐歌单
export function getPersonalized (limit) {
  return axios.get('/personalized')
}

// 推荐新音乐
export function getPersonalizedNewsong (limit) {
  return axios.get('/personalized/newsong')
}
