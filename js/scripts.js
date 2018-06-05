$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();
    var bad1=0;
    var bad2=0;
    var good=0;
    //$("#warning-responses").show();
    $("input:checkbox[name=warnings]:checked").each(function(){
      bad1 += 1;
      // var warningBad = $(this).val();
      // $('#warning-responses').append(warningBad + "<br>");
    });
    //$("#symptom-responses").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){

      bad2 += 1;
      // var symptomsBad = $(this).val();
      // $('#symptom-responses').append(symptomsBad + "<br>");
    });
    //$("#goodpractice-responses").show();
    $("input:checkbox[name=good-practices]:checked").each(function(){
      good += 1;
      // var practicesGood = $(this).val();
      // $('#goodpractice-responses').append(practicesGood + "<br>");
    });
    var total = bad1 + bad2 - good;

    if(total <= 2) {
      $("#sol1").show()
    } else if (total <= 6){
      $("#sol2").show()
    } else if (total <= 10){
      $("#sol3").show()
    } else {
      $("#sol4").show()
    }
    $('#stress-quiz').hide();
  });
});
