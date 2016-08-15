describe("Reactions", function() {

    var urlRelation = "http://metabolitics.biodb.sehir.edu.tr/api3/reaction/PTAr";
    it("should be response reaction detail (" + urlRelation + ")", function(done) {
        $.get(urlRelation, function(data) {
            expect(data.id).toEqual("PTAr");
            done();
        });
    });

    var urlRelatedRelation = "http://metabolitics.biodb.sehir.edu.tr/api3/relatedmetabolites/PTAr";
    it("should be response related metabolites detail (" + urlRelatedRelation + ")", function(done) {
        $.get(urlRelation, function(data) {
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

});
