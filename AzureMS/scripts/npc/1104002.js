var item = 4001893;
var reqcount = 10;
var item2 = 4033929;
var reqcount1 = 6;


function start() {
	status = -1;
	action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	}
        else {
        status--;
        cm.dispose();
        return;
    }
            
            
            
    if (status == 0) {
        
        var text = "Hello, you want to change your coins i see?"
        
        text += "\r\n#e#rNeed 10#k #i" +item+ " ,\r\n  #e#rNeed 6#k #i" +item2;
        
        
	cm.sendYesNo(text);
	
	
        }
       
     if (status == 1) {
       
       if (cm.haveItem(item, reqcount) && cm.haveItem(item2,reqcount1)){
         var text = "Here is your coin.";
         
         cm.gainItem(item, -reqcount);
         cm.gainItem(item2, -reqcount1);
         cm.gainItem(4001895, 1);
         
         cm.sendOk(text);
         cm.dispose();
         
         
        } else {
            
            cm.sendOk("#e#rYou don't have enough materials.\r\nPlease Come back when you have enough.")
            cm.dispose();
        }
        
        
        
     }
        
        
        
        
        
    }