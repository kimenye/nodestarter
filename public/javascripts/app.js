function App()  {
    var self = this;

    this.title = ko.observable("Prezzy");

    Sammy(function() {

        this.get('', function() {
            console.log("Running the root url in sammy");
        });

    }).run();
}

ko.applyBindings(new App());

