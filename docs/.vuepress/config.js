module.exports = {
    title: 'c',
  	description: 'less is more',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: `/logo.jpg` }],
        ['script', { src: '/canvas.js' ,defer:'defer'}]
    ],
    themeConfig: {
        nav: [{ 
        	text: 'home', 
        	link: '/' 
        },{
            text: 'notes',
            items: [
                { text: 'front-end', link: '/admin/fe/' },
                { text: 'more', link: '/admin/more/'}
            ]
        },{
            text: 'resume',
            link: '/admin/resume/' 
        }],
        lastUpdated: true,
    }
}