function App()  {
    var self = this;

    self.title = ko.observable("App Name");

    Sammy(function() {

        this.get('', function() {
            console.log("Running the root url in sammy");
        });

    }).run();
}

ko.applyBindings(new App());

