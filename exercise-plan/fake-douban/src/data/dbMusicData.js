import n1 from '@/assets/img/DbMusic/n1.jpg';
import n2 from '@/assets/img/DbMusic/n2.jpg';
import n3 from '@/assets/img/DbMusic/n3.jpg';
import n4 from '@/assets/img/DbMusic/n4.jpg';
import n5 from '@/assets/img/DbMusic/n5.jpg';
import n6 from '@/assets/img/DbMusic/n6.jpg';
import n7 from '@/assets/img/DbMusic/n7.jpg';
import n8 from '@/assets/img/DbMusic/n8.jpg';
import p1 from '@/assets/img/DbMusic/p1.jpg';
import p2 from '@/assets/img/DbMusic/p2.jpg';
import p3 from '@/assets/img/DbMusic/p3.jpg';
import p4 from '@/assets/img/DbMusic/p4.jpg';
import p5 from '@/assets/img/DbMusic/p5.jpg';
import h1 from '@/assets/img/DbMusic/h1.jpg';
import h2 from '@/assets/img/DbMusic/h2.jpg';
import h3 from '@/assets/img/DbMusic/h3.jpg';
import h4 from '@/assets/img/DbMusic/h4.jpg';
import h5 from '@/assets/img/DbMusic/h5.jpg';
import h6 from '@/assets/img/DbMusic/h6.jpg';

export default {
  title: '音乐',
  href: '#',
  musicOptions: [
    {href: '#', title: '音乐人'},
    {href: '#', title: '潮潮豆瓣音乐周'},
    {href: '#', title: '金羊毛计划'},
    {href: '#', title: '专题'},
    {href: '#', title: '排行榜'},
    {href: '#', title: '分类浏览'},
    {href: '#', title: '乐评'},
    {href: '#', title: '豆瓣FM'},
    {href: '#', title: '歌单'},
    {href: '#', title: '阿比鹿音乐奖'}
  ],
  appList: [
    {href: '#', title: '豆瓣FM', offset: -250},
    {href: '#', title: '豆瓣音乐人', offset: -50}
  ],
  populars: {href: '#', more: '更多', title: '本周流行音乐人'},
  popularList: [
    {img: p1, href: '#', title: 'MHP', school: '流派: 电子Eletronica', count: 1604},
    {img: p2, href: '#', title: 'Mr.Ray', school: '流派: 摇滚 Rock', count: 251},
    {img: p3, href: '#', title: '柴樱', school: '流派: 民谣 Folk', count: 107},
    {img: p4, href: '#', title: 'D.EAR', school: '流派: 世界音乐 World ', count: 182},
    {img: p5, href: '#', title: 'Chinese Football', school: '流派: 摇滚 Rock', count: 2767},
  ],
  newDisc: {href: '#',  more: '更多', title: '豆瓣新碟榜'},
  newDiscList: [
    {href: '#', img: n1, title: '哇', artist: '李宇春 Chris Lee', score: 8.5},
    {href: '#', img: n2, title: 'LUNAR', artist: '周笔畅 BiBi Chou', score: 8.0},
    {href: '#', img: n3, title: '讓水倒流', artist: '伍佰&CHINA BLUE', score: 7.9},
    {href: '#', img: n4, title: '乐队的夏天 第4期', artist: '吴青峰 九连真人 痛仰 面孔乐队 南无乐队 刺猬 旺福 海龟先生', score: 8.0},
    {href: '#', img: n5, title: 'No.6 Collaborations Project', artist: 'Ed Sheeran', score: 5.6},
    {href: '#', img: n6, title: 'Lover', artist: 'Taylor Swift', score: 7.2},
    {href: '#', img: n7, title: 'City Lights', artist: '边伯贤 Byun Baekhyun', score: 7.9},
    {href: '#', img: n8, title: 'What A Life', artist: 'EXO-SC', score: 6.3}
  ],
  hotMusic: {href: '#', title: '热门歌单', more: '更多'},
  hotMusicList: [
    {href: '#', img: h1, title: '大写的SAD 小写的cry'},
    {href: '#', img: h2, title: '再见，我们最后的时代曲！'},
    {href: '#', img: h3, title: '不要否认，你的电子音乐启蒙...'},
    {href: '#', img: h4, title: '上半年有哪些值得聆听的专辑...'},
    {href: '#', img: h5, title: '一张歌单带你走进Swing大乐队'},
    {href: '#', img: h6, title: 'HOLY MOUNTAIN'},
  ]
}