const { Publisher } = require('@giantsoftnats/common');

class PostCreatedPublisher extends Publisher {
  exchange = 'POST_CREATED';
  subject = 'info'
}

module.exports = PostCreatedPublisher;