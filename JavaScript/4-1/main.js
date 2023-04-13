var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        keyword: '',
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
    },

    computed: {
        counting: function() {
            let count = 0;
            for(let i=0; i<this.list.length; i++) {
                if(!this.list[i].isChecked) {
                    count ++;
                }
            }
            return count;
        },

        serch: function () {
            var serchedlist = [];
            for (let i =0; i<this.list.length; i++) {             
                if (this.list[i].text.indexOf(this.keyword) !== -1) {
                    serchedlist.push(this.list[i]);
                }
            }
            return serchedlist;
        }
    }
});