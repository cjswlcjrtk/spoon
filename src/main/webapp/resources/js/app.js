"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR = 'app호출하는 js파일을 찾을 수 없습니다.';
	let _, js,css,img;
	let run = x =>$.getScript(x+'/resources/js/cmm/router.js',()=>{
		$.extend(new Session(x))
		onCreate()
		})
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		
	}
	let onCreate =()=>{
		init()
		alert('형진')
	}
	
	
	return {run}
})();
