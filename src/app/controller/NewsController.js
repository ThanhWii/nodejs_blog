
class NewsController {
    
    // [GET] /news
    index(req, res, next) {
        res.render('news');
    }

    // [GET] /news/:slug 
    show(req, res, next) {
        res.send('SHOW');
    };

}

module.exports = new NewsController;
