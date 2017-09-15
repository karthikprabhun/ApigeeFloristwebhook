 var available_dates = JSON.parse(context.getVariable("response.content"));
var list_dates = available_dates.DATES;
 var start_date = list_dates[0];
 
 var end_date = list_dates[list_dates.length-1];
 
var unix_ts = Math.round(+new Date()/1000);
  context.setVariable('today_date', unix_ts);
function search(obj,arr){
  
  for(i =0;i<list_dates.length-1;i++) {
      if(arr[i] === obj)
      return true;
  } 
    
}
 var fesible_date = '{ "data":{ "slack":{ "text": " product is available b/w '+ start_date + ' to ' + end_date +' " }}} '
  var no_fesible_date = '{ "data":{ "slack":{ "text": " product not available" }}} '       
  
if(search("09/05/2017",list_dates)){
  context.setVariable('response.content', fesible_date);
}else{
    context.setVariable('response.content', no_fesible_date);
}


 