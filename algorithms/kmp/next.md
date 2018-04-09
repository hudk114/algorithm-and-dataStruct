# KMP

## next
### 概论
1. next数组的核心是计算出每次回退匹配失败时需要回退到哪个值比较
1. 新的比较数是第next[i]个
1. 意即arr[i]与arr[next[i]]之前的串每个值是一样的
1. 意即next[i]的值k是使得arr[0] ~ arr[k - 1] === arr[i - k] ~ arr[i - 1]的最大k值(0 < k < i)
1. 也可以理解arr在位置i之前的最大相同前后缀长度

### 类型
显然，这分成三种情况
1. i === 0 此时第一个字符都不相同，回退也无效，因此next[0] = null
1. 找不到k(0 < k < i)使得arr[0] ~ arr[k - 1] === arr[i - k] ~ arr[i - 1]，说明之前的子串没有重复的，必须回退到第一个开始比较，因此next[i] = 0
1. next[i] = k

### 计算
显然，三种类型中的第一种情况最好处理。此外，当知道了next[i - 1]的时候，可以通过数学归纳法计算next[i]
1. 设next[i - 1] = j，说明arr[0] ~ arr[j - 1] === arr[i - j - 1] ~ arr[i - 2]
1. 若arr[j] === arr[i - 1]，说明arr[0] ~ arr[j] === arr[i - j - 1] ~ arr[i - 1]，此时next[i] = j + 1
1. 若arr[i] !== arr[i - 1]，说明arr[0] ~ arr[j] !== arr[i - j - 1] ~ arr[i - 1]，需要找其他子串
1. 假设next[i] = k，意即arr[0] ~ arr[k] === arr[i - k - 1] ~ arr[i - 1]，那么arr[0] ~ arr[k - 1] === arr[i - k - 1] ~ arr[i - 2]，显然，这个子串包含在arr[i - j - 1] ~ arr[i - 2], 也就是arr[0] ~ arr[j - 1]中
1. 所以，arr[0] ~ arr[k - 1]其实是arr在位置j之前的最大相同前后缀
1. 因此，k满足arr[k] = arr[i - 1]，且k必然满足...next[next[j]]，通过递归的方式可以求的k值

### 改进
第一版本相当于 https://github.com/hudk114/algorithm-and-datastruct/blob/master/algorithms/kmp/next.js 中的next0
<b>改进点</b>
1. 通过next[i]来计算next[i + 1]，而不是通过next[i - 1]来计算next[i]
1. 循环结束的条件若next[i] = j + 1, 或者j === null，令其为-1，可以合并为 next[i] = j + 1;
1. 循环初始时j = next [i]，当j的值不会为null后可以改为 next[i] = ++j，减少一次赋值操作

由此得出第二版本 https://github.com/hudk114/algorithm-and-datastruct/blob/master/algorithms/kmp/next.js 中的next1
<b>改进点</b>
1. 内层while循环中没有对i进行操作，而外层循环只对i进行了判断，因此可以去掉一层循环，并对条件进行修改减少判断次数

由此得出第三版本 https://github.com/hudk114/algorithm-and-datastruct/blob/master/algorithms/kmp/next.js 中的next

## 针对KMP的改进
next数组计算的是最大相同前后缀，但是没有考虑应用到KMP算法中的实际情况
对于KMP算法的比较中，str[i] !== subStr[j]时，回退到next[j]比较，然而，若此时subStr[next[j]] === subStr[j]，很明显这次比较没有意义
1. 当找到arr[0] ~ arr[j] === arr[i - j - 1] ~ arr[i - 1]时， 若arr[j + 1] === arr [i + 1]，说明这次比较没有意义
1. 此时需要在arr[0] ~ arr[j]中寻找最大相同前后缀k使得arr[0] ~ arr[k] === arr[i - k - 1] ~ arr[k - 1]且arr[k + 1] !== arr [i + 1]
1. 通过数学归纳法，很明显next[i + 1] = next [j + 1]

由此可得出针对KMP的改进next算法 https://github.com/hudk114/algorithm-and-datastruct/blob/master/algorithms/kmp/next.js 中的kmpNext