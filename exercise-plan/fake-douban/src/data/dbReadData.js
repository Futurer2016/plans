import newMenu from './../assets/img/DbMovie/new_menu.gif';
import n1 from '@/assets/img/DbRead/n1.jpg';
import n2 from '@/assets/img/DbRead/n2.jpg';
import n3 from '@/assets/img/DbRead/n3.jpg';
import n4 from '@/assets/img/DbRead/n4.jpg';
import o1 from '@/assets/img/DbRead/o1.jpg';
import o2 from '@/assets/img/DbRead/o2.jpg';
import o3 from '@/assets/img/DbRead/o3.jpg';
import o4 from '@/assets/img/DbRead/o4.jpg';

export default {
  title: '读书',
  href: 'https://book.douban.com',
  readOptions: [
    {href: '#', title: '分类浏览'},
    {href: '#', title: '阅读', img: newMenu},
    {href: '#', title: '作者'},
    {href: '#', title: '书评'},
    {href: '#', title: '购书单'}
  ],
  appList: [
    {href: '#', img: '', title: '豆瓣阅读'}
  ],
  newBook: {title: '新书速递', more: '更多'},
  newList: [
    {href: '#', img: n1, title: '聊天记录', author: '〔爱尔兰〕萨莉〔爱尔兰〕萨莉〔爱尔兰〕萨莉'},
    {href: '#', img: n2, title: '未来', author: '今何在'},
    {href: '#', img: n3, title: '普宁', author: '〔爱尔兰〕萨莉〔爱尔兰〕萨莉〔爱尔兰〕萨莉'},
    {href: '#', img: n4, title: '终止', author: '〔爱尔兰〕萨莉〔爱尔兰〕萨莉〔爱尔兰〕萨莉'},
  ],
  originalWorks: {href: '#', title: '原创数字作品', more: '更多'},
  originalList: [
    {href: '#', img: o1, title: '女神蒙上眼', author: '', cost: '免费'},
    {href: '#', img: o2, title: '猎火', author: 'Yohi', cost: '免费'},
    {href: '#', img: o3, title: '鸿燕零丁', author: '', cost: '免费'},
    {href: '#', img: o4, title: '后丧尸时代的田后丧尸时代的田', author: '', cost: '免费'},
  ],
  hotTip: {title: '热门标签', more: '更多'},
  hotList: [
    {
      list: [
        {href: '#', title: '[文学]'},
        {href: '#', title: '小说'},
        {href: '#', title: '随笔'},
        {href: '#', title: '日本文学'},
        {href: '#', title: '散文'},
        {href: '#', title: '诗歌'},
        {href: '#', title: '童话'},
        {href: '#', title: '名著'},
        {href: '#', title: '港台'},
        {href: '#', title: '更多'}
      ]
    },
    {
      list: [
        {href: '#', title: '[流行]'},
        {href: '#', title: '漫画'},
        {href: '#', title: '推理'},
        {href: '#', title: '绘本'},
        {href: '#', title: '青春'},
        {href: '#', title: '科幻'},
        {href: '#', title: '言情'},
        {href: '#', title: '奇幻'},
        {href: '#', title: '武侠'},
        {href: '#', title: '更多'}
      ]
    },
    {
      list: [
        {href: '#', title: '[文化]'},
        {href: '#', title: '历史'},
        {href: '#', title: '哲学'},
        {href: '#', title: '传记'},
        {href: '#', title: '设计'},
        {href: '#', title: '建筑'},
        {href: '#', title: '电影'},
        {href: '#', title: '回忆录'},
        {href: '#', title: '音乐'},
        {href: '#', title: '更多'}
      ]
    },
    {
      list: [
        {href: '#', title: '[生活]'},
        {href: '#', title: '旅行'},
        {href: '#', title: '励志'},
        {href: '#', title: '教育'},
        {href: '#', title: '职场'},
        {href: '#', title: '美食'},
        {href: '#', title: '灵修'},
        {href: '#', title: '健康'},
        {href: '#', title: '家具'},
        {href: '#', title: '更多'}
      ]
    },
    {
      list: [
        {href: '#', title: '[经管]'},
        {href: '#', title: '经济学'},
        {href: '#', title: '管理'},
        {href: '#', title: '商业'},
        {href: '#', title: '金融'},
        {href: '#', title: '营销'},
        {href: '#', title: '理财'},
        {href: '#', title: '股票'},
        {href: '#', title: '企业史'},
        {href: '#', title: '更多'}
      ]
    },
    {
      list: [
        {href: '#', title: '[科技]'},
        {href: '#', title: '科普'},
        {href: '#', title: '互联网'},
        {href: '#', title: '编程'},
        {href: '#', title: '交互设计'},
        {href: '#', title: '算法'},
        {href: '#', title: '通信'},
        {href: '#', title: '神经网络'},
        {href: '#', title: '更多'}
      ]
    }
  ]
}