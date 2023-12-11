let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://www.reddit.com/.rss');

    feed.items.forEach(item => {
        console.log(item)
    });

})();