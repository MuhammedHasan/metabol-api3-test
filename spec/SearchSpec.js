describe("Search", function() {

    var urlSearchPrefix = "http://biodb.sehir.edu.tr/api2/searchprefix/p";
    it("should be response search prefix (" + urlSearchPrefix + ")", function(done) {
        $.get(urlSearchPrefix, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

    var urlSearch = "http://biodb.sehir.edu.tr/api2/search/pro";
    it("should be response urlSearch (" + urlSearch + ")", function(done) {
        $.get(urlSearch, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

});
