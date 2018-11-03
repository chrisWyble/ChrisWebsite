(function(window){
	window.htmlentities = {
		encode : function(str) {
			var buf = [];
			
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}
			
			return buf.join('');
		},
		decode : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
	};
})(window);

function decodemsg(choice){
    if (choice=='email'){
        var msg = '&#99;&#119;&#103;&#105;&#97;&#110;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109'
    }
    else if (choice=='github'){
        var msg = '&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#99;&#104;&#114;&#105;&#115;&#87;&#121;&#98;&#108;&#101;&#47'
    }
    else if (choice=='linkedin'){
        var msg = '&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#108;&#105;&#110;&#107;&#101;&#100;&#105;&#110;&#46;&#99;&#111;&#109;&#47;&#105;&#110;&#47;&#99;&#104;&#114;&#105;&#115;&#116;&#111;&#112;&#104;&#101;&#114;&#45;&#119;&#121;&#98;&#108;&#101;&#47;'
    }
    else if (choice=='resume'){
        var msg = '&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#100;&#111;&#99;&#115;&#46;&#103;&#111;&#111;&#103;&#108;&#101;&#46;&#99;&#111;&#109;&#47;&#100;&#111;&#99;&#117;&#109;&#101;&#110;&#116;&#47;&#100;&#47;&#49;&#83;&#55;&#108;&#120;&#66;&#55;&#55;&#53;&#78;&#72;&#98;&#85;&#122;&#76;&#106;&#104;&#99;&#56;&#78;&#88;&#71;&#97;&#83;&#116;&#110;&#112;&#118;&#65;&#84;&#106;&#73;&#104;&#71;&#84;&#99;&#118;&#87;&#54;&#121;&#75;&#74;&#107;&#115;&#47;&#101;&#120;&#112;&#111;&#114;&#116;&#63;&#102;&#111;&#114;&#109;&#97;&#116;&#61;&#112;&#100;&#102;'
    }
    else if (choice=='source'){
        var msg = '&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#99;&#104;&#114;&#105;&#115;&#87;&#121;&#98;&#108;&#101;&#47;&#99;&#104;&#114;&#105;&#115;&#87;&#121;&#98;&#108;&#101;&#46;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#105;&#111;&#47;'
    }
    else{
        var msg=''
    }
    return htmlentities.decode(msg)

function encodemsg(msg){

    return htmlentities.encode(msg)

}
