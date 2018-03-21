'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animal').del()
    .then(function () {
      // Inserts seed entries
      return knex('animal').insert([
        {id: 1, animalName: '狮子', desc: '狮子是草原之王'},
        {id: 2, animalName: '老虎', desc: '老虎是百兽之王'},
        {id: 3, animalName: '大熊猫', desc: '大熊猫是我们国家的国宝'},
        {id: 4, animalName: '马', desc: '马可以骑着上战场'},
        {id: 5, animalName: '小毛驴', desc: '小毛驴可以拉磨'},
        {id: 6, animalName: '奶牛', desc: '奶牛可以生产牛奶'},
        {id: 7, animalName: '黄牛', desc: '黄牛可以吃'},
        {id: 8, animalName: '水牛', desc: '水牛可以笠田'},
        {id: 9, animalName: '山羊', desc: '山羊会爬山听说过吗'},
        {id: 10, animalName: '小羊羔', desc: '小羊羔咩咩咩'},
        {id: 11, animalName: '绵羊', desc: '绵羊可以产羊毛'},
        {id: 12, animalName: '小猪', desc: '小猪是笨笨的'},
        {id: 13, animalName: '小猫', desc: '小猫很乖巧'},
        {id: 14, animalName: '小狗', desc: '小狗很可爱'},
        {id: 15, animalName: '小白兔', desc: '小白兔萌萌哒'},
        {id: 16, animalName: '鹅', desc: '鹅鹅鹅曲项向天歌'},
        {id: 17, animalName: '母鸡', desc: '母鸡咯咯哒'},
        {id: 18, animalName: '公鸡', desc: '公鸡喔喔喔早上会打鸣'},
        {id: 19, animalName: '小鸡', desc: '小鸡是黄色的'},
        {id: 20, animalName: '鸭子', desc: '鸭子嘎嘎嘎会游泳'},
        {id: 21, animalName: '小鸭子', desc: '小鸭子也是小黄鸭很可爱'}
      ]);
    });
};
