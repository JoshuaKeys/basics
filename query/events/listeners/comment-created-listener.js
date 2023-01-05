const { Listener } = require('@giantsoftnats/common');
const Query = require('../../models/query-schema');

class CommentCreatedListener extends Listener {
  subject = 'info';
  exchangeName = 'COMMENT_CREATED'
  
  onMessage = async (data) => {
    console.log(data, typeof data);
    const content = data.content
    const postId = data.postId;
    const commentId = data._id;

    const query = await Query.findOne({postId});

    if(query) {
      const update = await Query.updateOne({postId}, {comments: [
        ...query.comments,
        {content, commentId}
      ]})
      console.log('Hello', 'Done', update, query)
    } else {
      console.log('Not found')
    }
  }
}

exports.CommentCreatedListener = CommentCreatedListener