function drawBar(b){var a=$(b).data("percentage");if(a>100){a=100}$(b).animate({"width":a+"%"},"slow")}function randomiseBar(b){var a=Math.floor(Math.random()*(100-20+1))+20;$(b).animate({"width":a+"%"},"slow");$(b).attr("data-percentage",a)}function drawMeasure(b){var a=$(b).data("percentage");if(a>100){a=100}$(b).animate({"width":a+"%"},"slow")}function randomiseMeasure(b){var a=Math.floor(Math.random()*(100-20+1))+20;$(b).animate({"width":a+"%"},"slow");$(b).attr("data-percentage",a)};