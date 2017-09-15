 var res = JSON.parse(context.getVariable("response.content"));
 var attachments = [];
var unix_ts = Math.round(+new Date()/1000);

 for( var i = 0 ; i< res.PRODUCTS.length ; i +=1){
     
     var item_name = res.PRODUCTS[i].NAME;
     var price = res.PRODUCTS[i].PRICE;
     var code = res.PRODUCTS[i].CODE;
     var img = res.PRODUCTS[i].SMALL;
     
      
    temp = 
            {  
               "title": item_name,
                "thumb_url": img,
               "color": "#36a64f",
               "title_link": "https://null.null.null/",
              "fields": [
                {
                    "title": "Item Code",
                    "value": code,
                    "short": false
                },
                 {
                    "title": "Price",
                    "value": price+"USD",
                    "short": false
                }
            ],
             "actions": [
             {
                    "name": "item",
                    "text": "Add To Cart",
                    "type": "button",
                    "style": "danger",
                    "value": "{apigee.CODE},{apigee.PRICE}"
                },
                {
                    "name": "item",
                    "text": "Order Now",
                    "type": "button",
                    "value": "{apigee.CODE},{apigee.PRICE}"
                }
                
            ],
             "footer": "Team Florist",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": unix_ts
            };
         
   
   attachments.push(temp);
 }

 var main = {  "data":{  
      "slack":{  
         "attachments":attachments
      }
   }
};
 
 context.setVariable("res_obj",JSON.stringify(main));