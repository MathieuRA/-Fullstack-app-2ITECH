'use strict'

import mongoose, { CallbackError } from 'mongoose'
import { Request, Response } from 'express'

import UsersModel from '../models/usersModel'

import {
  deleteProjects,
  getProjectsByUserId,
} from './projectsController'

const User = mongoose.model('User', UsersModel)

// Unique user
export const addUser = (req: Request, res: Response) => {
  const user = new User(req.body)

  user.save((err: CallbackError, data: object) => {
    if (err) {
      res.status(403)
      res.send(err)
      throw err
    }
    res.status(201).json(data)
  })
}

export const deleteUser = async (
  req: Request,
  res: Response
) => {
  // Delete every project of this user. We dont want project without user
  Promise.all([
    getProjectsByUserId(req, res, req.params.id),
    User.findOneAndDelete({ _id: req.params.id }),
  ])
    .then(() => {
      res.status(200).json({
        message: 'User and his projects are deleted',
      })
    })
    .catch((err) => {
      if (err) {
        res.status(403)
        res.send(err)
        throw err
      }
    })
}

export const getUser = (
  req: Request,
  res: Response,
  next,
  fromController = false
) =>
  User.findById(
    req.params.id,
    (err: CallbackError, data: object) => {
      if (err) {
        if (!fromController) {
          res.status(403)
          res.send(err)
          throw err
        }
      }
      if (fromController) {
        return data
      }
      res.status(200).json(data)
    }
  )

export const updateUser = (req: Request, res: Response) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, data) => {
      if (err) {
        res.status(403)
        res.send(err)
        throw err
      }
      res.status(200).json(data)
    }
  )
}

// Multiple users
export const deleteUsers = (
  req: Request,
  res: Response
) => {
  // Delete users and projects in the same time. We dont want project without a user in the DB
  Promise.all([
    User.deleteMany({}),
    deleteProjects(req, res, true),
  ])
    .then(() => {
      res.status(200).json({
        message: 'Every users and projects are deleted',
      })
    })
    .catch((err) => {
      res.status(403)
      res.send(err)
      throw err
    })
}

export const getUsers = (req: Request, res: Response) => {
  User.find({}, (err, data) => {
    if (err) {
      res.status(403)
      res.send(err)
      throw err
    }
    res.status(200).json(data)
  })
}
