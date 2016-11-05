(function (events, nav, logger, terminal) {

    function getContainer(selector) {
        return document.querySelector(selector);
    }

    function addLeftNavigation(done) {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        nav.create(data, function (el) {
            getContainer('.left-menu').appendChild(el);

            events.on('click', el.querySelectorAll('li'), logInstance.logEvent);

            done();
        });
    }

    function addLogger(done) {
        var data = ['output: '];

        logger.createInstance(data, function (instance, el) {
            logInstance = instance;
            getContainer('.vanilla-terminal').appendChild(el);
            done();
        });
    }

    addLogger(function () {
        logInstance.log('logger components loaded');

        addLeftNavigation(function () {
            logInstance.log('navigation components loaded');
        });
    });

    var logInstance;

}(events, vanilla.nav, vanilla.logger, vanilla.terminal));
