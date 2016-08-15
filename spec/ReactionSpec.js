describe("Reactions", function() {

    var urlRelation = "http://metabolitics.biodb.sehir.edu.tr/api3/reaction/PTAr";
    it("should be response metabolite detail (" + urlRelation + ")", function(done) {
        $.get(urlRelation, function(data) {
            expect(data.id).toEqual("PTAr");
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

});
