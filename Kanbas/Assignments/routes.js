// Kanbas/Assignments/routes.js
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(cid);
    res.send(assignments);
  });

  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
    };
    const actualAssignment = await assignmentsDao.createAssignment(newAssignment);
    res.send(actualAssignment);
  });

  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await assignmentsDao.deleteAssignment(aid);
    res.send(status);
  });

  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await assignmentsDao.updateAssignment(aid, req.body);
    res.send(status);
  });
}