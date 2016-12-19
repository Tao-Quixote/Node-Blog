/**
 * Created by taoxin on 2016/12/19.
 */
'use strict';

// 外部模块调用
var express  = require('express'),
    pug      = require('pug'),
    mongoose = require('mongoose');

// 自定义模块调用
var Home = require('./home');
var App = require('./app');

var app = express();

// 初始化app的各种设置
App.set(app);

// Home页面各种方法初始化
Home(app);

// 启动server
App.startServer(app);