//断言库
const expect = require('chai').expect;
const servers = require('../../app/servers/Users');
const model = require('../../app/model/');
const users = servers({ model });
describe ('测试获取用户信息', () => {
    it ('结果不为空', async () => {
        const data = await users.getUserInfo();
        expect(data).to.exist;
    });
});