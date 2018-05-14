module.exports = {
    title: 'ciwei-c',
  	description: 'less is more',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: `/logo.jpg` }],
        ['script', { src: '/canvas.js' ,defer:'defer'}]
    ],
    themeConfig: {
        nav: [{ 
        	text: '首页', 
        	link: '/' 
        },{
            text: '前端',
            items: [
                { text: 'html', link: '/nav/html/' },
                { text: 'css', link: '/nav/css/' },
                { text: 'javascript', link: '/nav/js/' },
                { text: 'framework', link: '/nav/framework/' }
            ]
        },{
        	text: '随笔',
        	link: '/nav/essay/'
        }
    ]}
}