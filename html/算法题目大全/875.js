/**
 * 找出最小常数K，使得珂珂能在H小时内吃完piles 堆香蕉
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  if (piles.length >= H) {
      // 因为每个小时只能吃一堆，吃完不能换，所以堆数等于小时数时，最大的堆就是解；循环找出最大的那一堆
      return piles.reduce((a, b) => Math.max(a, b));
  }
  // 排序，实际上不需要，可以直接用piles.reduce((a, b) => Math.max(a, b)) 找出最大值就行
  piles.sort((a, b) => b - a);
  let speedMax = piles[0];
  let speedMin = 1;

  // 二分查找；
  while (speedMax > speedMin) {
      const k = Math.floor((speedMin + speedMax) /2);
      // 计算当前速度下需要消耗的时间；
      const hours = piles.reduce((total, pre) => total + Math.ceil(pre/k), 0);
      if (hours > H) {
        // [k + 1, speedmax]
        speedMin = k + 1;
      } else {
        // [speedMin, k]
        speedMax = k;
      }
      // console.log(speedMin, speedMax, k);
  }
  // 这里之所以取的是speedMin， 而不是K，是因为当speedMin = k + 1造成 speedMin === speedMax时，
  // 已经跳出了二分，所以这时K是不对的，那为什么speedMin 就对喃， 因为speedMax已经经过了验证
  return speedMin;
};
