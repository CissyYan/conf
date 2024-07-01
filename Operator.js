/**
 * Update : 2024/06/13
 *
 * 1. 功能：为 SYN 已订阅用户快速在 SubStore 中添加额外节点；
 * 2. 在https://github.com/Aurora-20/PublicConfig/raw/main/SubStore/Operator.js基础上增加高倍率（。
 *
 */

function operator(proxies) {
  /**
   * @param insertIndex: 插入元素的位置
   */
  let insertIndex = 0;
  /**
   * @param flag: 是否找到插入位置
   */
  let flag = false;
  // * 插入第一个元素（在 🇭🇰 的最后插入）
  for (const proxy of proxies) {
    // * 判断是否找到 🇭🇰
    if (/^🇭🇰.*$/.test(proxy.name)) {
      // * 找到插入位置
      flag = true;
    } else if (flag) {
      // * 🇭🇰 后的第一个元素
      flag = false;
      break;
    }
    // * 更新插入元素的位置
    insertIndex++;
  }
  // * 在 insertIndex 插入元素
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50013,
      name: "🇭🇰 HK 丁香酰氧胺 0.01x",
    })
  );
  // * 重置插入元素位置
  insertIndex = 0;
  for (const proxy of proxies) {
    if (/^🇸🇬.*$/.test(proxy.name)) {
      flag = true;
    } else if (flag) {
      flag = false;
      break;
    }
    insertIndex++;
  }
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 0.01x",
    })
  );

  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 0.01x",
    })
  );

  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 54001,
      name: "🎯 TG 碳酸二甲酯",
    })
  );
  
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 54002,
      name: "🎯 TK 澳士蛋白酶 x 3.00",
    })
  );
  
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 54003,
      name: "🎯 TK 日库木糖醇 x 3.00",
    })
  );
  
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 54005,
      name: "🎯 TK 美罗培南素 x 3.00",
    })
  );
  
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-aaa.811920.xyz",
      port: 54006,
      name: "🇳🇬 NG 尼达莫德酮 x 3.00",
    })
  );
  return proxies;
}
