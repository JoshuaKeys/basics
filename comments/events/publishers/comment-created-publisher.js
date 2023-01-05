const { Publisher } = require('@giantsoftnats/common');

class CommentCreatedublisher extends Publisher {
  exchange = 'COMMENT_CREATED';
  subject = 'info'
}

module.exports = CommentCreatedublisher;