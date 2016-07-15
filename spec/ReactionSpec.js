describe("Reactions", function() {

    var urlRelation = "http://biodb.sehir.edu.tr/api3/reaction/GLYK";
    it("should be response metabolite detail (" + urlRelation + ")", function(done) {
        $.get(urlRelation, function(data) {
            expect(data.id).toEqual("GLYK");
            expect(data.metabolites.length > 0).toBeTruthy();
            done();
        });
    });

});
