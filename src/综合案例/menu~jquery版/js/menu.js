var menu3 = (function () {
    var $ulbox = $('.menu-box');
    var padding = 0;
    return {
        init() {
            this.getJson();
            this.events();
        },
        events() {
            var _this = this;
            // 利用事件委托
            $ulbox.on('click', 'li:has(ul)', function () {
                // 折叠打开
                $(this).children("ul").slideToggle();
                // 两个类名切换
                $(this).children("div").children("i").toggleClass("qf-shop-plus").toggleClass("qf-shop-jianhao")
            })
            $ulbox.on('click', 'li', function (e) {
                e.stopPropagation();
            })
        },
        getJson() {
            $.getJSON('json/menu.json', (data) => {
                this.insertData(data, $ulbox, padding);
            })
        },

        insertData(data, parentNode, padding) {
            // 创建ul元素
            var $ul = $('<ul></ul>');
            data.forEach((item) => {
                var $li = $("<li>")
                var $div = $(`<div style="padding-left: ${padding}px;">${item.title}</div>`)
                $li.append($div);
                $ul.append($li);
                // 如果含有子集
                if (item.child) {
                    // 给div添加一个图标
                    var $i = $("<i class='qf qf-shop-jianhao'></i>");
                    $div.append($i);
                    this.insertData(item.child, $li,  padding + 20);
                }
            })

            parentNode.append($ul);

        }

    }

})()