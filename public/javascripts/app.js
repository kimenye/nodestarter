function App()  {
    var self = this;


    Sammy(function() {

        this.get('', function() {
            console.log("Running the root url in sammy");
        });

    }).run();
}

ko.applyBindings(app);

