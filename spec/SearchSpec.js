describe("Search", function() {

    var urlSearchPrefix = "http://metabolitics.biodb.sehir.edu.tr/api3/searchprefix/p";
    it("should be response search prefix (" + urlSearchPrefix + ")", function(done) {
        $.get(urlSearchPrefix, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

    var urlSearch = "http://metabolitics.biodb.sehir.edu.tr/api3/search/pro";
    it("should be response urlSearch (" + urlSearch + ")", function(done) {
        $.get(urlSearch, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

});
