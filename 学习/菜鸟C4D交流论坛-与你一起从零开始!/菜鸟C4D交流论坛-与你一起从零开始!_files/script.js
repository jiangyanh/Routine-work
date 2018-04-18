var JQscroll = jQuery.noConflict(true); 
JQscroll(function() {
	var e = JQscroll("#rocket-to-top"),
	t = JQscroll(document).scrollTop(),
	n,
	r,
	i = !0;
	JQscroll(window).scroll(function() {
		var t = JQscroll(document).scrollTop();
		t == 0 ? e.css("background-position-x") == "0px" ? e.fadeOut("slow") : i && (i = !1, JQscroll(".level-2").css("opacity", 1), e.delay(100).animate({
			marginTop: "-1000px"
		},
		"normal",
		function() {
			e.css({
				"margin-top": "-125px",
				display: "none"
			}),
			i = !0
		})) : e.fadeIn("slow")
	}),
	e.hover(function() {
		JQscroll(".level-2").stop(!0).animate({
			opacity: 1
		})
	},
	function() {
		JQscroll(".level-2").stop(!0).animate({
			opacity: 0
		})
	}),
	JQscroll(".level-3").click(function() {
		function t() {
			var t = e.css("background-position-x");
			if (e.css("display") == "none" || i == 0) {
				clearInterval(n),
				e.css("background-position-x", "0px");
				return
			}
			switch (t){
			case "0px":
				e.css("background-position-x", "-298px");
				break;
			case "-298px":
				e.css("background-position-x", "-447px");
				break;
			case "-447px":
				e.css("background-position-x", "-596px");
				break;
			case "-596px":
				e.css("background-position-x", "-745px");
				break;
			case "-745px":
				e.css("background-position-x", "-298px");
			}
		}
		if (!i) return;
		n = setInterval(t, 50),
		JQscroll("html,body").animate({scrollTop:0},"slow");
	});
});