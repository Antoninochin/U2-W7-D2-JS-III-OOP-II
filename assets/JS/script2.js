class Page {

    constructor(name){
    this.items = [name]
    this.pageSize = []
    }

}

let lists = [
    new Page('pasta'),
    new Page('uova'),
    new Page('farina'),
    new Page('latte'),
    new Page('pane'),
    new Page('biscotti'),
    new Page('sale'),
    new Page('zucchero'),
    new Page('bicchieri'),
    new Page('thè')
]

function add(event){
    let list = document.getElementById('list-1')
        let ul = document.createElement('ul')
        list.appendChild('ul')
    for(let i = 0; i < lists.length; i++){
        let li = document.createElement('li')
        ul.appendChild('li')
        li.innerText = lists.name[i]
    }
}