function Sort (sourceArray) {
    if(! (sourceArray instanceof Array) ) {
        throw new TypeError("arguments must be Array")
    }
    this._data = sourceArray;
}

// 冒泡排序
/*
* 两辆相邻比较，大的则将换位置
* 时间复杂度 o(n2次方)
*/
Sort.prototype.bubble = function (order = 1) {
    if(order == 0) throw new TypeError("arguments must number and not be 0");
    for(let i = 0;i < this._data.length - 1; i ++){
        let isSort = true;
        for(let j = 0; j < this._data.length -1 - i; j++) {
            if(this._data[j] > this._data[j+1]) {
                let temp = this._data[j+1];
                this._data[j+1] = this._data[j];
                this._data[j] = temp;
                isSort = false;
            }
        }
        if(isSort) break;
    }

    if(order < 0){
        return this._data.reverse();
    }
    return this._data;
}

// 选择排序
// 遍历未排序的部分，挑选出最大（小）的数与有序数组的后一位交换
// o(2n次方)
Sort.prototype.selection = function (order = 1) {
    if(order == 0) throw new TypeError("arguments must number and not be 0");
    for (let i = 0; i < this._data.length - 1; i ++) {
        let min = i; //保存最小元素的索引
        for (let j = i; j < this._data.length; j ++) {
            if(this._data[min] > this._data[j]) min = j; // 最小元素的索引
        }
        // 把最小的值交换位置的有序数组的
        let temp = this._data[i];
        this._data[i] = this._data[min];
        this._data[min] = temp;
    }
    if(order < 0){
        return this._data.reverse();
    }
    return this._data;
}

// 
var arr = [20,43,21,3,33,42,12,1,2,2,45,12,56,48,99,121,454,55,22,458];
var s = new Sort(arr);

// bubble sort
// console.log(s.bubble().toString());

// selection sort
console.log(s.selection(-1).toString());

