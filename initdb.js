db.beerList.drop();

var beers = [
    {
        id:1,
        name:'デリリュウム',
        count:12
    },{
        id:2,
        name:'シュレンケルラ',
        count:6
    },{
        id:3,
        name:'コエド',
        count:12
    },{
        id:4,
        name:'JackHammer',
        count:12
    },{
        id:5,
        name:'マックシュフ',
        count:12
    },{
        id:6,
        name:'ポーラナー',
        count:12
    },{
        id:7,
        name:'湘南ゴールド',
        count:12
    }
];

db.beerList.save(beers);