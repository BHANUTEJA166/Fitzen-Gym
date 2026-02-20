import axios from "axios";
import { BASE_URL } from "../config/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// CLASSES 
export const getClasses = () => api.get("/Classes");
export const getClassById = (id) => api.get(`/Classes/${id}`);
export const addClass = (data) => api.post("/Classes", data);
export const updateClass = (id, data) => api.put(`/Classes/${id}`, data);
export const deleteClass = (id) => api.delete(`/Classes/${id}`);

// TRAINERS 
export const getTrainers = () => api.get("/Trainers");
export const getTrainerById = (id) => api.get(`/Trainers/${id}`);   // ✅ ADD THIS
export const addTrainer = (data) => api.post("/Trainers", data);
export const updateTrainer = (id, data) => api.put(`/Trainers/${id}`, data);
export const deleteTrainer = (id) => api.delete(`/Trainers/${id}`);

// SCHEDULES 
export const getSchedules = () => api.get("/Schedules");
export const getScheduleById = (id) => api.get(`/Schedules/${id}`); // ✅ ADD THIS
export const addSchedule = (data) => api.post("/Schedules", data);
export const updateSchedule = (id, data) => api.put(`/Schedules/${id}`, data);
export const deleteSchedule = (id) => api.delete(`/Schedules/${id}`);

// ENQUIRIES 
export const getEnquiries = () => api.get("/Enquiries");
export const getEnquiryById = (id) => api.get(`/Enquiries/${id}`);  // ✅ ADD THIS
export const addEnquiry = (data) => api.post("/Enquiries", data);
export const updateEnquiry = (id, data) => api.put(`/Enquiries/${id}`, data);
export const deleteEnquiry = (id) => api.delete(`/Enquiries/${id}`);
