module.exports = {
    title: 'c',
  	description: 'less is more',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: `/logo.jpg` }],
        ['link', { rel:'stylesheet', href: `/reset.css` }],
        ['script', { src: '/canvas.js' ,defer:'defer'}]
    ],
    themeConfig: {
        nav: [{ 
        	text: '首页', 
        	link: '/' 
        },{
            text: '笔记',
            items: [
                { text: '前端', link: '/admin/fe/' },
                { text: '更多', link: '/admin/more/'}
            ]
        }],
        sidebar: 'auto',
        lastUpdated: true,
    }
}