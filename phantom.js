var page = require('webpage').create();
page.open('build/resume.html', function() {
  page.paperSize = {
    format: 'A4',
    orientation: 'portrait',
    border: '5mm'
  };
  page.render('build/resume.pdf');
  phantom.exit();
});