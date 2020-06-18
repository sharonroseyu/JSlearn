var that;
class Tab {
    constructor(domId) {
        that = this;
        // 获取元素
        this.main = document.querySelector(domId);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.addbtn = this.main.querySelector('.tab_add');
        // li的父元素
        this.ul = this.main.querySelector('.first_nav ul');
        
        // sections的父元素
        this.fasection = this.main.querySelector()
        // 初始化调用e
        this.init();
    }
    // 初始化操作
    init() {
        // 添加按钮事件 tab标签
        this.addbtn.onclick = ()=>this.addTab();

        // tab切换事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }

    // 1. 点击可切换
    toggleTab() {
        that.clearClass();  // 位置不能变更
        this.className = "li_active";
        that.sections[this.index].className = 'con_active';
    }

    // 清除classname
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = ''
        }
    }

    // 2. 添加tab
    addTab() {
        console.log('执行增加');
        // 创建tab项和内容项，并把其追加到对应的父元素中，使用insertAdjacentHTML(),具体使用方法参考 MDN
        var li = '<li class="li_active"><span>TAB -- '+Date.now()+'</span class= "iconfont"><span></span></li>'
        var section = '<section class="con_active">TAB -- '+new Date()+'CONTEXT</section>';
        // 插入li tab元素
        that.ul.insertAdjacentHTML('beforeend',li);


    }

    // 3. 删除
    removeTab() {}
}

new Tab('#tab');
