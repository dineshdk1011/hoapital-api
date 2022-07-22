var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var summary = require("./routes/SummaryRouter");
var usersRouter = require("./routes/UserRoutes");
var appointmentRouter = require("./routes/AppointemntRoutes");
var patientRouter = require("./routes/PatientRoutes");
var feedbackRouter = require("./routes/FeedbackRoutes");
var progressnotesRouter = require("./routes/ProgressNotesRoutes");
var galleryRouter = require("./routes/GalleryRoutes");
var FeedbackRoutes = require("./routes/FeedBacksRouter");
var clinicgallery = require("./routes/ClinicgalleryRoutes");
var patientgallery = require("./routes/PatientimageRoutes");
var patientvideo = require("./routes/PatientvideoRoutes");
var PlanRoutes = require("./routes/PlanRoutes");
var TemplateRoutes = require("./routes/TemplateRoutes");
var smsTemplateRoutes = require("./routes/smsTemplateRoutes");
var ReviewRoutes = require("./routes/ReviewRoutes");
var ImagemarkingRoutes = require("./routes/Imagemarking");
var MedicineRoutes = require("./routes/MedicineRoutes");
var whatsappTemplateRoutes = require("./routes/whatsapptemplateRoutes");
var emailTemplateRoutes = require("./routes/emailTemplateRoutes");
var pharmacyloginRouter = require("./routes/PharmacyLoginRouter");
var accountsloginRouter = require("./routes/AccountsLoginRouter");
var pdrugmasterRouter = require("./routes/Pdrugmasterrout");
var pharmacySmsRouter = require("./routes/PharmacySmsRouter");
var pharmacyEmailRouter = require("./routes/PharmacyEmailRouter");
var pharmacywhatsappRouter = require("./routes/PharmacyWhatsappRouter");
var AdminLogin = require("./routes/AdminLoginRouter");
var Subscription = require("./routes/SubscriptionRouter");
var ClinicRoutes = require("./routes/ClinicRoutes");
var SmsPackageRoutes = require("./routes/SmsPackageRouter");
var FeedbacktemplateRoutes = require("./routes/FeedbacktemplateRoutes");
var ClinicDoctors = require("./routes/ClinicDoctorsRoutes");
var ReceiptDoctors = require("./routes/ReceiptRouter");
var DueRoutes = require("./routes/DueRouter");
var ObservationRoutes = require("./routes/ObservationRouter");
var PlantemplateRoutes = require("./routes/PlantemplateRoutes");
var DossRoutes = require("./routes/DossRouter");
var InstructionRoutes = require("./routes/InstructionRoutes");
var MedicineplanRoutes = require("./routes/MedicineplanRoutes");
var MessageRoutes = require("./routes/MessageRoutes");
var VisitRoutes = require("./routes/VisitRoutes");

var app = express();
const mongoDB = require("./config/database");
const cors = require("cors");
app.use(cors());
global.responseHandler = require("./config/responseHandler");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/appointemnt", appointmentRouter);
app.use("/patient", patientRouter);
app.use("/feedback", feedbackRouter);
app.use("/progressnotes", progressnotesRouter);
app.use("/gallery", galleryRouter);
app.use("/chdfeedbacks", FeedbackRoutes);
app.use("/clinicgallery", clinicgallery);
app.use("/patientgallery", patientgallery);
app.use("/patientvideo", patientvideo);
app.use("/plan", PlanRoutes);
app.use("/template", TemplateRoutes);
app.use("/review", ReviewRoutes);
app.use("/imagemarking", ImagemarkingRoutes);
app.use("/medicine", MedicineRoutes);
app.use("/smsTemplate", smsTemplateRoutes);
app.use("/whatsappTemplate", whatsappTemplateRoutes);
app.use("/emailTemplate", emailTemplateRoutes);
app.use("/pharmacylogin", pharmacyloginRouter);
app.use("/pdrugmaster", pdrugmasterRouter);
app.use("/pharmacysms", pharmacySmsRouter);
app.use("/pharmacywhatsapp", pharmacywhatsappRouter);
app.use("/pharmacyemail", pharmacyEmailRouter);
app.use("/accountslogin", accountsloginRouter);
app.use("/adminLogin", AdminLogin);
app.use("/subscription", Subscription);
app.use("/clinic", ClinicRoutes);
app.use("/smspackage", SmsPackageRoutes);
app.use("/feedbacktemplate", FeedbacktemplateRoutes);
app.use("/ClinicDoctors", ClinicDoctors);
app.use("/summary", summary);
app.use("/Receipt", ReceiptDoctors);
app.use("/Due", DueRoutes);
app.use("/Observation", ObservationRoutes);
app.use("/Plantemplate", PlantemplateRoutes);
app.use("/Doss", DossRoutes);
app.use("/Instruction", InstructionRoutes);
app.use("/Medicineplan", MedicineplanRoutes);
app.use("/Message", MessageRoutes);
app.use("/visit", VisitRoutes);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
