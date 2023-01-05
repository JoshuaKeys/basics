const { Listener } = require('@giantsoftnats/common');

class CommentCreatedListener extends Listener {
  subject = 'info';
  exchangeName = 'COMMENT_CREATED'
  
  onMessage = async (data) => {
    console.log(data);
  }
}

exports.CommentCreatedListener = CommentCreatedListener