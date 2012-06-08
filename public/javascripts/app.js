function App()  {
    var self = this;

    self.title = ko.observable("Prezzy");
    self.searchTerm = ko.observable();

    self.presentations = ko.observableArray([
        { id: 1000, by: "Jack Johnson", title: "Mobile First Development", at: "Melbourne Convention Hall Room 31"},
        { id: 2000, by: "Stuart Little", title: "How to avoid those pesky cats", at: "KICC Hall 21"},
        { id: 3000, by: "Chuck Norris", title: "How to kick ass in Development", at: "Chuck\'s dojo"}
    ]);

//    self.results = ko.computed()


    Sammy(function() {

        this.get('', function() {
            console.log("Running the root url in sammy");
        });

    }).run();
}

ko.applyBindings(new App());

