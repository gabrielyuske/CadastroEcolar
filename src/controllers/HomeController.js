class HomeController {
    index(req, res) {
        res.json({
            tudoCerto: true,
        });
    };
    index2(req, res) {
        res.json({
            tudoCerto: false,
        });
    };

};
export default new HomeController();
