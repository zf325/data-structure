function List () {
    this.store = [];
    this.size = 0;
    this.posi = 0;
}

List.prototype.getElem = function (posi) {
    return this.store[posi] ;
}
List.prototype.getPosi = function (elem) {
    const index = this.store.indexOf(elem);
    return index > -1 ? index : -1;
}
List.prototype.insert = function (ele,after) {
    const index = this.store.indexOf(ele);
    if(index > -1) {
        this.store.splice(index + 1, 0, after);
        this.size ++;
        return true;
    }
    return false;
}
List.prototype.remove = function (elem) {
    const index = this.store.indexOf(elem);
    if(index > -1) {
        this.store.splice(index + 1, 1);
        this.size --;
        if(this.posi >= this.size) this.posi = this.size - 1; // 矫正因为元素删除问题，导致当前元素位置的溢出
        return true;
    }
    return false;
}
List.prototype.clear = function () {
    this.store = [];
    this.posi = 0;
    this.size = 0;
}
List.prototype.front = function () {
    this.posi = 0;
}
List.prototype.end = function () {
    this.end = this.size - 1;
}
List.prototype.pre = function () {
    this.posi --;
    if(this.posi < 0) this.posi = 0;
    return this.posi;
}
List.prototype.next = function () {
    this.posi ++;
    if(this.posi >= this.size) this.posi = this.size - 1;
    return this.posi;
}
List.prototype.moveTo = function (elem) {
    const index = this.getCurPosi(elem);
    if(index > -1){
        this.posi = index;
        return this.posi;
    }
    return -1;
}
List.prototype.getCurPosi = function () {
    return this.posi;
}
List.prototype.toString = function () {
    return this.store.toString();
}