module.exports = {
    title:'第一個VuePress',
    description:'網站說明',
    base: '/BookTemplate/',
    // theme: "book",
    themeConfig: {
        locales:{
            '/':{
                sidebar: [
                    {
                      title: '第一章',
                      collapsable: false,
                      children: [
                        ['/chapter1/one', '第一小節'],
                        ['/chapter1/two', '第二小節'],
                      ]
                    },
                    {
                        title: '第二章',
                        collapsable: false,
                        children: [
                          ['/chapter2/one', '第一小節'],
                          ['/chapter2/two', '第二小節'],
                        ]
                      }
                ]
            }
        }
    }
}