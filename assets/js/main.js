$(document).ready(function(){

    var line_graph = new LineGraph({ 
        y_min: -20,
        y_max: 30,
        y_step: 10,
        years: [ 2010, 2011, 2012, 2013, 2014 ],
        data:   {
                    columns:    [      
                                    ['line1', 0, 10, 15, 18, 25],
                                    ['line2', 0, 10, 0, -5, -10]
                                ]
                }
    });

    line_graph.render();

    // save to png
    $(".js-save").on("click", function(e){
        createChartImages({});
    });

});