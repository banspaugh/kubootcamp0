var someList = document.getElementById("selDataset");

    d3.json('/names', function (error, data) {

        for (var i = 0; i < data.length; i++) {
            var nameItem = document.createElement("option");
            var something = data[i];
            nameItem.innerHTML = something;
            someList.appendChild(nameItem);
        }
    });

    function optionChanged(value) {
        makeSumPie(value)
        makeSumBubs(value)
    }

    function init() {
        let current_thing = 'BB_940'
        d3.json('/samples/' + current_thing, function (error, data) {
            if (error) throw error;
            var otu_id = []
            var otu_value = []
            var response = data
            for (var i = 0; i < 10; i++) {
                otu_id.push(data[0][i]);
            }
            for (var i = 0; i < 10; i++) {
                otu_value.push(data[1][i]);
            }

            var data = [{
                values: otu_value,
                labels: otu_id,
                type: "pie"
            }];



            Plotly.plot("pie", data);

            var trace1 = {
                x: response[0],
                y: response[1],
                mode: 'markers',
                marker: {
                    size: response[1],
                    color: response[0]
                }
            };
            var data1 = [trace1];

            Plotly.newPlot('bubbles', data1);
        });
    }
    init();

    function makeSumPie(value) {
        d3.json('/samples/' + value, function (error, data) {
            if (error) throw error;
            var otu_id = []
            var otu_value = []
            for (var i = 0; i < 10; i++) {
                otu_id.push(data[0][i]);
            }
            for (var i = 0; i < 10; i++) {
                otu_value.push(data[1][i]);
            }

            var data = [{
                values: otu_value,
                labels: otu_id,
                type: "pie"
            }];
            updatePlotly(data);
        });
    }

    function makeSumBubs(value) {
        d3.json('/samples/' + value, function (error, data) {
            if (error) throw error;

            var trace1 = {
                x: data[0],
                y: data[1],
                mode: 'markers',
                marker: {
                    size: data[1],
                    color: data[0]
                }
            };
            var data1 = [trace1];
            console.log(data[0])
            console.log(data[1])
            updateBubs(data1)
        });
    }

    function updatePlotly(newData) {
        var PIE = document.getElementById("pie");
        Plotly.newPlot(PIE, newData);
    }

    function updateBubs(newData) {
        var bubs = document.getElementById("bubbles");
        Plotly.newPlot(bubs, newData);
    }
