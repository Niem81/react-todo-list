'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdviceSchema = new Schema({
		text: String,
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
		score: Number,
		date: Number
	})

module.exports = mongoose.model('Advice', AdviceSchema)
