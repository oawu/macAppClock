"use strict";/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */Load.VueComponent("form_message",{props:{type:{type:String,default:"warning",required:!1},messages:{type:Array,default:[],required:!1}},template:"\n    ul._form_message => *if=messages.length   :class='__' + (['warning', 'info'].includes(type) ? type : 'warning')\n      li => *for=(message, i) in messages   :key=i   *text=message"});