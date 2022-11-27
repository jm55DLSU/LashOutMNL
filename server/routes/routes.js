const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/
app.get(`/services/:category`, controller.getServices);

app.post(`/addAppointment`, controller.addAppointment);

app.get(`/getInclusions/:UID`, controller.getInclusionsPage);

app.post(`/addInclusions`, controller.addInclusions);

app.post(`/addClientDetails`, controller.addClientDetails);

app.get(`/getOrderSummary`, controller.getOrderSummary);

app.get(`/getAppointment`, controller.getAppointment);

app.get(`/getAllAppointments`, controller.getAllAppointment)

module.exports = app;