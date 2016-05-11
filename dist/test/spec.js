'use strict';

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Your test', function () {

  it('should pass', function (done) {
    (1 + 1).should.eql(2);
    done();
  });
});