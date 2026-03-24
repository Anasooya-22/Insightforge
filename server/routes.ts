import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  console.log("REGISTER ROUTES RUNNING");

  // ================= DEBUG =================
  app.get("/api/test", (_req, res) => {
    res.json({ message: "Test route working" });
  });

  // ================= STUDY ROUTES =================

  // CREATE STUDY
  app.post("/api/studies", async (req, res) => {
    try {
      const { title, description, createdBy } = req.body;

      console.log("CREATE STUDY BODY:", req.body);

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const study = await storage.createStudy({
        title,
        description,
        createdBy,
      });

      console.log("STUDY CREATED:", study);

      res.json(study);
    } catch (err) {
      console.error("ERROR CREATE STUDY:", err);
      res.status(500).json({ error: "Failed to create study" });
    }
  });

  // GET ALL STUDIES
  app.get("/api/studies", async (_req, res) => {
    try {
      const studies = await storage.getStudies();
      res.json(studies);
    } catch (err) {
      console.error("ERROR FETCH STUDIES:", err);
      res.status(500).json({ error: "Failed to fetch studies" });
    }
  });

  // GET SINGLE STUDY
  app.get("/api/studies/:id", async (req, res) => {
    try {
      const study = await storage.getStudyById(req.params.id);

      if (!study) {
        return res.status(404).json({ message: "Study not found" });
      }

      res.json(study);
    } catch (err) {
      console.error("ERROR FETCH STUDY:", err);
      res.status(500).json({ error: "Failed to fetch study" });
    }
  });

  // DELETE STUDY
  app.delete("/api/studies/:id", async (req, res) => {
    try {
      await storage.deleteStudy(req.params.id);
      res.json({ message: "Study deleted" });
    } catch (err) {
      console.error("ERROR DELETE STUDY:", err);
      res.status(500).json({ error: "Failed to delete study" });
    }
  });

  // ================= QUESTION ROUTES =================

  // CREATE QUESTION
  app.post("/api/questions", async (req, res) => {
    try {
      const { studyId, questionText, questionType } = req.body;

      console.log("CREATE QUESTION BODY:", req.body);

      if (!studyId || !questionText) {
        return res.status(400).json({
          message: "studyId and questionText are required",
        });
      }

      const question = await storage.createQuestion({
        studyId,
        questionText,
        questionType,
      });

      console.log("QUESTION CREATED:", question);

      res.json(question);
    } catch (err) {
      console.error("ERROR CREATE QUESTION:", err);
      res.status(500).json({ error: "Failed to create question" });
    }
  });

  // GET QUESTIONS BY STUDY
  app.get("/api/questions/:studyId", async (req, res) => {
    try {
      const questions = await storage.getQuestionsByStudyId(
        req.params.studyId
      );
      res.json(questions);
    } catch (err) {
      console.error("ERROR FETCH QUESTIONS:", err);
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  });

  // ================= RESPONSE ROUTES =================

  // SUBMIT RESPONSE (FIXED + DEBUG LOGS)
  app.post("/api/responses", async (req, res) => {
    try {
      console.log("BODY RECEIVED:", req.body);

      const { questionId, userId, answer } = req.body;

      if (!questionId || !userId || !answer) {
        return res.status(400).json({
          message: "questionId, userId and answer are required",
        });
      }

      const response = await storage.createResponse({
        questionId,
        userId,
        answer,
      });

      console.log("RESPONSE SAVED:", response);

      res.json(response);
    } catch (err) {
      console.error("ERROR IN RESPONSE ROUTE:", err);
      res.status(500).json({ error: "Failed to submit response" });
    }
  });

  // ================= FULL STUDY =================

  // GET STUDY WITH QUESTIONS
  app.get("/api/studies/:id/full", async (req, res) => {
    try {
      const studyId = req.params.id;

      const study = await storage.getStudyById(studyId);

      if (!study) {
        return res.status(404).json({ message: "Study not found" });
      }

      const questions = await storage.getQuestionsByStudyId(studyId);

      res.json({
        ...study,
        questions,
      });
    } catch (err) {
      console.error("ERROR FETCH FULL STUDY:", err);
      res.status(500).json({ error: "Failed to fetch full study" });
    }
  });

  return httpServer;
}