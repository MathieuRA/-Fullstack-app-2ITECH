'use strict'

import mongoose, { CallbackError } from 'mongoose'
import { Request, Response } from 'express'

import { getUser } from './usersController'

import ProjectsModel from '../models/projectsModel'

const Project = mongoose.model('Project', ProjectsModel)

// Unique project
export const addProject = async (
  req: Request,
  res: Response
) => {
  // Verify if the developper_id is compatible with user in db.
  req.params.id = req.body.developper_id
  try {
    const response = await getUser(req, res, null, true)

    if (response == null) {
      res.status(404).send({ message: 'User not found' })
      return
    }

    const project = new Project(req.body)

    project.save((err, data: object) => {
      if (err) {
        res.status(403)
        res.send(err)
        throw err
      }
      res.status(201).json(data)
    })
  } catch (error) {
    res.status(403).json({
      message: 'Read the documentation of the API.',
    })
  }
}

export const deleteProject = (
  req: Request,
  res: Response
) => {
  Project.findOneAndDelete(
    { _id: req.params.id },
    undefined,
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

export const getProject = (req: Request, res: Response) => {
  Project.findOne(
    { _id: req.params.id },
    (err: CallbackError, data: object) => {
      if (err) {
        res.status(403)
        res.send(err)
        throw err
      }
      res.status(200).json(data)
    }
  )
}

export const updateProject = (
  req: Request,
  res: Response
) => {
  Project.findOneAndUpdate(
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

// Multiple projects
export const deleteProjects = (
  req: Request,
  res: Response,
  fromController = false
) => {
  Project.deleteMany({}, { new: true }, (err) => {
    if (err) {
      res.status(403)
      res.send(err)
      throw err
    }

    !fromController &&
      res
        .status(200)
        .json({ message: 'Every projects deleted' })
  })
}

export const getProjects = (
  req: Request,
  res: Response
) => {
  Project.find({}, (err, data) => {
    if (err) {
      res.status(403)
      res.send(err)
      throw err
    }
    res.status(200).json(data)
  })
}

// By User
export const getProjectsByUserId = (
  req: Request,
  res: Response,
  developperId: String
) => Project.deleteMany({ developper_id: developperId })
