const express = require('express');
const path = require('path');
const app = express();

app.get('/course/:courseId', (req, res) => {
    const courseId = req.params.courseId;

    // Serve the launch page with an iframe that loads the SCORM course
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>SCORM Course</title>
            <script src="/courses/${courseId}/build/libraries/SCORM_API_wrapper.js"></script>
        </head>
        <body style="height: 100vh;">
            <iframe 
                id="scormCourseFrame" 
                src="/courses/${courseId}/build/index.html" 
                width="100%" 
                height="100%" 
                frameborder="0">
            </iframe>
            <script>
                // Inject SCORM API into the window object
                window.API = {
                    LMSInitialize: function() { return 'true'; },
                    LMSFinish: function() { return 'true'; },
                    LMSGetValue: function(key) { /* Return stored data for key */ },
                    LMSSetValue: function(key, value) { /* Store data for key */ return 'true'; },
                    LMSCommit: function() { return 'true'; },
                    LMSGetLastError: function() { return '0'; }, // No error
                    LMSGetErrorString: function(errorCode) { return 'No error'; },
                    LMSGetDiagnostic: function(errorCode) { return 'No diagnostic information'; }
                };
            </script>
        </body>
        </html>
    `);
});

app.use('/courses/:courseId', express.static(path.join(__dirname, '2')));

app.listen(3000, () => console.log('Server running on port 3000'));
