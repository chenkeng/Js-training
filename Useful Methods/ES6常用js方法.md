# 数组

> arrayMax   

*返回数组中的最大值。*
* Math.max()与扩展运算符(...)结合使用获取数组中的最大值。 
```js
const arrayMax = arr => Math.max(...arr);
// arrayMax([5,2,1])  # 5
```  
> arrayMin  

*返回数组中的最小值。*
* Math.min()与扩展运算符(...)结合使用获取数组中的最小值。 
```js
const arrayMin = arr => Math.min(...arr);
// arrayMin([9,8,5,1,4,3])  #1
```

> chunk

*将数组块划分为指定大小的较小数组。*
* 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
```js
const chunk = (arr,size) => Array.from({length : Math.ceil(arr.length / size)},
(v,i) => arr.slice(i * size , i* size + size)); 
// chunk([1,2,3,4,5], 2)   # [[1,2],[3,4],[5]]
```

> compact 
*从数组中移除false值*
* 使用Array.filter()筛选出 falsey值(false,null,0,"",undefined 和 NaN)。
```js
const compact = (arr) => arr.filter(Boolean);
// compact ([0,1,false,2,"",3,'a','e'*10,NaN,'s',34])  # [1,2,3,'a','s',34]
```

> countOccurrences
*计算数组中值的出现次数*
* 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。

```js
const countOccurrences = (arr,value) => arr.reduce((a,v)=> v===value? a+1:a+0,0);
// countOccurrences([1,1,2,2,3,3,1],1)  # 3
```

> deepFlatten
*深度拼合数组*
* 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (…) 来拼合数组。递归拼合作为数组的每个元素。
```js
const deepFlatten =arr=>[].concat(...arr.map(v=>Array.isArray(v)?deepFlatten(v):v))
// deepFlatten([1,2],3,[4,[5],6]) # [1,2,3,4,5,6]
```
> difference 
*返回两个数组之间的差异*
* 从b创建Set,然后使用 Array.filter() 只保留a b 中不包含的值。
```js
const difference =(a,b) =>
{ const s = new Set(b);
return a.filter(x=>!s.has(x)); }
// difference ([1,2,3],[1,2,4]) # [3]
```

> distinctValuesOfArray
*返回数组的所有不同值。*
* ES6 Set 和 ...rest 运算符放弃所有重复的值。
```js
const distinctValuesOfArray = arr =>[...new Set(arr)];
// distinctValuesOfArray([1,2,2,3,4,4,5])  # [1,2,3,4,5] 
```

> dropElements 
移除数组中的元素,直到传递的函数返回true。返回数组中的其余元素。在数组中循环，使用Array.shift() 将数组的第一个元素除去，直到函数的返回值为true。返回其余元素。

```js
const dropElements = (arr,func)=>{
    while(arr.length>0 && !func(arr[0])) arr.shift();
    return arr;
};
// dropElements ([1,2,3,4],n=>n>=3)  # [3,4]
```
> everyNth
*返回数组中的每个第n个元素。*
* 使用Array.filter()创建一个包含给定数组的每个第n个元素的新数组。
```js
const everyNth= (arr,nth) => arr.filter((e,i) => i%nth ===0);
// everyNth([1,2,3,4,5,6],2) # [1,3,5]
```

> filterNonUnique
*筛选出数组中的非唯一值。*
* 对于只包含唯一值的数组, 请使用Array.filter()。
```js
const filterNonUnique = arr => arr.filter(i=>arr.indexOf(i)===arr.lastindexOf(i));
// filterNonUnique([1,2,2,3,4,4,5]) # [1,3,5]
``` 

> flatten 
*拼合数组(2维)*
* 使用Array.reduce()获取数组中的所有元素和concat()以拼合他们。
```js
const flatten = arr=> arr.reduce((a,v)=>a.concat(v),[]);
// flatten([1,[2],3,4]) # [1,2,3,4]
```

> flattenDepth
*将数组向上拼合到指定深度*
* 使用递归，递减depth，每层深度为1. 使用Array.reduce()和Array.concat() 来合并元素和数组。基本情况下，对于等于1的depth停止递归。省略第二个元素，depth仅拼合到1的深度(单个拼合)。
```js
const flattenDepth=(arr,depth=1)=>
depth !=1 ? arr.reduce((a,v)=>a.concat(Array.isArray(v)?flattenDepth(v,depth-1):v),[]):arr.reduce((a,v)=>a.concat(v),[]);
// flattenDepth([1,[2],[[[3],4],5]],2) # [1,2,[3],4,5]
```
> groupby
*根据给定函数对数组元素进行分组。*
* 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象，其中得键是从映射得结果产生的。
```js
const groupBy=(arr,func)=>arr.map(typeof func==='function'?func:val=>val[func]).reduce((acc,val,i)=>{acc[val]=(acc[val]||[]).concat(arr[i]);return acc;},{});

// groupBy([6.1,4.2,6.3],Math.floor) # {4:[4.2],6:[6.1,6.3]}
// groupBy(['one', 'two', 'three'], 'length') -> {3: ['one', 'two'], 5: ['three']}
```
> head
*返回列表的头。*
* 使用arr[0]可返回传递的数组的第一个元素。
```js
const head = arr => arr[0];
// head([1,2,3]) -> 1
```

> initial
*返回除最后一个数组之外的所有元素。 有点类似 pop()*
* 使用 “arr.slice(0,-1)” 返回数组的最后一个元素。
```js
const initial = arr => arr.slice(0, -1);
// initial([1,2,3]) -> [1,2]
```

> initializeArrayWithRange
*初始化包含指定范围内的数字的数组。*
* 使用Array(end-start)创建所需长度的数组Array.map()以填充区域中所需的值。可以省略start以使用默认值0.
```js
const initializeArrayWithRange = (end, start = 0) =>
Array.from({ length: end - start }).map((v, i) => i + start);
// initializeArrayWithRange(5) # [0,1,2,3,4]
// initializeArrayWithRange(10,1)  # [1,2,3,4,5,6,7,8,9] 
```

> initializeArrayWithValues
*初始化并填充具有指定值的数组。*
* 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.
```js
const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
// initializeArrayWithValues(5, 2) -> [2,2,2,2,2]
```


> intersection
*返回两个数组中存在的元素的列表。*
* 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.
```js
const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };
// intersection([1,2,3], [4,3,2]) -> [2,3]
```

> last
*返回数组中的最后一个元素。*
* 使用arr.length – 1可计算给定数组的最后一个元素的索引并返回它。
```js
const last = arr => arr[arr.length - 1];
// last([1,2,3]) -> 3
```