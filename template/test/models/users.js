//断言库
const expect = require('chai').expect;
const model = require('../../app/controller/');

describe ('测试demo', function(){
    it ('乘积应该为2', function(){
        expect((1*3)).to.be.equal(2);
    });
});

describe ('测试代理接口', function(){
    it ('最终值非空', function( done ){
        var _this = this;
        //console.log(model.Users);
        model.Users.geProxytUserInfo().then(function(data){
            //最大执行时间
            _this.timeout(10000);
            //非null 非undefined
            expect(data).to.exist;
            done();
        });
        
    });
});

describe ('测试查询项目列表接口', function(){
    it ('最终值非空', function( done ){
        var _this = this;
        //console.log(model.Users);
        model.Users.getUserInfo().then(function(data){
            //最大执行时间
            _this.timeout(10000);
            //非null 非undefined
            expect(data).to.exist;
            done();
        });
        
    });
});