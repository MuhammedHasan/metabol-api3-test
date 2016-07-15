describe("Analyze", function() {

    var urlFbaStart = "http://biodb.sehir.edu.tr/api2/fba/start";

    function startFbaAndTest(callback) {
        $.get(urlFbaStart, function(data) {
            expect(data.key).toBeDefined();
            callback(data.key);
        });
    }

    it("should be start fba analyze (" + urlFbaStart + ")", function(done) {
        startFbaAndTest(function(key) {
            done();
        });
    });

    var urlAnalyze = "http://biodb.sehir.edu.tr/api2/fba/";

    function getIterationAndTest(key, iterationId, callback) {
        $.get(urlAnalyze + key + '/' + iterationId, function(data) {
            expect(data.fluxes).toBeDefined();
            expect(data.constraints).toBeDefined();
            expect(data.nodes).toBeDefined();
            expect(data.links).toBeDefined();
            callback();
        });
    }

    it("should be start get iteration-1 (" + urlFbaStart + ")", function(done) {

        startFbaAndTest(function(key) {
            getIterationAndTest(key, 1, function() {
                done();
            });
        });
    });

    it("should be start get iteration-2 (" + urlFbaStart + ")", function(done) {

        startFbaAndTest(function(key) {
            getIterationAndTest(key, 1, function() {
                getIterationAndTest(key, 2, function() {
                    done();
                })
            });
        });
    });

    it("should be start get iteration-3 (" + urlFbaStart + ")", function(done) {

        startFbaAndTest(function(key) {

            getIterationAndTest(key, 1, function() {
                getIterationAndTest(key, 2, function() {
                    getIterationAndTest(key, 3, function() {
                        done();
                    })
                });
            });
        });
    });

    it("should be start get iteration-4 (" + urlFbaStart + ")", function(done) {

        startFbaAndTest(function(key) {

            getIterationAndTest(key, 1, function() {
                getIterationAndTest(key, 2, function() {
                    getIterationAndTest(key, 3, function() {
                        getIterationAndTest(key, 4, function() {
                            done();
                        });
                    });
                });
            });
        });
    });

    it("should be start get iteration-5 (" + urlFbaStart + ")", function(done) {

        startFbaAndTest(function(key) {

            getIterationAndTest(key, 1, function() {
                getIterationAndTest(key, 2, function() {
                    getIterationAndTest(key, 3, function() {
                        getIterationAndTest(key, 4, function() {
                          getIterationAndTest(key, 5, function() {
                              done();
                          });
                        });
                    });
                });
            });
        });
    });


});
