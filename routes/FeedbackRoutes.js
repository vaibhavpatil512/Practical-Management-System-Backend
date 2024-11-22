import {createAdmin,createTeacher,createStudent,getAllUsers,getAllTeacher,getAllStudent, getAllAdmin} from "../controller/Usercontroller.js";
import { createSubject,getAllSubject } from "../controller/SubjectController.js";
import { createPractical,getAllPractical} from "../controller/PracticalController.js";
import { enrollStudent } from "../controller/EnrollController.js";
import { isAdmin,isAdminOrTeacher,isTeacher } from "../middleware/Middleware.js";
import express from "express";

const router  = express.Router();

router.post("/users/create",createAdmin);
router.get("/users/get",isAdmin,getAllUsers);
router.get("/admins/get",isAdmin,getAllAdmin);
router.get("/teachers/get",isAdmin,getAllTeacher);
router.get("/students/get",isAdminOrTeacher,getAllStudent);
router.post("/subject/create",isAdmin,createSubject);
router.post("/practicals/create",isTeacher,createPractical);

router.get("/subjects/get",getAllSubject);
router.post("/enroll/student",enrollStudent);
router.get("/praticals/get",getAllPractical);

export default router;



