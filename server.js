"use strict";
var express = require('express');
var app = express();

function formatTime(str) {
  const time = new Date(str);
  const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October', 'November','December'];
  return `${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
}
app.get('/:time', (req, res) => {
  const time = Date.parse(req.params.time);
  if (!isNaN(time)) {
    res.send({
      unix: time,
      natural: formatTime(time)
    });
  } else {
    res.send({unix: null, natural: null});
  }
  res.end();
});

app.listen(8080);
