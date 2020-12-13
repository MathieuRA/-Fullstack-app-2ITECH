'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
  created_date: {
    type: Date,
    default: Date.now,
    required: 'When the project was build ?',
  },
  developper_id: {
    type: String,
    required: 'Who did this ?',
  },
  techno: {
    type: Array,
    required: 'Wish techno was used ?',
  },
  title: {
    type: String,
    required: 'Title is needed',
  },
})
