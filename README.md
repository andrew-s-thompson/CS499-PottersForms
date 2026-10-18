# Designing Potter's Wheel Web-Based Intake Forms
### Andrew Thompson
### CS 499 (Web Development)

## Project Description
This application plays a role in the Senior Design Project for Potter's Wheel. The senior design project is responsible for digitizing Potter's Wheel collection of forms, and this application will be specifically scoped toward designing the user-facing web interface for digital form submissions. The application is essentially, an online form submission interface, similar to Google Forms or Microsoft Forms, but with custom connections, submitting the forms to Potter's Wheel. 
The problem this solution solves is filling the need for a user-interface that allows users to submit forms online, rather than filling them all out on paper. This ends up supporting the web form collection portion of the senior design project digitizing records for Potter's Wheel. A user will be able to open this web interface and select which form they would like to fill out. Then, the form's content will be loaded/rendered into the DOM and the form options will appear. The user will be able to complete the form and interact with the form elements, submitting them, and confirming their submission.

## Target Users
I expect this application to be used by Potter's Wheel program participants. These individuals are generally students in the Evansville Promise Neighborhood target schools and the parents or guardians of these students. Key notes to make are that some of these individuals may struggle with literacy or English reading, so a key benefit of online forms will be the capability to use screen readers and translation options.

## Core Features
1. **form selection page** for the user to select which form they would like to fill out.
2. **custom forms** will be loaded on selection, building the forms and options from Potter's Wheel customizations so that they don't have to program in HTML/CSS/JS
3. **special form option types** such as signatures will be available on top of traditional form options like radio buttons and checkboxes.
4. **submission confirmations** will ask the user to verify all of the values that they are attempting to submit
5. **form submission** will allow the user's form to be sent (to the other portions of the senior project) for the user to access.

## Project Scope
This project is an appropriate size for approximately 8 weeks because it is reasonably scoped to standard HTML, CSS, and JS interactions, such as forms and form elements, multiple HTML pages, and dynamically loaded pages. However, on top of the traditionally expected parts, it will involve some customizations like signature boxes and API connections to load form elements dynamically. 

Essential functionality involves the ability to fill out forms and submit them. Form elements should be the typical options and some extras like signature boxes and input options to be determined. Additional and optional functionality in this form involve the dynamic loading of forms. The Proof of Concept of the project would be stable with forms being programmed, but dynamic loading would be helpful for Potter's Wheel to deploy additional forms. Another additional feature that would be optional but helpful is rendering the user's submissions as a PDF that matches the paper forms that Potter's Wheel collected, so that online and paper forms are stored in the same format. The most challenging part that I forsee is the PDF rendering portion, which will make it the last priority.

## Initial UI Sketch
Attached to the repository as initial-drawing.pdf
[Initial Drawing](initial-drawing.pdf)

## Initial Data Requirements
The application should mostly avoid locally storing values. However, it should be able to "load" forms dynamically from some sort of JSON or other format so that a future deployment can utilize a GET call to an API to truly load the forms  that Potter's Wheel has configured dynamically. (Before this is set up, it would be a good use case to load form data from a database, especially if a database is a technical requirement for the project.) Additionally, the completed forms will eventually be submitted to an outside source via a POST API call. However, for the scope of this project, a PostgreSQL database would be a good place to track the submitted form data within the scope of this project. That means that actual form configuration data (types, labels, etc.) and submitted form values are the two types of data that will be needed. 
A quick example of submitted form data could be
- Name
- Date
- Selected (from options)
- Agree (Yes/No)
- Signature
- Form Name (or ID)


