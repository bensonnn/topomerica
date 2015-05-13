(function() {
  console.log($);
    var map = $('#container').datamaps({
      scope: 'usa',
      fills : {
        defaultFill: '#E1E1E1'
      },
      done : attachClickEvent
    });


    function attachClickEvent(datamap) {
      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography,d) {
        var clicked = d3.select(this)
        clicked.style('fill', 'gray')


        console.log(this);
      });
    }
})();
