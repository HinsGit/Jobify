import express from "express"
import {createJob, deleteJob, getAllJobs, updateJob, showStats} from "../controllers/jobsController.js"

const router = express.Router()

router.route("/").post(createJob).get(getAllJobs)

router.route("/stats").get(showStats)

//delete is for delete request and patch is for modify request such as update.
router.route("/:id").delete(deleteJob).patch(updateJob)

export default router