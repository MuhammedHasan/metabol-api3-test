describe("Metabolite", function() {

    var urlMetabolite = "http://metabolitics.biodb.sehir.edu.tr/api3/metabolite/CE6234[n]";
    it("should be response metabolite detail (" + urlMetabolite + ")", function(done) {
        $.get(urlMetabolite, function(data) {
            expect(data.id).toEqual("CE6234[n]");
            done();
        });
    });

    var urlRelatedReactions = "http://metabolitics.biodb.sehir.edu.tr/api3/relatedreactions/CE6234[n]";
    it("should be response metabolite's related reactions (" + urlRelatedReactions + ")", function(done) {
        $.get(urlRelatedReactions, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            done();
        });
    });

    it("should be response metabolite at same time", function(done) {
        $.get(urlMetabolite, function(data) {
            expect(data.id).toEqual("CE6234[n]");
            done();
        });

        $.get(urlRelatedReactions, function(data) {
            expect(data.reactions.length > 0).toBeTruthy();
            done();
        });
    });

});
