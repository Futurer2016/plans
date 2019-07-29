import newMenu from './../assets/img/DbMovie/new_menu.gif';
import img1 from './../assets/img/DbMovie/img1.webp';
import img2 from './../assets/img/DbMovie/img2.webp';
import img3 from './../assets/img/DbMovie/img3.webp';
import img4 from './../assets/img/DbMovie/img4.webp';
import img5 from './../assets/img/DbMovie/img5.webp';
import img6 from './../assets/img/DbMovie/img6.webp';
import img7 from './../assets/img/DbMovie/img7.webp';
import img8 from './../assets/img/DbMovie/img8.webp';

export default {
  title: '电影',
  href: 'https://movie.douban.com',
  classifyMovie: {
    title: '影片分类',
    more: '更多'
  },
  classifyList: [
    {href: '#',title: '爱情'},
    {href: '#',title: '喜剧'},
    {href: '#',title: '剧情'},
    {href: '#',title: '动画'},
    {href: '#',title: '科幻'},
    {href: '#',title: '动作'},
    {href: '#',title: '经典'},
    {href: '#',title: '悬疑'},
    {href: '#',title: '犯罪'},
    {href: '#',title: '青春'},
    {href: '#',title: '文艺'},
    {href: '#',title: '惊悚'},
    {href: '#',title: '搞笑'},
    {href: '#',title: '励志'},
    {href: '#',title: '纪录片'},
    {href: '#',title: '战争'},
    {href: '#',title: '黑色幽默'},
    {href: '#',title: '恐怖'},
    {href: '#',title: '美国'},
    {href: '#',title: '日本'},
    {href: '#',title: '香港'},
    {href: '#',title: '中国'},
    {href: '#',title: '英国'},
    {href: '#',title: '韩国'},
    {href: '#',title: '中国大陆'},
    {href: '#',title: '法国'},
    {href: '#',title: '台湾'},
    {href: '#',title: '印度'}
  ],
  hotMovie: {
    title: '近期热门',
    more: '更多'
  },
  hotList: [
    {href: 'https://movie.douban.com/subject/30211551/', title: '恶人传'},
    {href: '#', title: '孟买酒店'},
    {href: '#', title: '阿丽塔：战斗天使'},
    {href: '#', title: '雷霆沙赞'},
    {href: '#', title: '夏目友人帐'},
    {href: '#', title: '地久天长'},
    {href: '#', title: '调音师'},
    {href: '#', title: '三夫'},
    {href: '#', title: '寄生虫'},
    {href: '#', title: '地狱男爵：血皇后崛起'}
  ],
  playingMovie: {
    title: '正在热映',
    more: '更多'
  },
  playingList: [
    {href:"#", img: img1, title: '哪吒之魔童降世', score: 8.8},
    {href:"#", img: img2, title: '银河补习班', score: 6.2},
    {href:"#", img: img3, title: '跳舞吧！大象', score: 0},
    {href:"#", img: img4, title: '灰猴', score: 6.4},
    {href:"#", img: img5, title: '狮子王', score: 7.4},
    {href:"#", img: img6, title: '扫毒2天地对决', score: 6.2},
    {href:"#", img: img7, title: '游戏人生 零', score: 8},
    {href:"#", img: img8, title: '未来机器城', score: 6}
  ],
  movieOptions: [
    {href: 'https://movie.douban.com/nowplaying/',title: '影讯&购票'},
    {href: '#',title: '选电影',img: newMenu},
    {href: '#',title: '电视剧'},
    {href: '#',title: '排行榜'},
    {href: '#',title: '分类'},
    {href: '#',title: '影评'},
    {href: '#',title: '预告片'},
    {href: '#',title: '问答'}
  ]
}