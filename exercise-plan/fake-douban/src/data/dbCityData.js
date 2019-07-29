import m1 from '@/assets/img/DbCity/m1.jpg';
import m2 from '@/assets/img/DbCity/m2.jpg';
import m3 from '@/assets/img/DbCity/m3.jpg';
import m4 from '@/assets/img/DbCity/m4.jpg';

export default {
  title: '同城',
  href: '#',
  cityMenu: [
    {href: '#', title: '近期活动'},
    {href: '#', title: '主办方'},
    {href: '#', title: '舞台剧'}
  ],
  activities: {href: '#', title: '活动标签'},
  activityGroups: [
    {
      href: '#',
      title: '音乐',
      list: [
        {href: '#', title: '小型现场'},
        {href: '#', title: '音乐会'},
        {href: '#', title: '演唱会'},
        {href: '#', title: '音乐节'}
      ]
    },
    {
      href: '#',
      title: '戏剧',
      list: [
        {href: '#', title: '话剧'},
        {href: '#', title: '音乐剧'},
        {href: '#', title: '舞剧'},
        {href: '#', title: '歌剧'},
        {href: '#', title: '戏曲'},
        {href: '#', title: '其他'}
      ]
    },
    {
      href: '#',
      title: '聚会',
      list: [
        {href: '#', title: '生活'},
        {href: '#', title: '集市'},
        {href: '#', title: '摄影'},
        {href: '#', title: '外语'},
        {href: '#', title: '桌游'},
        {href: '#', title: '夜店'},
        {href: '#', title: '交友'},
        {href: '#', title: '美食'},
        {href: '#', title: '派对'}
      ]
    },
    {
      href: '#',
      title: '电影',
      list: [
        {href: '#', title: '主题放映'},
        {href: '#', title: '影展'},
        {href: '#', title: '影院活动'}
      ]
    },
    {
      href: '#',
      title: '其他',
      list: [
        {href: '#', title: '讲座'},
        {href: '#', title: '展览'},
        {href: '#', title: '运动'},
        {href: '#', title: '旅行'},
        {href: '#', title: '公益'}
      ]
    }
  ],
  hotActivities: {href: '#', title: '沈阳·本周热门活动', more: '更多'},
  hotActivityList: [
    {href: '#', img: m1, title: '“天空之城”宫崎骏久石让动漫视听音乐会', time: '8月3日 周六 19:00 - 21:00', addr: '盛京大剧院-音乐厅 辽宁省沈阳市和平区沈水路518号', count: 17},
    {href: '#', img: m2, title: '“放牛班的春天”童声合唱团音乐会', time: '8月2日 周五 19:00 - 21:00', addr: '盛京大剧院-歌剧厅 沈阳市沈河区沈水路518号', count: 16},
    {href: '#', img: m3, title: '宫崎骏视听音乐会系列——夏之青春', time: '8月24日 周六 15:00 - 16:30', addr: '沈阳市文化宫 沈阳市和平区民主路72号', count: 2},
    {href: '#', img: m4, title: '看开心麻花新作《求婚女王》见证地表最强精分现场', time: '8月2日 周五 - 8月4日 周日', addr: '兴华北街8号 1905文化创意园木木剧场', count: 13},
  ]
}