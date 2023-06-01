"use strict";/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */var Alert=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"",c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[],d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:[];return this instanceof Alert?void(this._vue=new Vue({data:{display:!1,isLoading:!1,title:"",message:null,buttons:[],inputs:[],status:{p0:!1,p1:!1}},methods:{present:function present(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,c=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return this.$el||this.$mount()&&document.body.append(this.$el),c?setTimeout(function(){return setTimeout(function(){setTimeout(function(){a.$refs.alertInput&&a.$refs.alertInput[0]?a.$refs.alertInput[0].focus():a.$refs.alertButton&&a.$refs.alertButton[0]&&a.$refs.alertButton[0].focus()},50),a.status.p1=!0,"function"==typeof b&&b()},300,a.status.p0=!0)},50,this.display=!0):setTimeout(function(){a.status.p1=!0,"function"==typeof b&&b()},50,this.display=!0,this.status.p0=!0),this},dismiss:function dismiss(){var a=this,b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,c=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return c?setTimeout(function(){return setTimeout(function(){a.display=!1,"function"==typeof b&&b()},300,a.status.p0=!1)},10,this.status.p1=!1):setTimeout(function(){a.display=!1,"function"==typeof b&&b()},1,this.status.p1=!1,this.status.p0=!1),this}},template:"<div id=\"__oaui-alert\" v-if=\"display\" :class=\"{ __p0: status.p0, __p1: status.p1 }\"><div :class=\"{ _body: true, __loading: isLoading }\"><template v-if=\"isLoading\"><div class=\"_loading\"><div><i v-for=\"i in [0,1,2,3,4,5,6,7,8,9,10,11]\" :key=\"i\" :class=\"'__i' + i\"></i></div><span>{{ message.text }}</span></div></template><template v-else><b class=\"_title\" v-if=\"title\">{{ title }}</b><span class=\"_subtitle\" v-if=\"message && message.text !== '' && message.isHTML\" v-html=\"message.text\"></span><span class=\"_subtitle\" v-if=\"message && message.text !== '' && !message.isHTML\">{{ message.text }}</span><input class='_input' v-for=\"(input, i) in inputs\" :key=\"i\" type=\"text\" :placeholder=\"input.placeholder\" v-model.trim=\"input.value\" ref=\"alertInput\" /><div class=\"_buttons\" v-if=\"buttons.length\" :n=\"buttons.length\"><button class='_button' v-for=\"(button, i) in buttons\" :key=\"i\" @click=\"button.click ? button.click(...inputs.map(input => input.value)) : {}\" :class=\"{ '__preferred': button.preferred, '__warning': button.isRed }\" ref=\"alertButton\">{{ button.text }}</button></div></template></div></div>"}),this.title(a).message(b),d.forEach(this.input),c.forEach(this.button)):new Alert(a,b,c)};Alert.prototype.present=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,b=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return"boolean"==typeof a&&(b=a),"function"==typeof b&&(a=b),(this._vue.present("function"==typeof a&&a.bind(this,this),b),this)},Alert.prototype.dismiss=function(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,c=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return"boolean"==typeof b&&(c=b),"function"==typeof c&&(b=c),(this._vue.dismiss(function(){"function"==typeof b&&b.call(a,a),a.reset("","",[],[])},c),this)},Alert.prototype.title=function(a){return"string"==typeof a&&(this._vue.title=a),this},Alert.prototype.message=function(a){var b=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];return"string"==typeof a&&(this._vue.message={text:a,isHTML:b}),this},Alert.prototype.button=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],d=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];return a&&this._vue.buttons.push(new Alert._Button(a,"function"==typeof b?b.bind(this,this):null,c,d)),this},Alert.prototype.input=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return this._vue.inputs.push(new Alert._Input(a,b)),this},Alert.prototype.reset=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[];return this.title(a),this.message(b),this._vue.buttons=c,this._vue.inputs=d,this._vue.isLoading=!1,this},Alert.prototype.loading=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"\u8B80\u53D6\u4E2D\u2026",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return"function"==typeof a&&(b=a,a="\u8B80\u53D6\u4E2D\u2026"),this.reset().message(a)._vue.isLoading=!0,"function"==typeof b&&b.call(this,this),this},Object.defineProperty(Alert,"shared",{get:function get(){return this._shared===void 0?this._shared=this():this._shared}}),Alert._Button=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,c=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],d=!!(3<arguments.length&&arguments[3]!==void 0)&&arguments[3];return this instanceof Alert._Button?void(this.text=a,this.click=b,this.isRed=c,this.preferred=d):new Alert._Button(a,b,c,d)},Alert._Input=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";return this instanceof Alert._Input?void(this.value=b,this.placeholder=a):new Alert._Input(a,b)};