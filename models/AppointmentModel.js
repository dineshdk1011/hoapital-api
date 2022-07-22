const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const appointemntSechma = new Sechma({
  clinicid: {
    type: String,
    default: null,
  },
  doctor: {
    type: String,
    default: null,
  },
  firstname: {
    type: String,
    default: null,
  },
  middlename: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  contact: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  birthday: {
    type: String,
    default: null,
  },
  age: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  referby: {
    type: String,
    default: null,
  },
  reason: {
    type: String,
    default: null,
  },
  caseid: {
    type: String,
    default: null,
  },
  language: {
    type: String,
    default: null,
  },
  medicalHistory: {
    type: String,
    default: null,
  },
  procedures: {
    type: String,
    default: null,
  },
  idType: {
    type: String,
    default: null,
  },
  idnumber: {
    type: String,
    default: null,
  },
  history: {
    type: String,
    default: null,
  },
  Group: {
    type: String,
    default: null,
  },
  Grouplanguage: {
    type: String,
    default: null,
  },
  profile: {
    type: String,
    default: null,
  },
  doctornotification: {
    type: Array,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  patientnotification: {
    type: Array,
    default: null,
  },
  doctorid: {
    type: String,
    default: null,
  },
  area: {
    type: String,
    default: null,
  },
  patientid: {
    type: String,
    default: null,
  },
  fromtime: {
    type: String,
    default: null,
  },
  totime: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: null,
  },
  meetingtime: {
    type: String,
    default: null,
  },
  cancelby: {
    type: String,
    default: null,
  },
  cancelreason: {
    type: String,
    default: null,
  },
  sms: {
    type: String,
    default: null,
  },

});

const appointment = mongoose.model("appointment", appointemntSechma);
module.exports = appointment;
