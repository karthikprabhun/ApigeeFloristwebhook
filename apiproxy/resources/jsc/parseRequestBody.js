var getPayload = context.getVariable("request.content");
var json = JSON.parse(getPayload);
var action = json.result.action;
var path = context.getVariable("request.uri");
if(action == 'placeOrder'){
var newPath = path.concat('/'+action);
context.setVariable("request.uri", newPath);
context.setVariable("api.ai.action", action);
}
