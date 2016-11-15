// Just prints the ball and paddle CSS animations
// Sometimes doesn't work? Can't bother to look into it

var log = console.log;
var k = 10000000;
var w = 800, h = 400, bw = 16, pw = 16, ph = 64, off = 12;

var a = 0.55; // Initial angle
var x = w/2 - bw/2; // and
var y = h/2 - bw/2; // coordinates
var n = 20;
for(var i=0; i < n; i++) {
	var t = 0;
	var right;
	var steps = [];
	steps.push([x, y, t])
	while(k--) {
		x += Math.cos(a);
		y += Math.sin(a);
		if(x+bw >= w-off-pw || x <= off+pw ||
			y+bw >= h || y <= 0) {
			steps.push([x, y, t]);
			var end = false;
			if(x+bw >= w-off-pw) {
				if(i == n-1) {
					right = [(h-y), t];
					while(x+bw < w) {
						x += Math.cos(a);
						y += Math.sin(a);
						t++;
					}
					steps.push([x, y, t]);
					t *= 2;
					steps.push([x, y, t]);
					end = true;
				}
				else right = [y, t];
			}
			else if(x <= off+pw) {
				var _x = x, _y = y;
				while(_x > 0) {
					_x += Math.cos(a);
					_y += Math.sin(a);
					t++;
				}
				steps.push([0, _y, t]);
				end = true;
			}
			if(x+bw >= w-off-pw || x <= off+pw) {
				a = (Math.PI) - a;
				a += Math.random()/10;
			}
			else if(y+bw >= h || y <= 0) {
				a = 2*Math.PI - a;
			}
			if(end) break;
		}
		t++;
	}
	log("@keyframes ball"+(i+2)+" { // time: "+t/500);
	steps.forEach(function(s) {
		var percent = Math.round(100*s[2]/t);
		log("\t"+percent+"% {");
		log("\t\tleft: "+Math.round(s[0])+"px;");
		log("\t\ttop: "+ Math.round(s[1])+"px;");
		log("\t}");
	});
	log("}");	
	log("@keyframes paddle"+(i+2)+" {");
	var percent = Math.round(100*right[1]/t);
	log("\t"+percent+"% {");
	log("\t\ttop: "+ Math.max(0, Math.min(h-ph, Math.round(right[0])))+"px;");
	log("\t}");
	log("}");	
}
