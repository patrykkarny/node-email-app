const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');

const { Schema } = mongoose;


const SurveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('surveys', SurveySchema);