'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
  firstname: {
    type: String,
    required: 'Name of your new user',
  },
  job: {
    type: String,
    required: 'What is his job ?',
  },
  lastname: {
    type: String,
    required: 'Nickname of your new user',
  },
})
