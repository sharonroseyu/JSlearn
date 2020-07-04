var that;
class Tab {
    constructor(domId) {
        that = this;
        // 获取元素
        this.main = document.querySelector(domId);
        this.addbtn = this.main.querySelector('.tab_add');
        // li的父元素
        this.ul = this.main.querySelector('.first_nav ul');
        
        // sections的父元素
        this.fasection = this.main.querySelector('.tablist_box')
        // 初始化调用
        this.init();
    }
    // 初始化操作
    init() {
        // 初始化时获取初始化的dom元素
        this.updateNode();
        // 添加按钮事件 tab标签
        this.addbtn.onclick = ()=>this.addTab();

        // tab切换事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }

    // 获取所有的li和section元素
    updateNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
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
        that.clearClass(); // 先清除所有兄弟元素的选中
        console.log('执行增加');
        // 创建tab项和内容项，并把其追加到对应的父元素中，使用insertAdjacentHTML(),具体使用方法参考 MDN
        var li = '<li class="li_active"><span>TAB -- '+ String(Date.now()).slice(10) +'</span><span class= "iconfont">X</span></li>'
        var section = '<section class="con_active">TAB -- '+new Date()+'CONTEXT</section>';
        // 插入li tab元素
        that.ul.insertAdjacentHTML('beforeend',li);
        // 插入section到主题卡片
        that.fasection.insertAdjacentHTML('beforeend',section);
        // dom 更新后调用初始化方法
        that.init();
    }

    // 3. 删除
    removeTab() {}
}

new Tab('#tab');
