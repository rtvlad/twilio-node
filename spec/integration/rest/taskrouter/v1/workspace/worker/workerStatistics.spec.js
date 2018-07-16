'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('WorkerStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .workers('WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .statistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        workerSid: 'WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Statistics')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'cumulative': {
              'reservations_created': 100,
              'reservations_accepted': 100,
              'reservations_rejected': 100,
              'reservations_timed_out': 100,
              'reservations_canceled': 100,
              'reservations_rescinded': 100,
              'activity_durations': [
                  {
                      'max': 0,
                      'min': 900,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Offline',
                      'avg': 1080,
                      'total': 5400
                  },
                  {
                      'max': 0,
                      'min': 900,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Busy',
                      'avg': 1012,
                      'total': 8100
                  },
                  {
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Idle',
                      'avg': 0,
                      'total': 0
                  },
                  {
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Reserved',
                      'avg': 0,
                      'total': 0
                  }
              ],
              'start_time': '2008-01-02T00:00:00Z',
              'end_time': '2008-01-02T00:00:00Z'
          },
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'worker_sid': 'WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers/WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .workers('WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .statistics().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
