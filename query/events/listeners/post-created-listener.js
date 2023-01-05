const { Listener } = require('@giantsoftnats/common');
const Query = require('../../models/query-schema');

class PostCreatedListener extends Listener {
  subject = 'info';
  exchangeName = 'POST_CREATED'
  
  onMessage = async (data) => {
    const postId = data._id;
    const title = data.title;
    const query = new Query({postId, title});
    const result = await query.save();
    console.log(result, 'hahahahaha');
  }
}

exports.PostCreatedListener = PostCreatedListener;